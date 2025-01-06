import BackBtn from "@/components/back";
import FullQrCode from "@/components/icons/fullqrcode";
import Logo from "@/components/icons/logo";
import Link from "next/link";

export default function LoginWithQR() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-start h-screen overflow-hidden py-10 gap-10 w-full mx-auto ">
          <Link href="/" className="flex items-center justify-center">
            <Logo className="size-20" />
            <span className="font-bold text-4xl text-primary">UniBiz</span>
          </Link>
          <div className="flex flex-col items-center justify-start shadow-[0px_0px_13.1px_-1px_#00000045] rounded-xl px-10 py-20 w-full max-w-xl relative">
            <BackBtn className="absolute w-full px-10 py-10 top-0" />
            <FullQrCode className="text-black" />
            <span className="font-bold text-2xl">
              Masuk dengan scan kode QR
            </span>
            <ul className="max-w-sm list-disc">
              <li>
                Scan kode QR di atas lewat smartphone yang mendukung fitur scan
                kode QR
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
