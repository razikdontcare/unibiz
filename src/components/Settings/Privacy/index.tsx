"use client";

import { useState } from "react";

export default function Privacy() {
  const [enter, setEnter] = useState(false);
  return <>{enter ? <Second /> : <First set={setEnter} />}</>;
}

function First({
  set,
}: {
  set: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <div className="flex flex-col">
        <span className="font-bold text-3xl">Privacy Settings</span>
        <div className="w-full h-[2px] bg-disable-primary my-3" />
        <div className="flex items-center justify-between w-full">
          <span className="text-lg">Minta Penghapusan Akun</span>
          <button
            onClick={() => set(true)}
            className="bg-primary text-white py-2 px-5"
          >
            <span>Menghapus</span>
          </button>
        </div>
      </div>
    </>
  );
}

function Second() {
  return (
    <>
      <div className="flex flex-col">
        <span className="font-bold text-3xl">Important</span>
        <div className="w-full h-[2px] bg-disable-primary my-3" />
        <p className="text-lg">
          {"Dengan klik ‘Melanjutkan’, kamu setuju bahwa: "}
        </p>
        <ul className="list-disc ml-5">
          <li>
            Setelah akun dihapus, kamu tidak dapat log in kembali dan melihat
            riwayat akun. Akun yang telah dihapus tidak dapat dikembalikan.
          </li>
          <li>
            Penghapusan akun tidak dapat dilakukan jika kamu memiliki pesanan,
            penjualan dan/atau hal lain yang belum selesai, termasuk urusan
            hukum.
          </li>
        </ul>
        <button className="bg-primary text-white py-2 px-5 w-fit mt-20">
          <span>Melanjutkan</span>
        </button>
      </div>
    </>
  );
}
