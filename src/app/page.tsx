import Saftey from "@/components/Saftey";
import ServiceCard from "@/components/ServiceCard";
import Stats from "@/components/Stats";
import About from "@/components/layouts/About";
import Growth from "@/components/layouts/Growth";
import { services } from "@/config/services";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="relative">
        <div className="absolute bg- bg-opacity-30 flex flex-wrap items- justify-between gap-5 px-10 md:px-40 w-full h-full">
          {" "}
          <div className="flex flex-col items-start justify-center gap-4">
            <h1 className="text-3xl md:text-7xl text-gray-900 font-extrabold max-w-[25rem] !leading-snug">
              DREAM IT WE BUILD
            </h1>
            <h3 className="text-lg font-medium text-gray-900">
              Construction made for the ever evolving world
            </h3>
            <Link
              href="/"
              className="text-sm text-gray-900 font-semibold border-2 border-gray-900 px-8 py-3 mt-2 hover:bg-gray-900 hover:text-white transition-all"
            >
              Learn more
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center">
          <Image src="/sadeem.svg" alt="" width={300} height={300} />

            <Image src="/ro2ya.png" alt="" width={400} height={400} />
          </div>
        </div>
        <Image
          src="/.jpg"
          alt=""
          width={1000}
          height={1000}
          className="w-full h-screen"
        />
      </div>
      <About />
      <Growth />
      <Saftey />
      <div className="my-20">
        <h1 className="text-5xl font-bold text-center mb-14">Our Services</h1>
        <div className="flex flex-wrap justify-center gap-6 px-20">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              src={service.src}
              name={service.name}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
