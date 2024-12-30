import Logo from "@/components/icons/logo";
import Verification from "@/components/Verification";
import { clientConfig, serverConfig } from "@/config";
import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function VerificationPage() {
  const token = await getTokens(await cookies(), {
    apiKey: clientConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    serviceAccount: serverConfig.serviceAccount,
  });

  if (!token) return redirect("/login");
  if (token && token.decodedToken.email_verified) return redirect("/");

  return (
    <>
      <div className="flex flex-col items-center justify-start h-screen overflow-hidden gap-10 pb-10 w-full mx-auto">
        <Link
          href="/"
          className="flex items-center justify-center shadow-xl w-full py-5"
        >
          <Logo className="size-20" />
          <span className="font-bold text-4xl text-primary">UniBiz</span>
        </Link>
        <div className="flex flex-col items-center justify-center w-full flex-1">
          <Verification email={token.decodedToken.email!} />
        </div>
      </div>
    </>
  );
}
