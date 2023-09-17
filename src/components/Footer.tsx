import Link from "next/link";
import { Instagram } from "./icons/Instagram";
import { Mail } from "./icons/Mail";
import { Snapchat } from "./icons/Snapchat";
import { Whatsapp } from "./icons/Whatsapp";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex bg-gray-100 text-gray-600 items-center justify-between px-8 py-10">
      <div className="flex flex-1 gap-4">
        <Image src="/sadeem.svg" alt="" width={100} height={100} />
      </div>
      <div className="flex gap-4 items-center justify-center flex-1">
        <div>
          <h4 className="text-center text-[#888888]">For projects</h4>
          <Link
            href="https://wa.me/+966570302102"
            className="flex gap-1 items-center"
          >
            <Whatsapp />
            <span className="text-[#888888]">+966 57 030 2102</span>
          </Link>
        </div>
        <div>
          <h4 className="text-center text-[#888888]">For Operator</h4>
          <Link
            href="https://wa.me/+966506000926"
            className="flex gap-1 items-center"
          >
            <Whatsapp />
            <span className="text-[#888888]">+966 50 600 0926</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-1 gap-6">
        <div className="flex items-center justify-end gap-6 flex-1">
          <Snapchat />
          <Instagram />
          <Link href="mailto:projects@sadeemconst.com"><Mail /></Link>
        </div>
      </div>
    </div>
  );
}
