import { Arrow } from "@/components/icons/Arrow";
import { Location } from "@/components/icons/Location";
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
      <div className="flex flex-wrap justify-between items-center gap-4 mb-20">
        <div>
          <Image src="/service1.jpg" alt="service" width={500} height={500} />
        </div>
        <div className="flex flex-col md:w-1/2 justify- gap-2">
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
      <div className="flex flex-wrap gap-10">
        <div className="flex gap-2 items-center">
          <Phone />{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            molestias?
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <Location />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
            quibusdam.
          </p>
        </div>
      </div>
    </div>
  );
}
