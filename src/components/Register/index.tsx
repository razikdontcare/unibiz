"use client";
import { RegisterEmailContextProvider } from "@/utils/context";
import RegisterMainPage from "./mainPage";
import RegisterEmailPasswordPage from "./emailPasswordPage";
import { useState } from "react";

export default function Register() {
  const [page, setPage] = useState<number>(0);

  return (
    <>
      <RegisterEmailContextProvider>
        <div className="w-1/2"></div>
        {page === 0 ? (
          <RegisterMainPage setPage={setPage} />
        ) : (
          <RegisterEmailPasswordPage setPage={setPage} />
        )}
      </RegisterEmailContextProvider>
    </>
  );
}
