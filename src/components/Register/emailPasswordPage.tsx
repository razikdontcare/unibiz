import { useRegisterEmailContext } from "@/utils/context";
import Link from "next/link";
import ArrowLeftIcon from "../icons/arrowLeft";
import { useState } from "react";

export default function RegisterEmailPasswordPage({
  setPage,
}: {
  setPage: (page: number) => void;
}) {
  const { email, setEmail } = useRegisterEmailContext();
  const [nama, setNama] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isFocusEmail, setIsFocusEmail] = useState<boolean>(false);
  const [isFocusNama, setIsFocusNama] = useState<boolean>(false);
  const [isFocusPassword, setIsFocusPassword] = useState<boolean>(false);

  const onFocusEmail = () => setIsFocusEmail(true);
  const onBlurEmail = () => setIsFocusEmail(false);

  const onFocusNama = () => setIsFocusNama(true);
  const onBlurNama = () => setIsFocusNama(false);

  const onFocusPassword = () => setIsFocusPassword(true);
  const onBlurPassword = () => setIsFocusPassword(false);

  return (
    <>
      <div className="flex flex-col items-center justify-start shadow-[0px_0px_13.1px_-1px_#00000045] rounded-xl px-10 py-20 w-full  max-w-xl">
        <div className="flex items-center justify-start w-full gap-5 pb-10">
          <button onClick={() => setPage(0)}>
            <ArrowLeftIcon />
          </button>
          <h1 className="font-bold text-2xl">Daftar dengan E-Mail</h1>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-5">
          <div className="flex items-center w-full relative">
            <input
              id="email"
              name="email"
              type="email"
              className="w-full border-2 rounded-lg border-border py-3 px-5 focus:ring-0 focus:outline-none"
              placeholder={isFocusEmail ? "name@example.com" : ""}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={onFocusEmail}
              onBlur={onBlurEmail}
            />
            <label
              htmlFor="email"
              className={`absolute bg-white text-black/40 ${
                isFocusEmail || email !== "" ? "-top-3 scale-95" : "top-1/4"
              } left-3 px-3 pointer-events-none transition-all duration-300`}
            >
              Email
            </label>
          </div>
          <div className="flex items-center w-full relative">
            <input
              id="nama"
              name="nama"
              type="text"
              className="w-full border-2 rounded-lg border-border py-3 px-5 focus:ring-0 focus:outline-none"
              placeholder={isFocusNama ? "" : ""}
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              onFocus={onFocusNama}
              onBlur={onBlurNama}
            />
            <label
              htmlFor="email"
              className={`absolute bg-white text-black/40 ${
                isFocusNama || nama !== "" ? "-top-3 scale-95" : "top-1/4"
              } left-3 px-3 pointer-events-none transition-all duration-300`}
            >
              Nama Lengkap
            </label>
          </div>
          <div className="flex items-center w-full relative">
            <input
              id="password"
              name="password"
              type="password"
              className="w-full border-2 rounded-lg border-border py-3 px-5 focus:ring-0 focus:outline-none"
              placeholder={isFocusPassword ? "" : ""}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={onFocusPassword}
              onBlur={onBlurPassword}
            />
            <label
              htmlFor="email"
              className={`absolute bg-white text-black/40 ${
                isFocusPassword || password !== ""
                  ? "-top-3 scale-95"
                  : "top-1/4"
              } left-3 px-3 pointer-events-none transition-all duration-300`}
            >
              Password
            </label>
          </div>
        </div>
        <div className="flex items-center w-full py-5">
          <button
            className="w-full border-2 rounded-lg font-bold border-primary disabled:border-border py-3 px-5 disabled:text-disable-secondary disabled:bg-disable-primary bg-primary text-white hover:bg-primary/90 transition-colors duration-300"
            disabled={email === "" || nama === "" || password === ""}
            onClick={() => setPage(1)}
          >
            Daftar
          </button>
        </div>
        <div className="flex flex-col items-center justify-center py-5">
          <span className="text-center">Dengan mendaftar, saya menyetujui</span>
          <span className="text-center">
            <Link
              className="text-primary font-bold"
              href={"/terms-and-condition"}
            >
              Syarat & Ketentuan
            </Link>{" "}
            serta{" "}
            <Link className="text-primary font-bold" href={"/privacy-policy"}>
              Kebijakan Privasi
            </Link>{" "}
            Unibiz.
          </span>
        </div>
      </div>
    </>
  );
}
