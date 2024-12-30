import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  src,
  alt,
  product,
}: {
  src: string | StaticImport;
  alt: string;
  product: [string, string];
}) {
  return (
    <>
      <div>
        <Link
          href={`/${product[0]}/${product[1]}`}
          className="border-2 border-black p-5 rounded-xl flex flex-col justify-center gap-2"
        >
          <div className="relative p-2 border-2 rounded-lg border-black/50 aspect-square overflow-hidden size-[9.9rem]">
            <Image src={src} alt={alt} fill className="object-contain" />
          </div>
          <div className="flex flex-col justify-center">
            <span>Lorem, ipsum.</span>
            <span className="font-bold text-lg">Rp. 100.000</span>
          </div>
        </Link>
      </div>
    </>
  );
}
