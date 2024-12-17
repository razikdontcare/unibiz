import Logo from "@/components/icons/logo";
import Register from "@/components/Register";
import { RegisterEmailContextProvider } from "@/utils/context";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <>
      <RegisterEmailContextProvider>
        <div className="flex flex-col items-center justify-start h-screen overflow-hidden py-10 gap-10 w-full mx-auto">
          <Link href="/" className="flex items-center justify-center">
            <Logo className="size-20" />
            <span className="font-bold text-4xl text-primary">UniBiz</span>
          </Link>
          <div className="flex items-center justify-center w-full h-full">
            <Register />
          </div>
        </div>
      </RegisterEmailContextProvider>
    </>
  );
}
