import Link from "next/link";
import GoogleIcon from "../icons/google";
import { useRegisterEmailContext } from "@/utils/context";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/db/firebase";
import { FirebaseError } from "firebase/app";
import { useRouter } from "next/navigation";
import isEmail from "@/utils/isEmail";

export default function RegisterMainPage({
  setPage,
  searchParams,
}: {
  setPage: (page: number) => void;
  searchParams: { callbackUrl: string | undefined; error: string | undefined };
}) {
  const { email, setEmail } = useRegisterEmailContext();
  const router = useRouter();

  const errorMessages = (error: string | undefined) => {
    switch (error) {
      case "invalid-email":
        return <span className="text-red-400">Pastikan Email Anda Benar.</span>;
      default:
        return <span className="text-red-400">Terjadi kesalahan.</span>;
    }
  };

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
          <button
            onClick={async () => {
              try {
                const credential = await signInWithPopup(
                  auth,
                  new GoogleAuthProvider()
                );
                const idToken = await credential.user.getIdToken();
                await fetch("/api/login", {
                  method: "GET",
                  headers: {
                    Authorization: `Bearer ${idToken}`,
                  },
                });

                router.push(searchParams.callbackUrl || "/");
              } catch (error) {
                if (error instanceof FirebaseError) {
                  router.push(
                    `/login?error=${error.code}&callbackUrl=${
                      searchParams.callbackUrl || "/"
                    }`
                  );
                }
              }
            }}
            className="w-full flex items-center justify-center gap-2 border-2 hover:bg-btn hover:border-btn hover:text-white rounded-lg font-bold border-border disabled:border-border py-3 px-5 disabled:text-disable-secondary disabled:bg-disable-primary bg-white text-border transition-colors duration-300"
          >
            <GoogleIcon />
            <span>Google</span>
          </button>
        </div>
        <div className="flex items-center justify-center w-full gap-1 py-5">
          <span className="w-20 h-[0.07rem] bg-black" />
          <span>atau</span>
          <span className="w-20 h-[0.07rem] bg-black" />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            try {
              if (isEmail(email)) {
                setPage(1);
              } else {
                throw new Error("Pastikan Email Anda Benar!");
              }
            } catch (error) {
              if (error instanceof Error) {
                router.push(
                  `/register?error=invalid-email&callbackUrl=${
                    searchParams.callbackUrl || "/"
                  }`
                );
              }
            }
          }}
          className="w-full"
        >
          {searchParams.error && (
            <div className="flex items-center justify-start pb-3 w-full">
              {errorMessages(searchParams.error)}
            </div>
          )}
          <div className="flex flex-col items-center justify-center w-full gap-3">
            <div className="flex items-center w-full">
              <input
                type="text"
                className="w-full border-2 rounded-lg border-border py-3 px-5"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <span className="self-start px-5 pb-3 text-[#8A8484]">
              Contoh: unibiz@gmail.com
            </span>
          </div>
          <div className="flex items-center w-full">
            <button
              className="w-full border-2 rounded-lg font-bold border-btn disabled:border-border py-3 px-5 disabled:text-disable-secondary disabled:bg-disable-primary bg-btn text-white hover:bg-btn/90 transition-colors duration-300"
              disabled={email === ""}
              type="submit"
            >
              Selanjutnya
            </button>
          </div>
        </form>
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
