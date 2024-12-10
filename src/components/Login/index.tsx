"use client";

import { UserContextProvider } from "@/utils/context";
import Logo from "@/components/icons/logo";
import Link from "next/link";
import { useState } from "react";
import QRCodeIcon from "../icons/qrcode";
import GoogleIcon from "../icons/google";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <UserContextProvider>
        <div className="flex flex-col items-center justify-start h-screen overflow-hidden py-10 gap-10 w-full mx-auto ">
          <div className="flex items-center justify-center">
            <Logo className="size-36" />
            <span className="font-bold text-6xl text-primary">UniBiz</span>
          </div>
          <div className="flex flex-col items-center justify-start shadow-[0px_0px_13.1px_-1px_#00000045] rounded-xl px-10 py-20 w-full h-full max-w-xl">
            <div className="flex items-center justify-between w-full pb-14">
              <h1 className="font-bold text-2xl">Masuk ke UniBiz</h1>
              <Link href="/register" className="text-primary text-2xl">
                Daftar
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-3">
              <div className="flex items-center w-full">
                <input
                  type="text"
                  className="w-full border-2 rounded-lg border-border py-3 px-5"
                  placeholder="Nomor HP atau Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <span className="self-start px-5">Contoh: 085726391835</span>
              <div className="flex items-center w-full">
                <input
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
                className="font-bold text-primary text-xl pt-10 pb-5"
              >
                Butuh Bantuan?
              </Link>
            </div>
            <div className="flex items-center w-full">
              <button
                className="w-full border-2 rounded-lg font-bold border-primary disabled:border-border py-3 px-5 disabled:text-disable-secondary disabled:bg-disable-primary bg-primary text-white hover:bg-primary/90 transition-colors duration-300"
                disabled={email === "" || password === ""}
              >
                Selanjutnya
              </button>
            </div>
            <div className="flex items-center justify-center w-full gap-1">
              <span className="w-20 h-[0.07rem] bg-black" />
              <span className="py-5 divider">atau masuk dengan</span>
              <span className="w-20 h-[0.07rem] bg-black" />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <button className="w-full flex items-center justify-center gap-2 border-2 hover:bg-border hover:text-white rounded-lg font-bold border-border disabled:border-border py-3 px-5 disabled:text-disable-secondary disabled:bg-disable-primary bg-white text-border transition-colors duration-300">
                <QRCodeIcon />
                <span>Scan Kode QR</span>
              </button>
              <button className="w-full flex items-center justify-center gap-2 border-2 hover:bg-border hover:text-white rounded-lg font-bold border-border disabled:border-border py-3 px-5 disabled:text-disable-secondary disabled:bg-disable-primary bg-white text-border transition-colors duration-300">
                <GoogleIcon />
                <span>Google</span>
              </button>
            </div>
          </div>
        </div>
      </UserContextProvider>
    </>
  );
}
