"use client";

import { useState } from "react";

export default function Notification() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col">
            <span className="font-bold text-xl">Notifikasi Email</span>
            <span>
              Notifikasi tentang keamanan akun dan pengingat penting tidak dapat
              dinonaktifkan
            </span>
          </div>
          <ToggleSwitch defaultChecked />
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col pl-8">
            <span className="font-medium text-lg">Status Pesanan</span>
            <span>Informasi terbaru dari status pesanan</span>
          </div>
          <ToggleSwitch defaultChecked />
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col pl-8">
            <span className="font-medium text-lg">Survey Pembeli</span>
            <span>
              Terima survei untuk memberi penilaian dan saran untuk pelayanan
              UniBiz yang lebih baik
            </span>
          </div>
          <ToggleSwitch />
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col pl-8">
            <span className="font-medium text-lg">Promosi</span>
            <span>
              Informasi eksklusif tentang promo dan penawaran yang akan datang
            </span>
          </div>
          <ToggleSwitch defaultChecked />
        </div>
        <div className="w-full h-[2px] bg-disable-primary my-3" />
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col">
            <span className="font-bold text-xl">Notifikasi SMS</span>
            <span>
              Notifikasi tentang keamanan akun dan pengingat penting tidak dapat
              dinonaktifkan
            </span>
          </div>
          <ToggleSwitch defaultChecked />
        </div>
        <div className="w-full h-[2px] bg-disable-primary my-3" />
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col">
            <span className="font-bold text-xl">Notifikasi WhatsApp</span>
            <span>
              Notifikasi tentang keamanan akun dan pengingat penting tidak dapat
              dinonaktifkan
            </span>
          </div>
          <ToggleSwitch defaultChecked />
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col pl-8">
            <span className="font-medium text-lg">Pesanan</span>
            <span>Informasi terbaru dari status pesanan</span>
          </div>
          <ToggleSwitch defaultChecked />
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col pl-8">
            <span className="font-medium text-lg">Promosi</span>
            <span>
              Informasi eksklusif tentang promo dan penawaran yang akan datang
            </span>
          </div>
          <ToggleSwitch defaultChecked />
        </div>
      </div>
    </>
  );
}

function ToggleSwitch({
  defaultChecked = false,
}: {
  defaultChecked?: boolean;
}) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={isChecked}
        onChange={handleToggle}
      />
      <div
        className={`w-12 h-6 rounded-full flex items-center p-1 transition-colors duration-300 ${
          isChecked ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
            isChecked ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </div>
    </label>
  );
}
