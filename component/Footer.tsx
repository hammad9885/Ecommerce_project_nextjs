import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="mt-16 flex flex-col items-center p-8 md:flex-row md:justify-between md:gap-0 md:items-start bg-gray-800 rounded-lg">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="TrendLama" width={36} height={36} />
          <p className="hidden md:block text-md font-medium tracking-wider text-white">
            E-Commerce
          </p>
        </Link>
          <p className="text-sm text-gray-500">&copy; 2025</p>
          <p className="text-sm text-gray-500">All rights reserved</p>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4 mt-[40px] md:mt-0 text-gray-400">
          <p className="text-sm text-amber-50">Links</p>
          <Link href="/">Home</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Our Team</Link>
          <Link href="/">Our Services</Link>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4 mt-[40px] md:mt-0 text-gray-400">
          <p className="text-sm text-amber-50">Products</p>
          <Link href="/">All Products</Link>
          <Link href="/">New Arrivals</Link>
          <Link href="/">Best Sellers</Link>
          <Link href="/">Sale</Link>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4 mt-[40px] md:mt-0 text-gray-400">
          <p className="text-sm text-amber-50">Companys</p>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Affiliate Program</Link>
        </div>
      </div>
    </>
  );
}
export default Footer;
