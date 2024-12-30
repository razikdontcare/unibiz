"use client";
import RegisterMainPage from "./mainPage";
import RegisterEmailPasswordPage from "./emailPasswordPage";
import { useState } from "react";
import StoreIcon from "../icons/registerPageIcons/store";

export default function Register({
  searchParams,
}: {
  searchParams: { callbackUrl: string | undefined; error: string | undefined };
}) {
  const [page, setPage] = useState<number>(0);

  return (
    <>
      <div className="container flex items-center justify-center mx-auto">
        <div className="w-1/2">
          <StoreIcon />
        </div>
        {page === 0 ? (
          <RegisterMainPage setPage={setPage} searchParams={searchParams} />
        ) : (
          <RegisterEmailPasswordPage setPage={setPage} />
        )}
      </div>
    </>
  );
}
