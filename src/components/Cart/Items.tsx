"use client";
import Image from "next/image";
import TrashIcon from "../icons/trash";
import { useState } from "react";
import formatPrice from "@/utils/formatPrice";

export default function CartItem({
  src,
  alt,
  price,
  children,
}: {
  src: string;
  alt: string;
  price: number;
  children?: React.ReactNode;
}) {
  const [amount, setAmount] = useState(1);

  return (
    <>
      <div className="flex items-end justify-between w-full p-3 border border-black">
        <div className="flex items-center gap-3">
          <div className="self-start bg-white">
            <label>
              <input type="checkbox" />
            </label>
          </div>
          <div className="relative size-24 rounded-xl border-2 border-black overflow-hidden">
            <Image src={src} alt={alt} className="object-contain" fill />
          </div>
          <div className="flex items-center justify-center">
            <span className="text-2xl px-2">{children}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center pr-8">
            <span className="font-bold text-primary">{formatPrice(price)}</span>
          </div>
          <div className="flex items-center">
            <button className="mr-5">
              <TrashIcon className="text-black size-7" />
            </button>
            <button
              disabled={amount === 1}
              onClick={() => setAmount((prev) => prev - 1)}
              className="bg-[#E13A3C]/65 disabled:bg-[#E13A3C]/45 rounded-full p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
              </svg>
            </button>
            <span className="text-2xl w-20 text-center">{amount}</span>
            <button
              onClick={() => setAmount((prev) => prev + 1)}
              className="bg-[#1486C3]/65 rounded-full p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
