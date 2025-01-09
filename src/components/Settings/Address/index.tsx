"use client";
import PlusIcon from "@/components/icons/plus";
import { useEffect, useState } from "react";
import formatPhone from "@/utils/formatPhone";
import CheckIcon from "@/components/icons/Check";

export default function Address() {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <h1 className="font-bold text-2xl">Alamat Saya</h1>
        <button
          onClick={() => setOpen(true)}
          className="bg-primary text-white px-4 py-3"
        >
          <span className="flex items-center justify-center gap-3">
            <PlusIcon className="size-6" />
            Tambah Alamat Baru
          </span>
        </button>
      </div>
      <div className="w-full h-[1px] bg-border my-5" />
      <div className="flex-1 flex flex-col gap-10">
        <div className="flex justify-between w-full gap-2">
          <div className="flex flex-col w-full gap-1">
            <div className="flex items-center gap-2 text-xl">
              <span className="font-medium">Kos Jimbaran</span>
              <span className="font-medium">|</span>
              <span className="font-normal text-lg">{`(${formatPhone(
                "085186852411"
              )})`}</span>
            </div>
            <span className="text-lg">
              Jl. Pintas Siligita Selatan, Benoa, Kec. Kuta Sel., Kabupaten
              Badung, Bali 80361{" "}
            </span>
            <span className="bg-primary text-white w-fit p-1">Utama</span>
          </div>
          <div className="flex flex-col items-end justify-start gap-1 min-w-48">
            <button className="text-primary">Ubah</button>
            <button
              className="text-black border border-black rounded disabled:text-disable-secondary disabled:border-disable-secondary w-fit p-1"
              disabled
            >
              Atur sebagai utama
            </button>
          </div>
        </div>
        <div className="flex justify-between w-full gap-2">
          <div className="flex flex-col w-full gap-1">
            <div className="flex items-center gap-2 text-xl">
              <span className="font-medium">Rumah Karangasem</span>
              <span className="font-medium">|</span>
              <span className="font-normal text-lg">{`(${formatPhone(
                "085186852411"
              )})`}</span>
            </div>
            <span className="text-lg">
              Jl. Pintas Siligita Selatan, Benoa, Kec. Kuta Sel., Kabupaten
              Badung, Bali 80361{" "}
            </span>
          </div>
          <div className="flex flex-col items-end justify-start gap-1 min-w-48">
            <button className="text-primary">Ubah</button>
            <button className="text-black border border-black rounded disabled:text-disable-secondary disabled:border-disable-secondary w-fit p-1">
              Atur sebagai utama
            </button>
          </div>
        </div>
      </div>

      <AddAddressOverlay open={open} set={setOpen} success={setSuccess} />
      <Overlay open={success} set={setSuccess} />
    </>
  );
}

function AddAddressOverlay({
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
        <div className="bg-white p-5 flex flex-col min-w-96 gap-5">
          <span className="font-medium text-xl">Alamat Baru</span>
          <div className="flex w-full items-center gap-2">
            <input
              type="text"
              placeholder="Nama"
              className="w-full p-3 focus:ring-transparent focus:outline-none border border-[#A9A6A6] text-[#626262] min-w-80"
            />
            <input
              type="tel"
              placeholder="Nomor Telepon"
              className="w-full p-3 focus:ring-transparent focus:outline-none border border-[#A9A6A6] text-[#626262]"
            />
          </div>
          <div className="flex w-full items-center gap-2">
            <input
              type="text"
              placeholder="Provinsi, Kota, Kecamatan, Kode Pos"
              className="w-full p-3 focus:ring-transparent focus:outline-none border border-[#A9A6A6] text-[#626262]"
            />
          </div>
          <div className="flex w-full items-center">
            <input
              type="text"
              placeholder="Nama Jalan, Gedung, No. Rumah"
              className="w-full p-3 focus:ring-transparent focus:outline-none border border-[#A9A6A6] text-[#626262]"
            />
          </div>
          <div className="flex w-full items-center">
            <input
              type="text"
              placeholder="Detail Lainnya (Cth: Blok / Unit No., Patokan)"
              className="w-full p-3 focus:ring-transparent focus:outline-none border border-[#A9A6A6] text-[#626262]"
            />
          </div>
          <div>
            <div>
              <iframe
                width={600}
                height={150}
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=600&height=150&hl=en&q=Udayana%20University%20Badung+()&t=&z=16&ie=UTF8&iwloc=B&output=embed"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span>Tandai Sebagai:</span>
            <div className="flex items-center gap-2">
              <button className="py-1 px-5 border border-black">Rumah</button>
              <button className="py-1 px-5 border border-black">Kantor</button>
              <button className="py-1 px-5 border border-border text-border">
                <PlusIcon className="size-6" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-end w-full gap-3">
            <button onClick={() => set(false)} className="text-black px-8 py-1">
              Batal
            </button>
            <button
              onClick={() => {
                set(false);
                success(true);
              }}
              className="bg-primary text-white px-8 py-1"
            >
              Simpan
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
            Alamat berhasil ditambahkan.
          </span>
        </div>
      </div>
    </>
  );
}
