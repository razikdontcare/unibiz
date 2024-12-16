import Logo from "@/components/icons/logo";
import Verification from "@/components/Verification";
import Link from "next/link";

export default function VerificationPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-start h-screen overflow-hidden gap-10 pb-10 w-full mx-auto">
        <Link
          href="/"
          className="flex items-center justify-center shadow-xl w-full py-5"
        >
          <Logo className="size-20" />
          <span className="font-bold text-4xl text-primary">UniBiz</span>
        </Link>
        <div className="flex flex-col items-center justify-center w-full flex-1">
          <Verification />
        </div>
      </div>
    </>
  );
}
