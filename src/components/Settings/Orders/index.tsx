"use client";

import { useState } from "react";
import SearchIcon from "@/components/icons/search";
import Image from "next/image";
import Link from "next/link";
import order from "./order.png";
import Rating from "@/components/rating";
import formatPrice from "@/utils/formatPrice";
import LogoBw from "@/components/icons/logobw";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas-pro";

enum OrderStatus {
  BELUM_BAYAR = "Belum Bayar",
  SEDANG_DIPROSES = "Sedang Diproses",
  DIKIRIM = "Dikirim",
  SELESAI = "Selesai",
  DIBATALKAN = "Dibatalkan",
}

const tabs = [
  { title: "Semua" },
  { title: OrderStatus.BELUM_BAYAR },
  { title: OrderStatus.SEDANG_DIPROSES },
  { title: OrderStatus.DIKIRIM },
  { title: OrderStatus.SELESAI },
  { title: OrderStatus.DIBATALKAN },
];

interface Orders {
  productName: string;
  sellerName: string;
  pictureUrl: string;
  status: OrderStatus;
  price: number;
  totalPrice: number;
  rating: number;
  additional: {
    title: string;
    value: string;
  };
}

// Example data
const initialOrders: Orders[] = [
  {
    productName: "Penyewaan Gedung Widya Sabha",
    sellerName: "Universitas Udayana",
    pictureUrl:
      "https://picsum.photos/seed/penyewaan-gedung-widya-sabha/512/512",
    status: OrderStatus.SELESAI,
    price: 20000,
    totalPrice: 240000,
    rating: 4,
    additional: { title: "Waktu", value: "12 jam" },
  },
  {
    productName: "Salep Luka Herbal",
    sellerName: "Universitas Udayana",
    pictureUrl: "https://picsum.photos/seed/salep-luka-herbal/512/512",
    status: OrderStatus.SELESAI,
    price: 15000,
    totalPrice: 15000,
    rating: 0,
    additional: { title: "Jumlah", value: "1 item" },
  },
];

function filterOrders(orders: Orders[], status: string) {
  if (status === "Semua") {
    return orders;
  }
  return orders.filter((o) => o.status === status);
}

export default function Orders() {
  const [tab, setTab] = useState(0);

  const [orders, setOrders] = useState<Orders[]>(initialOrders);

  // Temporary rating value to show in Overlay’s <Rating>

  const filteredOrders = filterOrders(orders, tabs[tab].title);

  // Open the overlay, setting the current order and its rating

  return (
    <>
      <div className="flex flex-col w-full h-full">
        {/* Tab buttons container */}
        <div className="relative flex items-center">
          <span
            className="absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-transform duration-300"
            style={{
              width: `${100 / tabs.length}%`,
              transform: `translateX(${tab * 100}%)`,
            }}
          />
          {tabs.map((t, i) => (
            <button
              key={i}
              onClick={() => setTab(i)}
              className="px-5 py-2 w-full whitespace-nowrap text-center"
            >
              {t.title}{" "}
              {t.title === "Semua"
                ? orders.length === 0
                  ? ""
                  : "(" + orders.length + ")"
                : filterOrders(orders, t.title).length === 0
                ? ""
                : "(" + filterOrders(orders, t.title).length + ")"}
            </button>
          ))}
        </div>

        <div className="w-full bg-disable-primary flex items-center p-3 gap-3">
          <SearchIcon />
          <input
            type="text"
            placeholder="Cari berdasarkan Nama Unit Bisnis, No. Pesanan, atau Nama Produk"
            className="focus:ring-transparent focus:outline-none bg-transparent w-full"
          />
        </div>

        {filteredOrders.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="relative size-36">
              <Image src={order} alt="order" fill className="object-contain" />
            </div>
            <span className="text-xl font-medium">Belum Ada Pesanan</span>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center gap-2 mt-2">
            {filteredOrders.map((o, i) => (
              <>
                <OrderItem
                  key={i}
                  index={i}
                  orders={orders}
                  data={o}
                  set={setOrders}
                />
              </>
            ))}
          </div>
        )}
      </div>

      {/* The rating overlay */}

      {/* The invoice overlay */}
    </>
  );
}

