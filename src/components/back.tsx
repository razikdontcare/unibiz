"use client";

import { useRouter } from "next/navigation";
import ArrowLeftIcon from "./icons/arrowLeft";

export default function BackBtn(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  const router = useRouter();
  return (
    <>
      <button {...props} onClick={() => router.back()}>
        <ArrowLeftIcon />
      </button>
    </>
  );
}
