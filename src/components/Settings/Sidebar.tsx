"use client";
import Image from "next/image";
import ProfileIcon from "../icons/profile";
import truncateString from "@/utils/truncateText";
import PencilIcon from "../icons/pencil";
import ClipboardIcon from "../icons/clipboard";
import AlarmIcon from "../icons/alarm";
import { usePathname } from "next/navigation";
import Link from "next/link";

const menus = [
  {
    label: "Akun Saya",
    icon: ProfileIcon,
    className: "text-primary size-7",
    path: "/settings/account",
    items: [
      {
        label: "Profil",
        path: "/settings/account/profile",
      },
      {
        label: "Bank & Kartu",
        path: "/settings/account/billing",
      },
      {
        label: "Alamat",
        path: "/settings/account/address",
      },
      {
        label: "Ubah Password",
        path: "/settings/account/password",
      },
      {
        label: "Pengaturan Notifikasi",
        path: "/settings/account/notification",
      },
      {
        label: "Pengaturan Privasi",
        path: "/settings/account/privacy",
      },
    ],
  },
  {
    label: "Pesanan Saya",
    icon: ClipboardIcon,
    className: "text-[#35AC5D] size-7",
    path: "/settings/orders",
  },
  {
    label: "Notifikasi",
    icon: AlarmIcon,
    className: "text-primary size-7",
    path: "/settings/notifications",
  },
];

export default function SettingSidebar({
  picture,
  username,
}: {
  picture: string | undefined;
  username: string | undefined;
}) {
  const pathname = usePathname();

  return (
    <>
      <div className="w-80 flex items-center flex-col gap-3 bg-[#F5F5F5]">
        <div className="flex items-center w-full p-5 gap-5 overflow-hidden">
          <div className="relative size-14 rounded-full overflow-hidden">
            {picture ? (
              <Image
                src={picture!}
                alt={username || ""}
                fill
                className="object-contain"
              />
            ) : (
              <ProfileIcon className="absolute size-full object-contain" />
            )}
          </div>
          <div className="flex flex-col justify-center gap-1">
            <span className="font-bold text-lg">
              {truncateString(username ? username : "", 14)}
            </span>
            <button className="flex items-center font-medium gap-2 text-[#A9A6A6] text-sm">
              <PencilIcon className="size-4" />
              <span>Ubah Profil</span>
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5">
          {menus.map((menu, i) => (
            <div key={i} className="flex flex-col">
              <Link
                href={
                  menu.path === "/settings/account"
                    ? "/settings/account/profile"
                    : menu.path
                }
                className="flex items-center px-5 gap-3"
              >
                <menu.icon className={menu.className} />
                <span
                  className={`font-bold text-xl ${
                    menu.path === pathname ? "text-primary" : "text-black"
                  }`}
                >
                  {menu.label}
                </span>
              </Link>
              {menu.items && pathname.includes("account") && (
                <ul className="w-full pl-16 text-lg gap-1 font-medium flex flex-col pt-3">
                  {menu.items.map((menu) => (
                    <li
                      key={menu.label}
                      className={`${
                        pathname === menu.path
                          ? "text-primary"
                          : "text-[#A9A6A6] hover:text-primary"
                      }`}
                    >
                      <Link href={menu.path}>
                        <span>{menu.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
