"use client";

import Navbar from "@/components/navbar";
import { UserContextProvider } from "@/utils/context";
import Subcategory from "./Subcategory";
import Category from "./Category";

export default function Homepage() {
  return (
    <>
      <UserContextProvider>
        <Navbar />
        <Subcategory />
        <Category />
      </UserContextProvider>
    </>
  );
}
