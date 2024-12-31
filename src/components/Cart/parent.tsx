import CartItem from "./Items";

export interface Items {
  src: string;
  alt: string;
  price: number;
  name: string;
}

export default function CartParent({
  children,
  items,
}: {
  children?: React.ReactNode;
  items: Items[];
}) {
  return (
    <>
      <div className="flex items-center justify-center w-full flex-col pt-10 gap-3">
        <div className="flex items-center justify-start w-full">
          <label className="flex items-center gap-3">
            <input type="checkbox" className="accent-primary" />
            <div className="flex items-center gap-1">
              <span className="text-xl font-bold uppercase">{children}</span>
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </label>
        </div>

        {items.map((item, index) => (
          <CartItem
            src={item.src}
            alt={item.alt}
            price={item.price}
            key={index}
          >
            {item.name}
          </CartItem>
        ))}
      </div>
    </>
  );
}
