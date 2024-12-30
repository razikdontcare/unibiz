"use client";

import { useState } from "react";
import CartIcon from "./icons/cart";
import LogoutIcon from "./icons/logout";
import ProfileIcon from "./icons/profile";
import LogoutBtn from "./logoutBtn";
import Image from "next/image";
import Link from "next/link";

export function ProfileButton({
  email,
  name,
  picture,
}: {
  email: string | undefined;
  name: string | undefined;
  picture: string | undefined;
}) {
  const [isOpen, setOpen] = useState<boolean>(false);

  console.log(email, name, picture);

  return (
    <>
      <div className={"flex items-center justify-center gap-10"}>
        <div>
          <Link href="/cart">
            <CartIcon className="size-8" />
          </Link>
        </div>
        <div className="relative">
          <button onClick={() => setOpen((prev) => !prev)}>
            {picture ? (
              <>
                <div className="relative size-10 rounded-full overflow-hidden">
                  <Image
                    src={picture!}
                    alt={email!}
                    fill
                    className="object-contain"
                  />
                </div>
              </>
            ) : (
              <ProfileIcon className="size-8" />
            )}
          </button>
          <ProfileOverlay
            email={email!}
            displayName={name!}
            image={picture!}
            open={[isOpen, setOpen]}
          />
        </div>
      </div>
    </>
  );
}

export function ProfileOverlay({
  email,
  displayName,
  image,
  open,
}: {
  email: string;
  displayName: string;
  image: string;
  open: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}) {
  return (
    <>
      <div
        className={`${
          open[0] ? "flex" : "hidden"
        } flex-col absolute right-0 -bottom-64 shadow-[0px_0px_13.1px_-1px_#00000045] rounded-xl bg-white`}
      >
        <div className="flex items-center justify-between p-5">
          <div className="flex items-center gap-3">
            <div className="relative size-14 rounded-full overflow-hidden">
              {image ? (
                <Image
                  src={image}
                  alt={displayName || email}
                  fill
                  className="object-contain"
                />
              ) : (
                <ProfileIcon className="absolute size-full object-contain" />
              )}
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="font-bold text-xl">{displayName}</span>
              <span className="text-gray-400 text-sm">{email}</span>
            </div>
          </div>
        </div>
        <div className="w-full h-[0.01rem] bg-black" />
        <div className="flex flex-col items-center justify-center py-3 px-5 gap-5">
          <Link
            href="/settings/profile"
            className="flex items-center justify-start w-full"
          >
            <span className="font-bold">Akun Saya</span>
          </Link>
          <Link
            href="/settings/orders"
            className="flex items-center justify-start w-full"
          >
            <span className="font-bold">Pesanan Saya</span>
          </Link>
          <LogoutBtn className="flex items-center justify-end w-full gap-1 text-black text-sm">
            <LogoutIcon className="w-4" />
            <span>Keluar</span>
          </LogoutBtn>
        </div>
      </div>
    </>
  );
}
