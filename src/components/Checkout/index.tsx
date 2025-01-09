"use client";
import Image from "next/image";
import formatPrice from "@/utils/formatPrice";
import ShieldIcon from "@/components/icons/shield";
import CreditCardIcon from "@/components/icons/creditcard";
import BackBtn from "@/components/back";
import Link from "next/link";
import { useEffect, useState } from "react";
import QRISIcon from "../icons/qris";
import ChevronRightIcon from "../icons/chevronright";
import DanaIcon from "../icons/dana";
import BCAIcon from "../icons/bca";
import BNIIcon from "../icons/bni";
import FullQrCode from "../icons/fullqrcode";
import GopayWithTextIcon from "../icons/gopayWithText";
import DanaWithTextIcon from "../icons/danaWithText";
import formatTime from "@/utils/formatTime";
import CheckIcon from "../icons/Check";

export default function Checkout() {
  const [openPayment, setOpenPayment] = useState(false);
  const [openQris, setOpenQris] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  return (
    <>
      <div className="flex items-start container mx-auto max-w-7xl gap-5 pt-36 min-h-screen">
        <BackBtn />
        <div className="flex-1 flex flex-col pt-10 gap-10">
          <div className="flex flex-col w-full gap-3">
            <span className="font-bold uppercase text-4xl">
              Universitas Udayana
            </span>
            <div className="border border-black p-3 flex items-center gap-3">
              <div className="relative size-28 rounded-xl border-2 border-black overflow-hidden">
                <Image
                  src={
                    "https://picsum.photos/seed/penyewaan-gedung-widya-sabha/512/512"
                  }
                  alt={"universitas udayana"}
                  className="object-contain"
                  fill
                />
              </div>
              <div className="flex flex-col justify-center gap-2">
                <span className="font-bold text-xl">
                  Penyewaan Gedung Widya Sabha
                </span>
                <span className="font-bold text-2xl">
                  {formatPrice(240000, 0)}
                </span>
                <div className="border border-black/40 rounded-xl flex items-center gap-2 w-fit px-2">
                  <span>Total Item:</span>
                  <span>12</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-3">
            <span className="font-bold uppercase text-4xl">Farmasi</span>
            <div className="border border-black p-3 flex items-center gap-3">
              <div className="relative size-28 rounded-xl border-2 border-black overflow-hidden">
                <Image
                  src={"https://picsum.photos/seed/salep-luka-herbal/512/512"}
                  alt={"universitas udayana"}
                  className="object-contain"
                  fill
                />
              </div>
              <div className="flex flex-col justify-center gap-2">
                <span className="font-bold text-xl">Salep luka herbal</span>
                <span className="font-bold text-2xl">
                  {formatPrice(15000, 0)}
                </span>
                <div className="border border-black/40 rounded-xl flex items-center gap-2 w-fit px-2">
                  <span>Total Item:</span>
                  <span>1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 pt-5">
          <div className="w-full p-5 border border-black/40 rounded-xl flex flex-col gap-5">
            <span className="font-bold text-4xl">Ringkasan Belanja</span>
            <span className="font-bold text-2xl">Total Belanja</span>
            <div className="flex items-center justify-between w-full">
              <span className="font-bold text-xl">Total Harga</span>
              <span className="font-bold text-xl">
                {formatPrice(255000, 0)}
              </span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="font-bold text-xl">Biaya Lainnya</span>
              <span className="font-bold text-xl">{formatPrice(20000, 0)}</span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="font-bold text-3xl">Total Tagihan</span>
              <span className="font-bold text-2xl">
                {formatPrice(255000 + 20000, 0)}
              </span>
            </div>
            <button
              onClick={() => setOpenPayment(true)}
              className="w-full bg-primary text-white flex items-center justify-center p-5 rounded-xl gap-1 my-5"
            >
              <ShieldIcon className="size-6" />
              <span className="font-bold text-xl">Bayar</span>
            </button>
            <Link href={"/settings/billing"} className="w-full">
              <div className=" border border-black flex items-center justify-start px-10 gap-3">
                <CreditCardIcon className="size-24" />
                <div className="span font-bold text-2xl w-full text-start">
                  Kartu Kredit / Cicilan
                </div>
                <div className=" flex items-center justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <PaymentOverlay
        open={openPayment}
        set={setOpenPayment}
        qrisOverlay={setOpenQris}
      />
      <PaymentOverlayQris
        open={openQris}
        set={setOpenQris}
        successOverlay={setOpenSuccess}
      />
      <PaymentSuccessOverlay open={openSuccess} set={setOpenSuccess} />
    </>
  );
}

