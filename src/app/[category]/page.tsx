import Navbar from "@/components/navbar";
import ProductCard from "@/components/Homepage/ProductCard";
import BackBtn from "@/components/back";
const items = Array.from({ length: 100 });

export default async function CategoryPages({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center container mx-auto max-w-7xl gap-8 pt-36 relative">
        <BackBtn className="absolute -left-36 top-36" />
        <div className="flex flex-col items-center justify-center w-full mx-auto">
          <div className="flex items-center justify-start w-full">
            <h2 className="font-bold text-4xl capitalize">{category}</h2>
          </div>
          <div className="flex items-center w-full py-5 flex-nowrap overflow-hidden">
            <div className="flex flex-wrap items-center w-full gap-3">
              {items.map((_, i) => (
                <ProductCard
                  key={i}
                  product={["jasa", "pengolahan-data", i.toString()]}
                  src={`https://picsum.photos/seed/${
                    category + "-" + i
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
