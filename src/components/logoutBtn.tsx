"use client";

import { auth } from "@/db/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LogoutBtn(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);

    await fetch("/api/logout");
    router.refresh();
  };

  return (
    <>
      <button onClick={handleLogout} {...props}>
        {props.children}
      </button>
    </>
  );
}
