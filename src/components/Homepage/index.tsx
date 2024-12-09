"use client";

import Navbar from "@/components/navbar";
import { UserContextProvider } from "@/utils/context";

export default function Homepage() {
  return (
    <>
      <UserContextProvider>
        <Navbar />
      </UserContextProvider>
    </>
  );
}
