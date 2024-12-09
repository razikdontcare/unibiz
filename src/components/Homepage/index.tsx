"use client";

import Navbar from "@/components/navbar";
import { UserContextProvider } from "@/utils/context";
import Subcategory from "./Subcategory";

export default function Homepage() {
  return (
    <>
      <UserContextProvider>
        <Navbar />
        <Subcategory />
      </UserContextProvider>
    </>
  );
}
