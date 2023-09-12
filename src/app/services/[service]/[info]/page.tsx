import { Arrow } from "@/components/icons/Arrow";
import { servicesInfo } from "@/config/services";
import Image from "next/image";
import Link from "next/link";

export default async function Info({ params }: { params: { info: string } }) {
  const sth = servicesInfo.find((service) => service.id == params.info);
  return (
    <div className="min-h-screen px-4 lg:px-20 py-20 lg:py-32">
      <div className="mb-10">
        <Link href="/" className="flex items-center gap-1 text-lg font-medium">
          <span>
            <Arrow />
          </span>
          Home
        </Link>
      </div>
      <h1 className="text-3xl font-semibold text-center underline mb-20">
        Step by step process
      </h1>
      <div className="flex flex-wrap justify-center gap-5">
        {sth?.info.map((img, index) => (
          <div key={index} className="max-w-[20rem] h-[20rem] aspect-square">
            <Image
              src={img}
              alt=""
              loading="lazy"
              fill
              className="!relative object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
