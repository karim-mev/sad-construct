import Image from "next/image";
import Link from "next/link";
import { HtmlHTMLAttributes } from "react";

interface ServiceCardType {
  src: string;
  name: string;
}

export default function ServiceCard({ src, name }: ServiceCardType) {
  return (
    <div className="relative">
      <div className="absolute flex flex-col items-center justify-center gap-10 bg-black bg-opacity-30 w-full h-full">
        <h3 className="text-3xl text-white font-medium">{name}</h3>
        <Link
          href={`/services/${name.toLocaleLowerCase()}`}
          className="bg-white px-6 py-3 font-medium hover:bg-gray-200"
        >
          Discover
        </Link>
      </div>
      <Image src={src} alt={name} width={300} height={300} className="object-fill"/>
    </div>
  );
}