function OrderItem({
  index,
  data,
  set,
  orders,
}: {
  index: number;
  data: Orders;
  set: React.Dispatch<React.SetStateAction<Orders[]>>;
  orders: Orders[];
}) {
  const [invoiceOpen, setInvoiceOpen] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [tempRating, setTempRating] = useState<number>(data.rating);
  const handleClickNilai = () => {
    setTempRating(data.rating);
    setOverlayOpen(true);
  };

  // Once user is done (for example), store or update the rating
  const handleSaveRating = () => {
    if (index === null) return;

    // Update the orders array with the new rating
    let updatedOrders = data;
    updatedOrders = {
      ...updatedOrders,
      rating: tempRating,
    };

    set(orders.map((o, i) => (i === index ? updatedOrders : o)));
    setOverlayOpen(false);
  };
  return (
    <>
      <div className="flex flex-col w-full gap-3 p-5 shadow-md">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-bold text-lg">{data.sellerName}</span>
            <Link
              href="/chats"
              className="bg-primary border-2 border-primary rounded text-white p-1 text-xs"
            >
              Chat
            </Link>
            <button className="bg-white text-border border-2 rounded border-border p-1 text-xs">
              Kunjungi Unit Bisnis
            </button>
          </div>
          <span
            className={`uppercase ${
              data.status === OrderStatus.SELESAI
                ? "text-primary"
                : data.status === OrderStatus.DIBATALKAN
                ? "text-red-400"
                : "text-black"
            } text-lg`}
          >
            {data.status}
          </span>
        </div>
        <div className="w-full h-[1px] bg-disable-primary my-1" />
        <div className="flex w-full items-center">
          <div className="flex w-full items-center gap-3">
            <div className="relative size-24 overflow-hidden border-2 border-black rounded-md">
              <Image
                src={data.pictureUrl}
                alt={data.productName}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl py-1">{data.productName}</span>
              <div className="flex items-center text-sm text-border gap-1">
                <span>{data.additional.title}:</span>
                <span>{data.additional.value}</span>
              </div>
              <Rating rating={data.rating} className="size-5" />
            </div>
          </div>
          <div className="flex items-center justify-center">
            {formatPrice(data.totalPrice, 0)}
          </div>
        </div>
        <div className="w-full h-[1px] bg-disable-primary my-1" />
        <div className="flex w-full items-center justify-end gap-3">
          <span className="text-lg">Total Pesanan:</span>
          <span className="text-3xl text-primary">
            {formatPrice(data.totalPrice, 0)}
          </span>
        </div>
        <div className="flex w-full items-center justify-between">
          <span className="text-border text-sm">
            Nilai produk sebelum 16-03-2025
          </span>
          <div className="flex items-center justify-end gap-3">
            {/* Clicking “Nilai” opens the overlay, passing this order's index */}
            <button
              onClick={handleClickNilai}
              className="px-3 py-1 min-w-28 bg-primary text-white border border-primary rounded"
            >
              Nilai
            </button>
            <button className="px-3 py-1 min-w-28 bg-white text-disable-secondary border border-disable-secondary rounded">
              Ajukan Pengembalian
            </button>
            <button
              onClick={() => setInvoiceOpen(true)}
              className="px-3 py-1 min-w-28 bg-white text-disable-secondary border border-disable-secondary rounded"
            >
              Invoice
            </button>
          </div>
        </div>
      </div>

      <RatingOverlay
        open={overlayOpen}
        onClose={() => setOverlayOpen(false)}
        rating={tempRating}
        setRating={setTempRating}
        onSave={handleSaveRating}
      />

      <InvoiceOverlay data={data} open={invoiceOpen} set={setInvoiceOpen} />
    </>
  );
}

function RatingOverlay({
  open,
  onClose,
  rating,
  setRating,
  onSave,
}: {
  open: boolean;
  onClose: () => void;
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  onSave: () => void;
}) {
  return (
    <div
      className={`absolute top-0 left-0 flex items-center justify-center h-screen w-full backdrop-blur-[1px] bg-black/10 ${
        !open ? "hidden" : ""
      }`}
    >
      <div className="bg-white p-10 flex flex-col items-center justify-center min-w-96 gap-5">
        <div className="flex items-center justify-center">
          <span className="font-bold text-xl">
            Beri nilai untuk transaksi anda!
          </span>
        </div>

        {/* The interactive Rating component, passing the rating and onChange */}
        <div className="flex items-center justify-center p-3 border border-border rounded">
          <Rating
            rating={rating}
            className="size-12"
            interactive
            onRatingChange={(newVal: number) => setRating(newVal)}
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              onSave();
            }}
            className="px-4 py-2 bg-primary text-white rounded"
          >
            Simpan
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white text-disable-secondary border border-disable-secondary rounded"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}

