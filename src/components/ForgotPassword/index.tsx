"use client";
import Link from "next/link";
import Logo from "../icons/logo";
import { useState } from "react";
import { sendResetPasswordEmail } from "@/app/actions";

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSendEmail: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendResetPasswordEmail(email);
      setLoading(false);
      setSuccess(true);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        setLoading(false);
      }
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-start h-screen py-10 gap-10 w-full mx-auto ">
        <Link href="/" className="flex items-center justify-center">
          <Logo className="size-20" />
          <span className="font-bold text-4xl text-primary">UniBiz</span>
        </Link>
        <div className="flex-1 flex items-center justify-center">
          <form
            onSubmit={handleSendEmail}
            className="flex flex-col items-center justify-start shadow-[0px_0px_13.1px_-1px_#00000045] rounded-xl min-w-96 p-10 w-full max-w-xl gap-3"
          >
            <div className="w-full flex items-center justify-center">
              <h1 className="font-bold text-xl">Reset Password</h1>
            </div>
            {success && (
              <span className="text-sm text-btn">Email telah terkirim.</span>
            )}
            <div className="flex items-center border border-border rounded-xl w-full py-3 px-5">
              <input
                placeholder="Masukkan email Anda"
                className="w-full h-full focus:ring-transparent focus:outline-none"
                type={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center w-full">
              <button
                type="submit"
                className="w-full border-2 rounded-lg font-bold border-btn disabled:border-border py-3 px-5 disabled:text-disable-secondary disabled:bg-disable-primary bg-btn text-white hover:bg-btn/90 transition-colors duration-300"
                disabled={email === "" || loading}
              >
                {loading ? "Loading..." : "Selanjutnya"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
