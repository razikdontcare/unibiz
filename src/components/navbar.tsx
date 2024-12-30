import Link from "next/link";
import Logo from "./icons/logo";
import SearchIcon from "./icons/search";
import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { clientConfig, serverConfig } from "@/config";
import { redirect } from "next/navigation";
import { ProfileButton } from "./interactiveNavbar";

export default async function Navbar() {
  const token = await getTokens(await cookies(), {
    apiKey: clientConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    serviceAccount: serverConfig.serviceAccount,
  });

  if (token && !token?.decodedToken.email_verified)
    return redirect("/verify-email");

  return (
    <div className="fixed z-10 bg-white flex items-center justify-center p-5 w-full mx-auto shadow-xl">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto gap-5">
        <div className="flex items-center justify-center">
          <Logo className="size-20" />
          <span className="font-bold text-4xl text-primary">UniBiz</span>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center w-full border-2 border-black/40 rounded-lg gap-3 p-2">
            <SearchIcon className="size-8" />
            <input
              className=" text-xl w-full h-full focus:ring-transparent focus:outline-none"
              placeholder="Cari di UniBiz"
            />
          </div>
        </div>
        {token ? (
          <ProfileButton
            email={token.decodedToken.email}
            name={token.decodedToken.name}
            picture={token.decodedToken.picture}
          />
        ) : (
          <div className={"flex items-center justify-center gap-4"}>
            <Link
              href={"/login?callbackUrl=/"}
              className="flex items-center justify-center py-3 px-4 text-primary border-2 border-primary rounded-xl hover:text-white hover:bg-primary font-medium transition-all duration-300"
            >
              <span>Masuk</span>
            </Link>
            <Link
              href={"/register"}
              className="flex items-center justify-center py-3 px-4 text-white bg-primary border-2 border-primary rounded-xl font-medium hover:bg-primary/80 hover:border-primary/80 transition-all duration-300"
            >
              <span>Daftar</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