function PaymentOverlay({
  open,
  set,
  qrisOverlay,
}: {
  open: boolean;
  set: React.Dispatch<React.SetStateAction<boolean>>;
  qrisOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <div
        className={`absolute top-0 left-0 flex items-center justify-center h-screen w-full backdrop-blur-[1px] bg-black/10 ${
          !open ? "hidden" : ""
        }`}
      >
        <div className="bg-[#F3F4F5] flex flex-col items-center justify-center min-w-96 rounded-xl overflow-hidden">
          <div className="w-full flex items-center justify-between pt-5 px-5 bg-white">
            <span className="font-bold text-2xl">Pilih Pembayaran</span>
            <button onClick={() => set(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="w-full flex flex-col justify-center gap-3 p-5 bg-white">
            <span className="font-bold text-lg">Dompet Digital</span>
            <button
              onClick={() => {
                set(false);
                qrisOverlay(true);
              }}
              className="flex items-center w-full"
            >
              <div className="flex-1 flex items-center gap-2">
                <QRISIcon className="size-14" />
                <span className="font-medium">QRIS</span>
              </div>
              <div className="flex items-center justify-center w-fit">
                <ChevronRightIcon className="size-4" />
              </div>
            </button>
            <button className="flex items-center w-full">
              <div className="flex-1 flex items-center gap-2">
                <DanaIcon className="size-14" />
                <span className="font-medium">DANA</span>
              </div>
              <div className="flex items-center justify-center w-fit">
                <ChevronRightIcon className="size-4" />
              </div>
            </button>
          </div>
          <div className="w-full flex flex-col justify-center gap-3 p-5 bg-white mt-2">
            <span className="font-bold text-lg">Virtual Account</span>
            <button className="flex items-center w-full">
              <div className="flex-1 flex items-center gap-2">
                <BCAIcon className="size-14" />
                <span className="font-medium">BCA Virtual Account</span>
              </div>
              <div className="flex items-center justify-center w-fit">
                <ChevronRightIcon className="size-4" />
              </div>
            </button>
            <button className="flex items-center w-full">
              <div className="flex-1 flex items-center gap-2">
                <BNIIcon className="size-14" />
                <span className="font-medium">BNI Virtual Account</span>
              </div>
              <div className="flex items-center justify-center w-fit">
                <ChevronRightIcon className="size-4" />
              </div>
            </button>
          </div>
          <div className="w-full flex flex-col justify-center gap-3 p-5 bg-white mt-2">
            <span className="font-bold text-lg">Kartu Kredit</span>
            <button className="flex items-center w-full">
              <div className="flex-1 flex items-center gap-2">
                <CreditCardIcon className="w-14 h-6" />
                <span className="font-medium">Kartu Kredit / Cicilan</span>
              </div>
              <div className="flex items-center justify-center w-fit">
                <ChevronRightIcon className="size-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function PaymentSuccessOverlay({
  open,
  set,
}: {
  open: boolean;
  set: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <div
        className={`absolute top-0 left-0 flex items-center justify-center h-screen w-full backdrop-blur-[1px] bg-black/10 ${
          !open ? "hidden" : ""
        }`}
      >
        <div className="bg-[#F3F4F5] flex flex-col items-center justify-center min-w-96 rounded-xl overflow-hidden">
          <div className="w-full flex items-center justify-between p-5 bg-white">
            <span className="font-bold text-2xl">Proses Pembayaran</span>
            <button onClick={() => set(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center w-full bg-white p-8 gap-5">
            <CheckIcon className="size-20" />
            <span className="font-bold text-xl">PEMBAYARAN ANDA BERHASIL</span>
            <span className="text-lg">
              Terima kasih sudah menggunakan UniBiz Udayana
            </span>
            <div className="flex flex-col items-center justify-center w-full">
              <div className="flex items-center gap-1">
                <span>Nomor pesanan Anda adalah:</span>
                <span className="text-primary font-medium">66327637</span>
              </div>
              <div className="flex items-center gap-1">
                <span>Jumlah pembayaran:</span>
                <span className="text-primary font-medium">
                  {formatPrice(74500, 0)}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span>Anda akan menerima pesan konfirmasi melalui fitur </span>
                <span className="text-primary font-medium"> chat</span>
              </div>
              <div className="flex items-center gap-1">
                <span>Pesanan Anda akan diproses secepatnya</span>
              </div>
            </div>
            <button
              className="rounded-xl text-xl bg-primary text-white px-5 py-3 font-medium"
              onClick={() => set(false)}
            >
              Kembali Berbelanja
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function PaymentOverlayQris({
  open,
  set,
  successOverlay,
}: {
  open: boolean;
  set: React.Dispatch<React.SetStateAction<boolean>>;
  successOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [remainingTimer, setRemainingTimer] = useState(14399);

  useEffect(() => {
    if (open) {
      const timerId = setInterval(() => {
        setRemainingTimer((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          }
          // Stop at 0 if the timer runs out
          clearInterval(timerId);
          return 0;
        });
      }, 1000);

      return () => clearInterval(timerId);
    } else {
      setRemainingTimer(14399);
    }
  }, [open]);

  return (
    <>
      <div
        className={`absolute top-0 left-0 flex items-center justify-center h-screen w-full backdrop-blur-[1px] bg-black/10 ${
          !open ? "hidden" : ""
        }`}
      >
        <div className="bg-[#F3F4F5] flex flex-col items-center justify-center min-w-96 w-[30rem] rounded-xl overflow-hidden">
          <div className="w-full flex items-center justify-between p-5 bg-white">
            <span className="font-bold text-2xl">Proses Pembayaran</span>
            <button onClick={() => set(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="w-full flex flex-col justify-center gap-3 p-5 bg-white mt-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg">{formatPrice(78500, 0)}</span>
              <span className="font-bold text-lg flex items-center">
                {"Rincian Pembayaran >"}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full p-5 mt-2 bg-white">
            <QRISIcon className="w-24" />
            <div
              onClick={() => {
                successOverlay(true);
                set(false);
              }}
            >
              <FullQrCode />
            </div>
            <span className="font-medium text-xl py-1">ID623782911067</span>
          </div>
          <div className="flex items-center justify-between w-full p-5 bg-white mt-2">
            <GopayWithTextIcon className="w-20" />
            <DanaWithTextIcon className="w-20" />
            <BNIIcon className="w-20" />
          </div>
          <div className="flex items-center justify-between w-full p-5 bg-white mt-2">
            <span className="font-bold text-lg">Sisa waktu pembayaran</span>
            <span className="font-bold text-lg">
              {formatTime(remainingTimer)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
