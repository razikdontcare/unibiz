"use client";
import ProfileIcon from "@/components/icons/profile";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import formatPhone from "@/utils/formatPhone";
import CheckIcon from "@/components/icons/Check";
// import { UserRecord } from "next-firebase-auth-edge/lib/auth";

interface SerializedUser {
  uid?: string;
  email?: string;
  emailVerified?: boolean;
  displayName?: string;
  photoURL?: string;
  phoneNumber?: string;
  disabled?: boolean;
  customClaims?: {
    username?: string;
    sex?: number;
  };
}

export default function Profile({
  user,
  save,
}: {
  user: SerializedUser | null;
  save: (
    name: string,
    phone: string,
    username: string | null,
    sex: number
  ) => Promise<void>;
}) {
  const customClaims = user ? user.customClaims : {};

  const [usn, setUsn] = useState(customClaims?.username || user?.uid || "");
  const [name, setName] = useState(user?.displayName || "");
  const [phone, setPhone] = useState(user?.phoneNumber || "-");
  const [mail, setMail] = useState(user?.email || "-");
  const [s, setS] = useState(user?.customClaims?.sex || 3);

  const [loading, setLoading] = useState(false);

  const [editingEmail, setEditingEmail] = useState(false);
  const [editingPhone, setEditingPhone] = useState(false);

  const [open, setOpen] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingEmail && emailRef.current) {
      emailRef.current.focus();
    }
  }, [editingEmail]);

  useEffect(() => {
    if (editingPhone && phoneRef.current) {
      phoneRef.current.focus();
    }
  }, [editingPhone]);

  return (
    <>
      <div className="flex justify-center flex-col gap-1">
        <h1 className="font-bold text-4xl">Profil Saya</h1>
        <p className="text-lg">
          Kelola informasi profil Anda untuk mengontrol, melindungi, dan
          mengamankan akun
        </p>
      </div>
      <div className="h-[1px] w-full bg-border my-5" />
      <div className="flex w-full h-full flex-1">
        <div className="flex w-full items-start">
          <div className="flex flex-col w-full justify-center gap-5">
            <div className="flex flex-col w-full justify-center">
              <div className="flex items-center w-full gap-3">
                <label
                  htmlFor="username"
                  className="text-label text-lg w-40 text-end"
                >
                  Username:
                </label>
                <div className="flex items-center w-full border-2 border-black/40 rounded-lg gap-3 p-2">
                  <input
                    id="username"
                    className="text-xl w-full h-full focus:ring-transparent focus:outline-none"
                    type="text"
                    value={usn}
                    onChange={(e) => setUsn(e.target.value)}
                  />
                </div>
              </div>
              <span className="text-label ml-36">
                {"Username hanya dapat diubah satu (1) kali."}
              </span>
            </div>
            <div className="flex items-center w-full gap-3">
              <label
                htmlFor="nama"
                className="text-label text-lg w-40 text-end"
              >
                Nama:
              </label>
              <div className="flex items-center w-full border-2 border-black/40 rounded-lg gap-3 p-2">
                <input
                  id="nama"
                  className="text-xl w-full h-full focus:ring-transparent focus:outline-none"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center w-full gap-3">
              <label className="text-label text-lg w-40 text-end">Email:</label>
              <div className="flex items-center w-full">
                <input
                  id="email"
                  ref={emailRef}
                  className="text-xl w-full h-full focus:ring-transparent focus:outline-none bg-white"
                  type="text"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  disabled={!editingEmail}
                />
                {/* <button
                  onClick={() => {
                    setEditingEmail((prev) => !prev);
                    setEditingPhone(false);
                  }}
                  className="p-0 m-0 text-primary underline"
                >
                  {editingEmail ? "Simpan" : "Ubah"}
                </button> */}
              </div>
            </div>
            <div className="flex items-center w-full gap-3">
              <label className="text-label text-lg w-40 text-end">
                <span>Nomor Telp:</span>
              </label>
              <div className="flex items-center w-full">
                <input
                  id="phone"
                  ref={phoneRef}
                  className="text-xl w-full h-full focus:ring-transparent focus:outline-none bg-white"
                  type="text"
                  value={"+" + formatPhone(phone)}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={!editingPhone}
                />
                <button
                  onClick={() => {
                    setEditingPhone((prev) => !prev);
                    setEditingEmail(false);
                  }}
                  className="p-0 m-0 text-primary underline"
                >
                  <span>{editingPhone ? "Simpan" : "Ubah"}</span>
                </button>
              </div>
            </div>
            <div className="flex items-center w-full gap-3">
              <label className="text-label text-lg w-40 text-end">
                Jenis Kelamin:
              </label>
              <div className="flex items-center w-full gap-3">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="laki"
                    id="laki"
                    checked={s === 1}
                    onChange={() => setS(1)}
                    className="peer relative appearance-none w-5 h-5 
                          border rounded-full border-primary 
                          cursor-pointer  
                          checked:bg-primary"
                  />
                  <label
                    htmlFor="circular-checkbox"
                    className="ms-2 font-medium "
                  >
                    Laki-Laki
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="laki"
                    id="laki"
                    checked={s === 2}
                    onChange={() => setS(2)}
                    className="peer relative appearance-none w-5 h-5 
                          border rounded-full border-primary 
                          cursor-pointer  
                          checked:bg-primary"
                  />
                  <label
                    htmlFor="circular-checkbox"
                    className="ms-2 font-medium "
                  >
                    Perempuan
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="laki"
                    id="laki"
                    checked={s === 3}
                    onChange={() => setS(3)}
                    className="peer relative appearance-none w-5 h-5 
                          border rounded-full border-primary 
                          cursor-pointer  
                          checked:bg-primary"
                  />
                  <label
                    htmlFor="circular-checkbox"
                    className="ms-2 font-medium "
                  >
                    Jangan Beri Tahu
                  </label>
                </div>
              </div>
            </div>
            <button
              disabled={
                (usn === (customClaims?.username || user?.uid || "") &&
                  name === (user?.displayName || "") &&
                  phone === (user?.phoneNumber || "-") &&
                  mail === (user?.email || "-") &&
                  s === (user?.customClaims?.sex || 3)) ||
                loading ||
                editingEmail ||
                editingPhone
              }
              onClick={async (e) => {
                e.preventDefault();
                setLoading(true);
                try {
                  if (usn === user?.uid) {
                    await save(name, phone, usn, s);
                    setLoading(false);
                  } else {
                    await save(name, phone, null, s);
                    setLoading(false);
                  }
                  setOpen(true);
                } catch (error) {
                  setLoading(false);
                  if (error instanceof Error) {
                    console.error(error.message);
                  }
                }
              }}
              className="bg-primary text-white rounded-xl px-5 py-3 font-bold mt-10 text-xl w-fit disabled:bg-disable-primary disabled:text-disable-secondary transition-all duration-300"
            >
              <span>{loading ? "Menyimpan..." : "Simpan"}</span>
            </button>
          </div>
        </div>

        <div className="w-80 flex flex-col items-center justify-start gap-3">
          <div className="relative size-28 rounded-full overflow-hidden">
            {user?.photoURL ? (
              <Image
                src={user.photoURL!}
                alt={usn || ""}
                fill
                className="object-contain"
              />
            ) : (
              <ProfileIcon className="absolute size-full object-contain" />
            )}
          </div>
          <button className="border border-border p-2 rounded-md text-label">
            Pilih Gambar
          </button>
          <div className="flex flex-col items-center justify-center text-sm text-label">
            <span>{"Ukuran gambar: maks. 1 MB"}</span>
            <span>{"Format gambar: .JPEG, .PNG"}</span>
          </div>
        </div>
      </div>

      <Overlay open={open} set={setOpen} />
    </>
  );
}

function Overlay({
  open,
  set,
}: {
  open: boolean;
  set: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        set(false);
      }, 2000);
    }
  });

  return (
    <>
      <div
        className={`absolute top-0 left-0 flex items-center justify-center h-screen w-full backdrop-blur-[1px] bg-black/10 ${
          !open ? "hidden" : ""
        }`}
      >
        <div className="bg-white p-10 flex flex-col items-center justify-center min-w-96 gap-5">
          <CheckIcon className="size-14" />
          <span className="font-medium text-xl">
            Profil telah berhasil diubah.
          </span>
        </div>
      </div>
    </>
  );
}
