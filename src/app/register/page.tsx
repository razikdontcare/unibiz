import Logo from "@/components/icons/logo";
import Register from "@/components/Register";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-start h-screen overflow-hidden py-10 gap-10 w-full mx-auto">
        <Link href="/" className="flex items-center justify-center">
          <Logo className="size-36" />
          <span className="font-bold text-6xl text-primary">UniBiz</span>
        </Link>
        <div className="flex items-center justify-center w-full h-full">
          <Register />
        </div>
      </div>
    </>
  );
}
