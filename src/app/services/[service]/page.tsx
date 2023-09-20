import { Arrow } from "@/components/icons/Arrow";
import { ReadMore } from "@/components/icons/Location";
import { Phone } from "@/components/icons/Phone";
import { info } from "@/config/services";
import Image from "next/image";
import Link from "next/link";

export default function Services({ params }: { params: { service: string } }) {
  const sth = info.find((service) => service.id == params.service);

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
          <Image
            src={sth ? sth.src : ""}
            alt="service"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <h2 className="text-3xl font-extrabold">About Work</h2>
          <p className="text-gray-600 font-medium leading-7">{sth?.text}</p>
          <div className="flex text-lg items-center gap-2">
            <ReadMore />
            Interested in our design process?{" "}
            <Link
              href={`https://sadeemconst.com/services/sth/data/${params.service}`}
              className="text-[#e9ce60] font-semibold text-lg bg-black hover:bg-neutral-900 px-4 py-2 rounded-xl shadow-xl shadow-"
            >
              Our Process
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="flex gap-2 items-center">
          <Phone /> <p>Contact us and we will take care of it for you!</p>
        </div>
        <div className="flex gap-2 items-center">
          <ReadMore />
          <Link href="https://wa.me/+966570302102">
            Give us a call{" "}
            <span className="underline text-blue-500">+966 57 030 2102</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
