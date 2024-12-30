import ArrowLeftIcon from "@/components/icons/arrowLeft";
import ChatIcon from "@/components/icons/chat";
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
          <div className="relative">
            <Link href="/chats">
              <ChatIcon className="size-8" />
              <div className="bg-primary absolute p-2 rounded-full -top-2 -right-2">
                <div className="relative">
                  <span className="absolute text-xs font-bold -top-2 -left-1">
                    2
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between w-full p-5">
          <span>abc</span>
        </div>
      </div>
    </>
  );
}
