// import Link from "next/link";
// import SearchBar from "./SearchBar";
// import { FaBell, FaHome } from "react-icons/fa";
// import Image from "next/image";
// import ShoppingCartIcon from "./ShoppingCartIcon";
// import { useClerk } from "@clerk/nextjs";

// function Navbar() {
//    const { openSignIn } = useClerk();
   
//   return (
//     <>
//       <nav className="flex justify-between items-center border-b border-gray-200 pb-4">
//         <Link href="/" className="flex items-center">
//         <Image
//           src="/logo.png"
//           alt="TrendLama"
//           width={36}
//           height={36}
//           className="w-6 h-6 md:w-9 md:h-9"
//         />
//         <p className="hidden md:block text-md font-medium tracking-wider">
//           E-Commerce
//         </p>
//         </Link>
//         <div className="flex items-center gap-6">
//          <SearchBar />
//          <Link href='/'>
//          <FaHome className="w-4 h-4 text-gray-600" />
//          </Link>
//          <FaBell className="w-4 h-4 text-gray-600" />
//          <ShoppingCartIcon />
//          <Link href="/">
//          Sign in
//          </Link>
//         </div>
//       </nav>
//     </>
//   );
// }
// export default Navbar;

"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";
import { FaBell, FaHome } from "react-icons/fa";
import Image from "next/image";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { useUser, UserButton, SignInButton } from "@clerk/nextjs";

function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <nav className="flex justify-between items-center border-b border-gray-200 pb-4 px-4 md:px-8">
      {/* Left Side - Logo */}
      <Link href="/" className="flex items-center gap-2">
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

      {/* Right Side */}
      <div className="flex items-center gap-6">
        <SearchBar />

        <Link href="/">
          <FaHome className="w-4 h-4 text-gray-600 hover:text-black transition" />
        </Link>

        <button
          type="button"
          className="relative hover:text-black transition"
        >
          <FaBell className="w-4 h-4 text-gray-600" />
          {/* Notification dot (optional) */}
          {/* <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span> */}
        </button>

        <ShoppingCartIcon />

        {/* Clerk Auth Buttons */}
        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <SignInButton mode="modal">
            <button
              type="button"
              className="px-4 py-1 rounded-md border border-gray-300 hover:bg-gray-100 cursor-pointer transition"
            >
              Login
            </button>
          </SignInButton>
        )}
      </div>
    </nav>
  );
}

export default Navbar;