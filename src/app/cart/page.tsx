import CartParent from "@/components/Cart/parent";
import ArrowLeftIcon from "@/components/icons/arrowLeft";
import Navbar from "@/components/navbar";
import { clientConfig, serverConfig } from "@/config";
import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Items } from "@/types";

const items = [
  {
    title: "Farmasi",
    items: [
      {
        name: "Salep luka herbal",
        price: 15000,
        alt: "Salep luka herbal",
        src: "https://picsum.photos/seed/salep-luka-herbal/512/512",
      },
    ] as Items[],
  },
  {
    title: "Universitas Udayana",
    items: [
      {
        name: "Penyewaan Gedung Widya Sabha",
        price: 20000,
        alt: "Penyewaan Gedung Widya Sabha",
        src: "https://picsum.photos/seed/penyewaan-gedung-widya-sabha/512/512",
      },
    ] as Items[],
  },
];

export default async function Cart() {
  const token = await getTokens(await cookies(), {
    apiKey: clientConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    serviceAccount: serverConfig.serviceAccount,
  });

  if (!token) return redirect("/login");

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto pt-36">
        <div className="flex items-center justify-between w-full">
          <div>
            <Link href="/">
              <ArrowLeftIcon />
            </Link>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Keranjang Saya</h1>
          </div>
          <div className="relative"></div>
        </div>
        {items.map((item, index) => (
          <CartParent key={index} items={item.items}>
            {item.title}
          </CartParent>
        ))}

        <div className="flex items-center justify-center w-full p-5 fixed bottom-0">
          <div className="flex items-center justify-between container max-w-7xl">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="accent-primary" />
              <span className="text-xl font-bold">Semua</span>
            </label>
            <div className="flex items-center gap-3">
              <span>Total</span>
              <span className="font-bold text-primary">Rp 255.000,00</span>
              <Link href="checkout" className="px-5 py-4 bg-primary text-white">
                <span>{"Check Out (2)"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
