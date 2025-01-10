import Login from "@/components/Login";
import { clientConfig, serverConfig } from "@/config";
import { getTokens } from "next-firebase-auth-edge";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function LoginPage(props: {
  searchParams: Promise<{
    callbackUrl: string | undefined;
    error: string | undefined;
  }>;
}) {
  const params = await props.searchParams;

  const token = await getTokens(await cookies(), {
    apiKey: clientConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    serviceAccount: serverConfig.serviceAccount,
  });

  if (token) {
    redirect(params.callbackUrl || "/");
  }

  return (
    <>
      <Login searchParams={params} />
    </>
  );
}
