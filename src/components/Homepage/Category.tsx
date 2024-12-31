import Link from "next/link";
import ProductCard from "./ProductCard";
const items = Array.from({ length: 10 });

export default function Category() {
  return (
    <>
      <div className="flex flex-col items-center justify-center container mx-auto max-w-7xl mt-10 gap-8 pb-20">
        <div className="flex flex-col items-center justify-center w-full mx-auto">
          <div className="flex items-center justify-between w-full">
            <h2 className="font-bold text-4xl">Jasa</h2>
            <Link
              href="#"
              className="text-xl hover:text-primary/80 transition-all duration-300"
            >
              Lihat Selengkapnya
            </Link>
          </div>
          <div className="flex items-center w-full py-5 flex-nowrap overflow-hidden">
            <div className="flex items-center w-full gap-3 overflow-auto hide-scrollbar">
              {items.map((_, i) => (
                <ProductCard
                  key={i}
                  product={["jasa", "pengolahan-data", i.toString()]}
                  src={`https://picsum.photos/seed/${"jasa-" + i}/512/512`}
                  alt={i.toString()}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full mx-auto">
          <div className="flex items-center justify-between w-full">
            <h2 className="font-bold text-4xl">Produk</h2>
            <Link
              href="#"
              className="text-xl hover:text-primary/80 transition-all duration-300"
            >
              Lihat Selengkapnya
            </Link>
          </div>
          <div className="flex items-center w-full py-5 flex-nowrap overflow-hidden">
            <div className="flex items-center w-full gap-3 overflow-auto hide-scrollbar">
              {items.map((_, i) => (
                <ProductCard
                  key={i}
                  product={["produk", "obat-dan-farmasi", i.toString()]}
                  src={`https://picsum.photos/seed/${"produk-" + i}/512/512`}
                  alt={i.toString()}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full mx-auto">
          <div className="flex items-center justify-between w-full">
            <h2 className="font-bold text-4xl">Sewa Gedung</h2>
            <Link
              href="#"
              className="text-xl hover:text-primary/80 transition-all duration-300"
            >
              Lihat Selengkapnya
            </Link>
          </div>
          <div className="flex items-center w-full py-5 flex-nowrap overflow-hidden">
            <div className="flex items-center w-full gap-3 overflow-auto hide-scrollbar">
              {items.map((_, i) => (
                <ProductCard
                  key={i}
                  product={["sewa-gedung", "sewa-fasilitas", i.toString()]}
                  src={`https://picsum.photos/seed/${
                    "sewa-gedung-" + i
                  }/512/512`}
                  alt={i.toString()}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full mx-auto">
          <div className="flex items-center justify-between w-full">
            <h2 className="font-bold text-4xl">Sewa Lahan</h2>
            <Link
              href="#"
              className="text-xl hover:text-primary/80 transition-all duration-300"
            >
              Lihat Selengkapnya
            </Link>
          </div>
          <div className="flex items-center w-full py-5 flex-nowrap overflow-hidden">
            <div className="flex items-center w-full gap-3 overflow-auto hide-scrollbar">
              {items.map((_, i) => (
                <ProductCard
                  key={i}
                  product={["sewa-lahan", "penyewaan-lahan", i.toString()]}
                  src={`https://picsum.photos/seed/${
                    "sewa-lahan-" + i
                  }/512/512`}
                  alt={i.toString()}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
