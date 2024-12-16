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
                  src={`https://picsum.photos/seed/${
                    Math.PI * i + 0.5
                  }/512/512`}
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
                  src={`https://picsum.photos/seed/${
                    Math.PI * i + 0.4
                  }/512/512`}
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
                  src={`https://picsum.photos/seed/${
                    Math.PI * i + 0.3
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
                  src={`https://picsum.photos/seed/${
                    Math.PI * i + 0.2
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
