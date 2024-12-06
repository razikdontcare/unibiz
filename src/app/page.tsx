"use client";

import Navbar from "@/components/navbar";
import { UserContextProvider } from "@/utils/context";

export default function Home() {
  return (
    <>
      <UserContextProvider>
        <Navbar />
      </UserContextProvider>
    </>
  );
}
