import ArrowLeftIcon from "@/components/icons/arrowLeft";
import Navbar from "@/components/navbar";
import { clientConfig, serverConfig } from "@/config";
import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

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
        <div className="flex items-center justify-between w-full p-5">
          <span>abc</span>
        </div>
      </div>
    </>
  );
}
