import ArrowLeftIcon from "@/components/icons/arrowLeft";
import Navbar from "@/components/navbar";
import Link from "next/link";
import Image from "next/image";
import StarIcon from "@/components/icons/star";
import formatPrice from "@/utils/formatPrice";
import CalendarIcon from "@/components/icons/calendar";

interface RegularProduct {
  title: string;
  price: number;
  unit: string;
  variants: string[] | null;
  range: [string, string][] | null;
  detail: { title: string; content: string }[];
  description: string;
}

interface SewaGedung {
  title: string;
  price: number;
  unit: string;
  range: [string, string][] | null;
  variants: string[] | null;
  detail: { title: string; content: string }[];
  description: string;
}

interface Items {
  jasa: RegularProduct;
  produk: RegularProduct;
  "sewa-gedung": SewaGedung;
  "sewa-lahan": RegularProduct;
}

const items: Items = {
  jasa: {
    title: "Jasa Cleaning Data",
    price: 350000,
    unit: "Data",
    variants: ["Regular", "Express"],
    range: null,
    detail: [
      {
        title: "Detail",
        content: "Cleaning data",
      },
      {
        title: "Ketentuan",
        content: "Kriteria data",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio delectus quasi, doloremque vel, labore ratione rerum repellendus doloribus quam, sequi perferendis ex cum quidem quia. Excepturi debitis voluptas unde animi sit, quidem mollitia totam vitae laborum ullam aperiam? Harum ipsa assumenda quae voluptas. Inventore sint, minima sed labore, illum aut commodi earumculpa, eum porro eaque tenetur sequi vero corporis laboriosamquam. Nulla distinctio impedit hic sed molestiae vel, voluptasvoluptatem natus aperiam tempore tempora quae voluptates similique mollitia esse nisi facere? Consequatur nemo magni nobis reprehenderit nam totam. Eaque repellat accusantium saepe, a ipsam quia doloribus iure eligendi pariatur.",
  },
  produk: {
    title: "Salep luka herbal",
    price: 15000,
    unit: "pcs",
    variants: ["30 gram", "60 gram", "100 gram"],
    range: null,
    detail: [
      {
        title: "Kondisi",
        content: "Baik",
      },
      {
        title: "Min. Pemesanan",
        content: "1 Buah",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio delectus quasi, doloremque vel, labore ratione rerum repellendus doloribus quam, sequi perferendis ex cum quidem quia. Excepturi debitis voluptas unde animi sit, quidem mollitia totam vitae laborum ullam aperiam? Harum ipsa assumenda quae voluptas. Inventore sint, minima sed labore, illum aut commodi earumculpa, eum porro eaque tenetur sequi vero corporis laboriosamquam. Nulla distinctio impedit hic sed molestiae vel, voluptasvoluptatem natus aperiam tempore tempora quae voluptates similique mollitia esse nisi facere? Consequatur nemo magni nobis reprehenderit nam totam. Eaque repellat accusantium saepe, a ipsam quia doloribus iure eligendi pariatur.",
  },
  "sewa-gedung": {
    title: "Penyewaan Gedung Widya Sabha",
    price: 20000,
    unit: "jam",
    range: [
      ["Jumat, 10 Mei", "10.00"],
      ["Minggu, 12 Mei", "10.00"],
    ],
    variants: null,
    detail: [
      {
        title: "Kondisi",
        content: "Baik",
      },
      {
        title: "Min. Pemesanan",
        content: "1 Buah",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio delectus quasi, doloremque vel, labore ratione rerum repellendus doloribus quam, sequi perferendis ex cum quidem quia. Excepturi debitis voluptas unde animi sit, quidem mollitia totam vitae laborum ullam aperiam? Harum ipsa assumenda quae voluptas. Inventore sint, minima sed labore, illum aut commodi earumculpa, eum porro eaque tenetur sequi vero corporis laboriosamquam. Nulla distinctio impedit hic sed molestiae vel, voluptasvoluptatem natus aperiam tempore tempora quae voluptates similique mollitia esse nisi facere? Consequatur nemo magni nobis reprehenderit nam totam. Eaque repellat accusantium saepe, a ipsam quia doloribus iure eligendi pariatur.",
  },
  "sewa-lahan": {
    title: "Lahan pertanian A (1)",
    price: 700000,
    unit: "bulan",
    variants: ["6 Bulan", "1 Tahun"],
    range: null,
    detail: [
      {
        title: "Detail",
        content: "Luas xx are, lingkungan kantin",
      },
      {
        title: "Ketentuan",
        content: "MOU Bermaterai",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio delectus quasi, doloremque vel, labore ratione rerum repellendus doloribus quam, sequi perferendis ex cum quidem quia. Excepturi debitis voluptas unde animi sit, quidem mollitia totam vitae laborum ullam aperiam? Harum ipsa assumenda quae voluptas. Inventore sint, minima sed labore, illum aut commodi earumculpa, eum porro eaque tenetur sequi vero corporis laboriosamquam. Nulla distinctio impedit hic sed molestiae vel, voluptasvoluptatem natus aperiam tempore tempora quae voluptates similique mollitia esse nisi facere? Consequatur nemo magni nobis reprehenderit nam totam. Eaque repellat accusantium saepe, a ipsam quia doloribus iure eligendi pariatur.",
  },
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{
    id: string;
    category: "jasa" | "produk" | "sewa-lahan" | "sewa-gedung";
    subcategory: string;
  }>;
}) {
  const { id, category } = await params;
  const item = items[category];
  return (
    <>
      <Navbar />
      <div className="flex items-start container mx-auto max-w-7xl gap-5 pt-36 min-h-screen">
        <Link href="/">
          <div className="flex items-center">
            <ArrowLeftIcon />
          </div>
        </Link>
        <div className="flex items-center justify-center flex-col gap-2">
          <div className="relative size-52 overflow-hidden border-2 border-black rounded-md">
            <Image
              src={`https://picsum.photos/seed/${category}-${id}/512/512`}
              alt={id}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-start gap-2 w-full relative">
            <div className="relative size-11 overflow-hidden border-2 border-black rounded-md">
              <Image
                src={`https://picsum.photos/seed/${category}-${id}/512/512`}
                alt={id}
                fill
                className="object-contain"
              />
            </div>
            <div className="relative size-11 overflow-hidden border-2 border-black rounded-md">
              <Image
                src={`https://picsum.photos/seed/${category}-${id}/512/512`}
                alt={id}
                fill
                className="object-contain"
              />
            </div>
            <div className="relative size-11 overflow-hidden border-2 border-black rounded-md">
              <Image
                src={`https://picsum.photos/seed/${category}-${id}/512/512`}
                alt={id}
                fill
                className="object-contain"
              />
            </div>
            <div className="relative size-11 overflow-hidden border-2 border-black rounded-md">
              <Image
                src={`https://picsum.photos/seed/${category}-${id}/512/512`}
                alt={id}
                fill
                className="object-contain"
              />
            </div>
            <button className="p-1 absolute bg-[#626262] right-0 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-1 px-5">
          <div className="w-full flex flex-col gap-5">
            <h1 className="text-2xl">{item.title}</h1>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2 text-sm">
                <span>Terjual</span>
                <span className="text-black/40">100+</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="flex gap-1">
                  <StarIcon className="text-[#FFC400] size-5" />
                  4.9
                </span>
                <span className="text-black/40">{"(77 rating)"}</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold">
              {formatPrice(item.price, 0)} / Data
            </h2>
            <div className="w-full h-[1px] bg-black/40" />
            <div className="flex justify-center flex-col gap-3">
              <div className="flex items-center gap-3">
                <CalendarIcon className="size-7 text-black" />
                <span className="font-bold">Pilih varian:</span>
              </div>
              <div className="flex items-center gap-3">
                {item.variants &&
                  item.variants.map((variant, index) => (
                    <button
                      key={index}
                      className={`border border-[#18A0FB] ${
                        index !== 0
                          ? "bg-white text-[#18A0FB]"
                          : "bg-[#18A0FB] text-white"
                      } p-2 rounded-xl`}
                    >
                      <span>{variant}</span>
                    </button>
                  ))}
                {item.range && (
                  <>
                    <button
                      className={`border border-[#18A0FB] bg-white text-[#18A0FB] p-2 rounded-xl`}
                    >
                      <span>{item.range[0][0]}</span>
                    </button>
                    <button
                      className={`border border-[#18A0FB] bg-white text-[#18A0FB] p-2 rounded-xl`}
                    >
                      <span>{item.range[0][1]}</span>
                    </button>
                    <span>-</span>
                    <button
                      className={`border border-[#18A0FB] bg-white text-[#18A0FB] p-2 rounded-xl`}
                    >
                      <span>{item.range[1][1]}</span>
                    </button>
                    <button
                      className={`border border-[#18A0FB] bg-white text-[#18A0FB] p-2 rounded-xl`}
                    >
                      <span>{item.range[1][0]}</span>
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="w-full h-[1px] bg-black/40" />
            <div className="flex flex-col gap-3">
              <button className="border-b-2 border-b-primary p-2 text-primary font-bold w-fit">
                Detail
              </button>
              <div className="flex items-center gap-3 text-xl font-semibold">
                <span className="text-black/40">{item.detail[0].title}:</span>
                <span>{item.detail[0].content}</span>
              </div>
              <div className="flex items-center gap-3 text-xl font-semibold">
                <span className="text-black/40">{item.detail[1].title}:</span>
                <span>{item.detail[1].content}</span>
              </div>
              <p className="text-lg">{item.description}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-5 border border-black rounded-xl gap-3 min-w-80">
          <span className="font-bold">Atur jumlah pembelian</span>
          <div className="flex items-center gap-3">
            <div className="relative size-14 overflow-hidden border-2 border-black rounded-md">
              <Image
                src={`https://picsum.photos/seed/${category}-${id}/512/512`}
                alt={id}
                fill
                className="object-contain"
              />
            </div>
            <span className="max-w-56">{item.title}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center gap-5 border border-black/40 p-2 rounded-xl">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              </button>
              <span>1</span>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-1">
              <span>Stok:</span>
              <span>6</span>
            </div>
          </div>
          <span className="opacity-40 pb-5">Detail singkat</span>
          <div className="flex items-center justify-between w-full">
            <span className="opacity-40">Subtotal</span>
            <span className="text-lg font-bold">{formatPrice(350000, 0)}</span>
          </div>
          <button className="text-white font-bold bg-primary border border-primary rounded-xl p-2">
            <span>+ Keranjang</span>
          </button>
          <button className="text-primary font-bold bg-white border border-primary rounded-xl p-2">
            <span>Pesan Langsung</span>
          </button>
        </div>
      </div>
    </>
  );
}
