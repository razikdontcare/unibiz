"use client";

import Logo from "@/components/icons/logo";
import Link from "next/link";
import { useState } from "react";
import QRCodeIcon from "../icons/qrcode";
import GoogleIcon from "../icons/google";
import { useFormStatus } from "react-dom";
import isEmail from "@/utils/isEmail";
import { auth } from "@/db/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { FirebaseError } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

export default function Login({
  searchParams,
}: {
  searchParams: {
    callbackUrl: string | undefined;
    error: string | undefined;
  };
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { pending } = useFormStatus();

  const router = useRouter();

  const errorMessages = (error: string | undefined) => {
    switch (error) {
      case "auth/invalid-credential":
        return <span className="text-red-400">Email atau password salah.</span>;
      case "auth/wrong-password":
        return <span className="text-red-400">Email atau password salah.</span>;
      case "auth/user-not-found":
        return <span className="text-red-400">Email atau password salah.</span>;
      default:
        return <span className="text-red-400">Terjadi kesalahan.</span>;
    }
  };

  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-start h-screen overflow-hidden py-10 gap-10 w-full mx-auto ">
          <Link href="/" className="flex items-center justify-center">
            <Logo className="size-20" />
            <span className="font-bold text-4xl text-primary">UniBiz</span>
          </Link>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                if (isEmail(email)) {
                  const credential = await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                  );
                  const idToken = await credential.user.getIdToken();

                  await fetch("/api/login", {
                    method: "GET",
                    headers: {
                      Authorization: `Bearer ${idToken}`,
                    },
                  });

                  router.push(searchParams.callbackUrl || "/");
                }
              } catch (error) {
                if (error instanceof FirebaseError) {
                  router.push(
                    `/login?error=${error.code}&callbackUrl=${
                      searchParams.callbackUrl || "/"
                    }`
                  );
                }
              }
            }}
            className="flex flex-col items-center justify-start shadow-[0px_0px_13.1px_-1px_#00000045] rounded-xl px-10 py-20 w-full max-w-xl"
          >
            <div className="flex items-center justify-between w-full pb-4">
              <h1 className="font-bold text-xl">Masuk ke UniBiz</h1>
              <Link href="/register" className="text-primary text-xl">
                Daftar
              </Link>
            </div>
            {searchParams.error && (
              <div className="flex items-center justify-start p-3 w-full">
                {errorMessages(searchParams.error)}
              </div>
            )}
            <div className="flex flex-col items-center justify-center w-full gap-3">
              <input
                type="hidden"
                name="redirectTo"
                value={searchParams.callbackUrl || "/"}
              />
              <div className="flex items-center w-full">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="w-full border-2 rounded-lg border-border py-3 px-5"
                  placeholder="Nomor HP atau Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <span className="self-start px-5">Contoh: unibiz@gmail.com</span>
              <div className="flex items-center w-full">
                <input
                  name="password"
                  id="password"
                  type="password"
                  className="w-full border-2 rounded-lg border-border py-3 px-5"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-end w-full">
              <Link
                href="#"
                className={`font-bold text-primary ${
                  !searchParams.error && "pt-10"
                } pb-5`}
              >
                Butuh Bantuan?
              </Link>
            </div>
            <div className="flex items-center w-full">
              <button
                type="submit"
                className="w-full border-2 rounded-lg font-bold border-btn disabled:border-border py-3 px-5 disabled:text-disable-secondary disabled:bg-disable-primary bg-btn text-white hover:bg-btn/90 transition-colors duration-300"
                disabled={email === "" || password === "" || pending}
                aria-disabled={pending}
              >
                {pending ? "Loading..." : "Selanjutnya"}
              </button>
            </div>
            <div className="flex items-center justify-center w-full gap-1">
              <span className="w-20 h-[0.07rem] bg-black" />
              <span className="py-5 divider">atau masuk dengan</span>
              <span className="w-20 h-[0.07rem] bg-black" />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <Link
                href="/login/qr"
                className="w-full flex items-center justify-center gap-2 border-2 hover:bg-btn hover:border-btn hover:text-white rounded-lg font-bold border-border disabled:border-border py-3 px-5 disabled:text-disable-secondary disabled:bg-disable-primary bg-white text-border transition-colors duration-300"
              >
                <QRCodeIcon />
                <span>Scan Kode QR</span>
              </Link>
              <button
                onClick={async () => {
                  try {
                    const credential = await signInWithPopup(
                      auth,
                      new GoogleAuthProvider()
                    );
                    const idToken = await credential.user.getIdToken();
                    await fetch("/api/login", {
                      method: "GET",
                      headers: {
                        Authorization: `Bearer ${idToken}`,
                      },
                    });

                    router.push(searchParams.callbackUrl || "/");
                  } catch (error) {
                    if (error instanceof FirebaseError) {
                      router.push(
                        `/login?error=${error.code}&callbackUrl=${
                          searchParams.callbackUrl || "/"
                        }`
                      );
                    }
                  }
                }}
                className="w-full flex items-center justify-center gap-2 border-2 hover:bg-btn hover:border-btn hover:text-white rounded-lg font-bold border-border disabled:border-border py-3 px-5 disabled:text-disable-secondary disabled:bg-disable-primary bg-white text-border transition-colors duration-300"
              >
                <GoogleIcon />
                <span>Google</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
