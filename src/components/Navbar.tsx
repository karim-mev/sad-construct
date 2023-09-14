import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed bg-slate-300 w-full z-10 flex justify-between items-center px-10 py-4">
      <div className="relative">
      <Image src="/sadeem-svg.svg" alt="" width={100} height={100} />

        </div>{" "}
      <div className="flex gap-5">
        <Link href="/">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#services">Services</Link>
      </div>
      <Link
        href="#services"
        className="text-sm text-gray-900 font-semibold border-2 border-gray-900 px-8 py-3 mt-2 hover:bg-gray-900 hover:text-white transition-all"
      >
        Learn more
      </Link>
    </div>
  );
}
