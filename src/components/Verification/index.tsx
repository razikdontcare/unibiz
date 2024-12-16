"use client";
import Link from "next/link";
import Logo from "../icons/logo";
import { useState, MouseEventHandler } from "react";

export default function Verification() {
  const [timer, setTimer] = useState<number>(59);
  const [isResend, setIsResend] = useState<boolean>(false);

  const handleResend: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setIsResend(true);
    let time = timer;
    const interval = setInterval(() => {
      time = time - 1;
      setTimer(time);
      if (time === 0) {
        clearInterval(interval);
        setTimer(59);
        setIsResend(false);
      }
    }, 1000);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-start shadow-[0px_0px_13.1px_-1px_#00000045] rounded-xl p-10 w-full max-w-xl gap-5 relative">
        <div className="absolute w-full flex items-center justify-center -top-16">
          <div className="relative size-32 rounded-full overflow-hidden ">
            <Logo className="absolute size-full" />
          </div>
        </div>
        <h1 className="capitalize font-bold text-4xl pt-10">Cek E-Mail Kamu</h1>
        <p className="text-center">
          Kamu hampir selesai! Kami baru saja mengirimkan email verifikasi ke{" "}
          <span className="font-bold">name@example.com</span>
        </p>
        <p className="text-center">
          Segera cek inbox/spam email dan klik tombol {'"Verifikasi Sekarang"'}{" "}
          agar bisa melanjutkan proses pengisian data diri.
        </p>
        <p className="text-center">Masih tidak mendapatkan e-mail?</p>

        {isResend ? (
          <span className="text-center text-sm text-black/45">
            Mohon tunggu dalam <span className="font-bold">{timer}</span> untuk
            kirim ulang
          </span>
        ) : (
          <button
            onClick={handleResend}
            className="capitalize bg-primary text-white px-5 py-2 rounded-xl hover:bg-primary/80 transition-colors duration-300"
          >
            Kirim ulang email
          </button>
        )}
        <span className="pt-10">
          Perlu bantuan?{" "}
          <Link href="/help" className="text-primary underline">
            Hubungi kami
          </Link>
        </span>
      </div>
    </>
  );
}
