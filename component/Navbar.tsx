import Link from "next/link";
import SearchBar from "./SearchBar";
import { FaBell, FaHome, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import ShoppingCartIcon from "./ShoppingCartIcon";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center border-b border-gray-200 pb-4">
        <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="TrendLama"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="hidden md:block text-md font-medium tracking-wider">
          E-Commerce
        </p>
        </Link>
        <div className="flex items-center gap-6">
         <SearchBar />
         <Link href='/'>
         <FaHome className="w-4 h-4 text-gray-600" />
         </Link>
         <FaBell className="w-4 h-4 text-gray-600" />
         <ShoppingCartIcon />
         <Link href="/login">
         Sign in
         </Link>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
