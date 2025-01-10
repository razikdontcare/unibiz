"use client";
import CheckIcon from "@/components/icons/Check";
import PlusIcon from "@/components/icons/plus";
import { useEffect, useState } from "react";

export default function Billing() {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  return (
    <>
      <div className="flex flex-col w-full gap-3">
        <div className="flex items-center justify-between w-full">
          <span className="font-bold text-xl">Kartu Kredit / Debit</span>
          <button
            onClick={() => setOpen(true)}
            className="bg-primary text-white px-4 py-3"
          >
            <span className="flex items-center justify-center gap-3">
              <PlusIcon className="size-6" />
              Add New Card
            </span>
          </button>
        </div>
        <div className="w-full h-[1px] bg-border my-5" />
        <div className="flex items-center justify-center min-h-20">
          <span className="text-[#626262]">{"You don't have cards yet."}</span>
        </div>
      </div>
      <div className="flex flex-col w-full gap-3">
        <div className="flex items-center justify-between w-full">
          <span className="font-bold text-xl">BCA OneKlik</span>
          <button
            onClick={() => setOpen(true)}
            className="bg-primary text-white px-4 py-3"
          >
            <span className="flex items-center justify-center gap-3">
              <PlusIcon className="size-6" />
              Add New Card
            </span>
          </button>
        </div>
        <div className="w-full h-[1px] bg-border my-5" />
        <div className="flex items-center justify-center min-h-20">
          <span className="text-[#626262]">{"You don't have cards yet."}</span>
        </div>
      </div>
      <div className="flex flex-col w-full gap-3">
        <div className="flex items-center justify-between w-full">
          <span className="font-bold text-xl">BRI Direct Debit</span>
          <button
            onClick={() => setOpen(true)}
            className="bg-primary text-white px-4 py-3"
          >
            <span className="flex items-center justify-center gap-3">
              <PlusIcon className="size-6" />
              Add New Card
            </span>
          </button>
        </div>
        <div className="w-full h-[1px] bg-border my-5" />
        <div className="flex items-center justify-center min-h-20">
          <span className="text-[#626262]">{"You don't have cards yet."}</span>
        </div>
      </div>

      <AddCard open={open} set={setOpen} success={setSuccess} />
      <Overlay open={success} set={setSuccess} />
    </>
  );
}

function AddCard({
  open,
  set,
  success,
}: {
  open: boolean;
  set: React.Dispatch<React.SetStateAction<boolean>>;
  success: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <div
        className={`absolute top-0 left-0 flex items-center justify-center h-screen w-full backdrop-blur-[1px] bg-black/10 ${
          !open ? "hidden" : ""
        }`}
      >
        <div className="bg-white p-10 flex flex-col min-w-96 gap-5">
          <span className="font-medium text-xl">Tambahkan Kartu</span>
          <div className="bg-[#4CAF50]/15 border border-[#4CAF50] flex flex-col items-start justify-center p-3 text-[#626262]">
            <span className="text-lg">
              Rincian kartu kredit Anda dilindungi
            </span>
            <span className="max-w-96 text-sm">
              Kami memastikan bahwa informasi kartu anda tetap terlindungi.
              UniBiz tidak akan mengakses info kartu Anda.
            </span>
          </div>
          <span className="text-[#626262]">Rincian Kartu</span>
          <div className="flex w-full items-center">
            <input
              type="number"
              placeholder="Nomor Kartu"
              className="w-full p-3 focus:ring-transparent focus:outline-none border border-[#A9A6A6] text-[#626262]"
            />
          </div>
          <div className="flex w-full items-center gap-2">
            <input
              type="text"
              placeholder="Tanggal Kadalwarsa (BB/TT)"
              pattern="\d{2}/\d{2}"
              className="w-full p-3 focus:ring-transparent focus:outline-none border border-[#A9A6A6] text-[#626262]"
            />
            <input
              type="number"
              pattern="\d{3}"
              placeholder="CVV"
              className="w-28 p-3 focus:ring-transparent focus:outline-none border border-[#A9A6A6] text-[#626262]"
            />
          </div>
          <div className="flex w-full items-center">
            <input
              type="text"
              placeholder="Nama di Kartu"
              className="w-full p-3 focus:ring-transparent focus:outline-none border border-[#A9A6A6] text-[#626262]"
            />
          </div>
          <span className="text-[#626262]">Alamat Tagihan</span>
          <div className="flex w-full items-center">
            <input
              type="text"
              placeholder="Alamat Kamu"
              className="w-full p-3 focus:ring-transparent focus:outline-none border border-[#A9A6A6] text-[#626262]"
            />
          </div>
          <div className="flex items-center justify-end w-full gap-3">
            <button
              onClick={() => set(false)}
              className="bg-white border border-border text-[#626262] px-8 py-1"
            >
              Nanti Saja
            </button>
            <button
              onClick={() => {
                set(false);
                success(true);
              }}
              className="bg-primary border border-primary text-white px-8 py-1"
            >
              Kirimkan
            </button>
          </div>
        </div>
      </div>
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
          <span className="font-medium text-xl">
            Credit Card telah berhasil ditambahkan.
          </span>
        </div>
      </div>
    </>
  );
}
