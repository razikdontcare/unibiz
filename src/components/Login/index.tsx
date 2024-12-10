"use client";

import { UserContextProvider } from "@/utils/context";

export default function Login() {
  return (
    <>
      <UserContextProvider>
        <h1>Login</h1>
      </UserContextProvider>
    </>
  );
}
