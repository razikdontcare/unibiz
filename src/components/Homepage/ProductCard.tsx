import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default function ProductCard({
  src,
  alt,
}: {
  src: string | StaticImport;
  alt: string;
}) {
  return (
    <>
      <div className="border-2 border-black p-5 rounded-xl flex flex-col justify-center gap-2">
        <div className="relative p-2 border-2 rounded-lg border-black/50 aspect-square overflow-hidden size-40">
          <Image src={src} alt={alt} fill className="object-contain" />
        </div>
        <div className="flex flex-col justify-center">
          <span>Lorem, ipsum.</span>
          <span className="font-bold text-lg">Rp. 100.000</span>
        </div>
      </div>
    </>
  );
}
