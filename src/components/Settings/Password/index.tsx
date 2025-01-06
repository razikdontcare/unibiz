"use client";

import { EyeClosedIcon, EyeOpenIcon } from "@/components/icons/eyes";
import Link from "next/link";
import { useState } from "react";

export default function Password() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showOld, setShowOld] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex flex-col w-full gap-20">
        <div className="flex flex-col">
          <h1 className="font-bold text-3xl">Atur Password</h1>
          <p className="text-lg">
            Untuk keamanan akun Anda, mohon untuk tidak menyebarkan password
            Anda ke orang lain
          </p>
        </div>
        <div className="flex flex-col w-full gap-5">
          <div className="flex items-center gap-3 text-lg">
            <span className="min-w-52 text-end">Password Lama</span>
            <div className="flex items-center border border-border rounded-sm w-full p-2">
              <input
                className="text-xl w-full h-full focus:ring-transparent focus:outline-none"
                type={!showOld ? "password" : "text"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <button onClick={() => setShowOld((prev) => !prev)}>
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
              <button onClick={() => setShow((prev) => !prev)}>
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
              <button onClick={() => setShow((prev) => !prev)}>
                {show ? <EyeClosedIcon /> : <EyeOpenIcon />}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <span className="min-w-52" />
            <button
              className="flex items-center border border-primary text-white bg-primary disabled:bg-disable-primary disabled:border-disable-secondary disabled:text-disable-secondary rounded-sm px-5 py-2"
              disabled={
                currentPassword === "" ||
                password === "" ||
                confirmPassword === "" ||
                password !== confirmPassword
              }
            >
              <span>Konfirmasi</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
