import React from "react";
import SettingSidebar from "./Sidebar";
import { getLoginToken, getUserProfile } from "@/app/actions";
import { redirect } from "next/navigation";

export default async function SettingContainer({
  children,
  className = "flex-1 flex flex-col p-10",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const token = await getLoginToken();
  if (!token) redirect("/login");
  const user = await getUserProfile(token.decodedToken.uid);
  return (
    <>
      <div className="flex flex-col justify-center items-center container max-w-7xl mx-auto pt-32 h-screen">
        <div className="flex flex-1 w-full">
          <SettingSidebar
            username={
              user?.customClaims
                ? (user.customClaims.username as string)
                : user?.uid
            }
            picture={user?.photoURL}
          />
          <div className={className}>{children}</div>
        </div>
      </div>
    </>
  );
}
