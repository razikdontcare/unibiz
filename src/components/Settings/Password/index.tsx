"use client";

import { EyeClosedIcon, EyeOpenIcon } from "@/components/icons/eyes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "@/db/firebase";
import {
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword,
} from "firebase/auth";
import CheckIcon from "@/components/icons/Check";
import { FirebaseError } from "firebase/app";
import ReactFocusLock from "react-focus-lock";

export default function Password() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showOld, setShowOld] = useState(false);
  const [show, setShow] = useState(false);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleResetPassword: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    setLoading(true);
    try {
      const recentUser = await reauthenticateWithCredential(
        auth.currentUser!,
        EmailAuthProvider.credential(auth.currentUser!.email!, currentPassword)
      );
      await updatePassword(recentUser.user, password);
      setOpen(true);
      setCurrentPassword("");
      setPassword("");
      setConfirmPassword("");
      setLoading(false);
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error(error.code);
        console.error(error.message);
        setLoading(false);
      }
    }
  };

  return (
    <>
      <ReactFocusLock className="flex flex-col w-full gap-20">
        <div className="flex flex-col">
          <h1 className="font-bold text-3xl">Atur Password</h1>
          <p className="text-lg">
            Untuk keamanan akun Anda, mohon untuk tidak menyebarkan password
            Anda ke orang lain
          </p>
        </div>
        <form
          onSubmit={handleResetPassword}
          className="flex flex-col w-full gap-5"
        >
          <div className="flex items-center gap-3 text-lg">
            <span className="min-w-52 text-end">Password Lama</span>
            <div className="flex items-center border border-border rounded-sm w-full p-2">
              <input
                className="text-xl w-full h-full focus:ring-transparent focus:outline-none"
                type={!showOld ? "password" : "text"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <button type="button" onClick={() => setShowOld((prev) => !prev)}>
                {showOld ? <EyeClosedIcon /> : <EyeOpenIcon />}
              </button>
            </div>
          </div>
          <div className="flex w-full items-center justify-end">
            <Link href={"/forgot-password"}>
              <span className="font-bold text-primary">Lupa Password?</span>
            </Link>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <span className="min-w-52 text-end">Password Baru</span>
            <div className="flex items-center border border-border rounded-sm w-full p-2">
              <input
                className="text-xl w-full h-full focus:ring-transparent focus:outline-none"
                type={!show ? "password" : "text"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" onClick={() => setShow((prev) => !prev)}>
                {show ? <EyeClosedIcon /> : <EyeOpenIcon />}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <span className="min-w-52 text-end">Konfirmasi Password</span>
            <div className="flex items-center border border-border rounded-sm w-full p-2">
              <input
                className="text-xl w-full h-full focus:ring-transparent focus:outline-none"
                type={!show ? "password" : "text"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button type="button" onClick={() => setShow((prev) => !prev)}>
                {show ? <EyeClosedIcon /> : <EyeOpenIcon />}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <span className="min-w-52" />
            <button
              type="submit"
              className="flex items-center border border-primary text-white bg-primary disabled:bg-disable-primary disabled:border-disable-secondary disabled:text-disable-secondary rounded-sm px-5 py-2"
              disabled={
                currentPassword === "" ||
                password === "" ||
                confirmPassword === "" ||
                password !== confirmPassword ||
                loading
              }
            >
              <span>{loading ? "Loading..." : "Konfirmasi"}</span>
            </button>
          </div>
        </form>
      </ReactFocusLock>

      <Overlay open={open} set={setOpen} />
    </>
  );
}

function Overlay({
  open,
  set,
}: {
  open: boolean;
  set: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        set(false);
      }, 2000);
    }
  });

  return (
    <>
      <div
        className={`absolute top-0 left-0 flex items-center justify-center h-screen w-full backdrop-blur-[1px] bg-black/10 ${
          !open ? "hidden" : ""
        }`}
      >
        <div className="bg-white p-10 flex flex-col items-center justify-center min-w-96 gap-5">
          <CheckIcon className="size-14" />
          <span className="font-medium text-xl">Password berhasil diubah.</span>
        </div>
      </div>
    </>
  );
}
