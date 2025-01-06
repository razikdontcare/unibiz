"use client";

import SearchIcon from "@/components/icons/search";
import { useState } from "react";
import Image from "next/image";
import order from "./order.png";

const tabs = [
  {
    title: "Semua",
  },
  {
    title: "Belum Bayar",
  },
  {
    title: "Sedang Diproses",
  },
  {
    title: "Dikirim",
  },
  {
    title: "Selesai",
  },
  {
    title: "Dibatalkan",
  },
];

export default function Orders() {
  const [tab, setTab] = useState(0);

  return (
    <>
      <div className="flex flex-col w-full h-full">
        {/* Tab buttons container (relative for indicator positioning) */}
        <div className="relative flex items-center">
          {/* Animated indicator at the bottom */}
          <span
            className="absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-transform duration-300"
            style={{
              width: `${100 / tabs.length}%`,
              transform: `translateX(${tab * 100}%)`,
            }}
          />

          {/* Tab buttons */}
          {tabs.map((t, i) => (
            <button
              key={i}
              onClick={() => setTab(i)}
              className="px-5 py-2 w-full whitespace-nowrap text-center"
            >
              {t.title}
            </button>
          ))}
        </div>

        <div className="w-full bg-disable-primary flex items-center p-3 gap-3">
          <SearchIcon />
          <input
            type="text"
            placeholder="Cari berdasarkan Nama Unit Bisnis, No. Pesanan, atau Nama Produk"
            className="focus:ring-transparent focus:outline-none bg-transparent w-full"
          />
        </div>

        {/* Tab content goes here */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative size-36">
            <Image src={order} alt="order" fill className="object-contain" />
          </div>
          <span className="text-xl font-medium">Belum Ada Pesanan</span>
        </div>
      </div>
    </>
  );
}
