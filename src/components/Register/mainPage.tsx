import Link from "next/link";
import GoogleIcon from "../icons/google";
import { useRegisterEmailContext } from "@/utils/context";

export default function RegisterMainPage({
  setPage,
}: {
  setPage: (page: number) => void;
}) {
  const { email, setEmail } = useRegisterEmailContext();

  return (
    <>
      <div className="flex flex-col items-center justify-start shadow-[0px_0px_13.1px_-1px_#00000045] rounded-xl px-10 py-20 w-full max-w-xl">
        <div className="flex items-center justify-center w-full">
          <h1 className="font-bold text-2xl">Daftar Sekarang</h1>
        </div>
        <div className="flex items-center justify-center py-10 gap-3">
          <span>Sudah punya akun UniBiz?</span>
          <Link href="/login" className="text-primary">
            Masuk
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-2">
          <button className="w-full flex items-center justify-center gap-2 border-2 hover:bg-border hover:text-white rounded-lg font-bold border-border disabled:border-border py-3 px-5 disabled:text-disable-secondary disabled:bg-disable-primary bg-white text-border transition-colors duration-300">
            <GoogleIcon />
            <span>Google</span>
          </button>
        </div>
        <div className="flex items-center justify-center w-full gap-1 py-5">
          <span className="w-20 h-[0.07rem] bg-black" />
          <span>atau</span>
          <span className="w-20 h-[0.07rem] bg-black" />
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-3">
          <div className="flex items-center w-full">
            <input
              type="text"
              className="w-full border-2 rounded-lg border-border py-3 px-5"
              placeholder="Nomor HP atau Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <span className="self-start px-5 pb-3 text-[#8A8484]">
            Contoh: 085726391835
          </span>
        </div>
        <div className="flex items-center w-full">
          <button
            className="w-full border-2 rounded-lg font-bold border-primary disabled:border-border py-3 px-5 disabled:text-disable-secondary disabled:bg-disable-primary bg-primary text-white hover:bg-primary/90 transition-colors duration-300"
            disabled={email === ""}
            onClick={() => setPage(1)}
          >
            Selanjutnya
          </button>
        </div>
        <div className="flex items-center justify-center w-full gap-1 pt-5">
          <span className="w-20 h-[0.07rem] bg-black" />
          <span>atau</span>
          <span className="w-20 h-[0.07rem] bg-black" />
        </div>
        <div className="flex items-center justify-center py-5 gap-3">
          <span>Daftar Sebagai Seller?</span>
          <Link href="/seller" className="text-primary">
            Daftar Seller
          </Link>
        </div>
      </div>
    </>
  );
}