function Invoice({ data }: { data: Orders }) {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <LogoBw className="w-28" />
      </div>
      <span className="font-semibold text-lg">UniBiz Udayana</span>
      <span className="text-sm text-center my-1">
        Jln. Raya Kampus Unud, Jimbaran, Kec. Kuta Selatan, Kab. Badung, Bali
        80361
      </span>
      <span className="text-sm">{"No. Telp +62 (361) 701907"}</span>
      <span className="text-sm">{"info@unud.ac.id"}</span>
      <div className="w-full h-[1px] bg-disable-secondary" />
      <div className="flex w-full items-center justify-between text-xs">
        <span className="max-w-28">{"2025-05-09 12:56:10"}</span>
        <span className="max-w-28 text-end">{"Razik"}</span>
      </div>
      <div className="flex w-full items-center justify-between text-xs">
        <span></span>
        <span>{"Jl. Diponegoro 1, Denpasar"}</span>
      </div>
      <div className="flex w-full items-center justify-between text-xs">
        <span>No. 0-3</span>
        <span></span>
      </div>
      <div className="w-full h-[1px] bg-disable-secondary" />
      <div className="flex flex-col w-full justify-center text-xs">
        <div className="flex items-center">
          <span className="text-sm">1. {data.productName}</span>
        </div>
        <div className="flex w-full items-center justify-between">
          <span>
            {data.additional.value} x {data.price}
          </span>
          <span>{formatPrice(data.totalPrice, 0)}</span>
        </div>
      </div>
      <div className="w-full h-[1px] bg-disable-secondary" />
      <div className="flex w-full items-center justify-between text-xs">
        <span>Sub Total</span>
        <span>{formatPrice(data.totalPrice, 0)}</span>
      </div>
      <div className="flex w-full items-center justify-between text-xs">
        <span>Biaya Layanan</span>
        <span>{formatPrice(3000, 0)}</span>
      </div>
      <div className="font-bold w-full flex items-center justify-between text-xs">
        <span>Total</span>
        <span>{formatPrice(data.totalPrice + 3000, 0)}</span>
      </div>
      <div className="flex w-full items-center justify-between text-xs">
        <span>Bayar</span>
        <span>{formatPrice(data.totalPrice + 3000, 0)}</span>
      </div>
      <div className="flex w-full items-center justify-between text-xs">
        <span>Kembali</span>
        <span>{formatPrice(0, 0)}</span>
      </div>
      <div className="flex w-full items-center justify-center my-5 text-sm">
        <span>Terima Kasih Telah Berbelanja</span>
      </div>
      <div className="flex flex-col w-full items-center justify-center mt-2 text-xs">
        <span>Link Kritik dan Saran:</span>
        <span>{"https://www.unibiz.web.id"}</span>
      </div>
    </>
  );
}

function InvoiceOverlay({
  open,
  set,
  data,
}: {
  open: boolean;
  set: React.Dispatch<React.SetStateAction<boolean>>;
  data: Orders;
}) {
  const handleDownloadPDF = async () => {
    const element = document.getElementById("invoice-pdf");
    if (!element) return;

    const canvas = await html2canvas(element);

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("portrait", "px", "a4"); // Orientasi potret, unit px, ukuran A4
    // const imgWidth = pdf.internal.pageSize.getWidth();
    // const imgHeight = (canvas.height * canvas.width) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save(`Invoice-${data.productName}.pdf`);
  };
  return (
    <>
      <div
        className={`absolute top-0 left-0 flex flex-col items-center justify-center h-screen w-full backdrop-blur-[1px] bg-black/10 ${
          !open ? "hidden" : ""
        }`}
      >
        <div className="flex items-center">
          <button
            onClick={() => set(false)}
            className="bg-primary text-white px-3 rounded"
          >
            Tutup
          </button>
          <button
            onClick={handleDownloadPDF}
            className="bg-primary text-white px-3 rounded"
          >
            Unduh
          </button>
        </div>
        <div
          className="bg-white p-5 flex flex-col items-center justify-center max-w-xs gap-1"
          id="invoice-pdf"
        >
          <Invoice data={data} />
        </div>
      </div>
    </>
  );
}
