import { Arrow } from "@/components/icons/Arrow";
import { ReadMore } from "@/components/icons/Location";
import { Phone } from "@/components/icons/Phone";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <div className="px-10 md:px-36 py-20 min-h-screen">
      <div className="mb-10">
        <Link href="/" className="flex items-center gap-1 text-lg font-medium">
          <span>
            <Arrow />
          </span>
          back
        </Link>
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 mb-20">
        <div className="w-full md:w-1/2">
          <Image src="/service1.jpg" alt="service" width={500} height={500} />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <h2 className="text-3xl font-extrabold">About Work</h2>
          <p className="text-gray-600 font-medium leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            assumenda est iusto, cumque doloribus officiis delectus, illum
            debitis magni ex provident quasi? Voluptate minima fuga maxime
            possimus alias. Autem, cumque. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Temporibus assumenda est iusto, cumque
            doloribus officiis delectus, illum debitis magni ex provident quasi?
            Voluptate minima fuga maxime possimus alias. Autem, cumque.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="flex gap-2 items-center">
          <Phone /> <p>Give us a call and we will take care of it for you!</p>
        </div>
        <div className="flex gap-2 items-center">
          <ReadMore />
          <Link href="/sth/1">
            Interested in what we do?{" "}
            <span className="underline text-blue-500">Learn more</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
