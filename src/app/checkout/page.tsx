import Navbar from "@/components/navbar";
import Link from "next/link";
import ArrowLeftIcon from "@/components/icons/arrowLeft";
import Image from "next/image";
import formatPrice from "@/utils/formatPrice";
import ShieldIcon from "@/components/icons/shield";
import CreditCardIcon from "@/components/icons/creditcard";

export default function CheckoutPage() {
  return (
    <>
      <Navbar />
      <div className="flex items-start container mx-auto max-w-7xl gap-5 pt-36 min-h-screen">
        <Link href="/">
          <div className="flex items-center">
            <ArrowLeftIcon />
          </div>
        </Link>
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
            <button className="w-full bg-primary text-white flex items-center justify-center p-5 rounded-xl gap-1 my-5">
              <ShieldIcon className="size-6" />
              <span className="font-bold text-xl">Bayar</span>
            </button>
            <button className="w-full">
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
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
