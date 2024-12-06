import CartIcon from "./icons/cart";
import Logo from "./icons/logo";
import ProfileIcon from "./icons/profile";
import SearchIcon from "./icons/search";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-center p-5 w-full shadow-xl">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto gap-5">
          <div className="flex items-center justify-center">
            <Logo className="size-20" />
            <span className="font-bold text-4xl text-primary">UniBizz</span>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="flex items-center w-full border-2 border-black/40 rounded-lg gap-3 px-2 py-2">
              <SearchIcon className="size-8" />
              <input
                className=" text-xl w-full h-full focus:ring-transparent focus:outline-none"
                placeholder="Cari di UniBiz"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-10">
            <button>
              <CartIcon className="size-8" />
            </button>
            <button>
              <ProfileIcon className="size-8" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
