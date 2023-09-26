import Companies from "@/components/Companies";
import Saftey from "@/components/Saftey";
import ServiceCard from "@/components/ServiceCard";
import Stats from "@/components/Stats";
import About from "@/components/layouts/About";
import Growth from "@/components/layouts/Growth";
import Slider from "@/components/layouts/Slider";
import { companies, services } from "@/config/services";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="relative flex flex-wrap flex-col w-full h-screen">
        <div className="absolute bg- bg-opacity-30 flex flex-wrap items- justify-between gap-5 px-10 md:px-20 w-full h-full">
          {" "}
          <div className="flex flex-col items-center sm:items-start justify-center gap-4">
            <h1 className="text-3xl md:text-4xl lg:text-6xl text-[#1F1D8B] font-extrabold max-w-[15rem] md:max-w-[20rem] lg:max-w-[30rem] !leading-snug">
              YOU DREAM IT WE BUILD IT
            </h1>
            <h3 className="text-lg font-medium text-[#1F1D8B]">
              Constructing your dream vision
            </h3>
            {/* <Link
              href="/"
              className="text-sm text-[#1F1D8B] font-semibold border-2 border-[#1F1D8B] px-8 py-3 mt-2 hover:bg-[#1F1D8B] hover:text-white transition-all"
            >
              Learn more
            </Link> */}
          </div>
          <div className="flex flex-col flex-wrap flex-1 sm:h-full items-center justify-center md:w-min-[10rem] max-w-[]">
            <Image src="/sadeem.svg" alt="" width={300} height={300} className="min-w-[10rem] md:w-min-[10rem]"/>

            <Image src="/ro2ya.png" alt="" width={400} height={400} className="max-w-[10rem] xl:max-w-none md:w-min-[10rem]"/>
          </div>
        </div>
        {/* <Image
          src="/.jpg"
          alt=""
          width={1000}
          height={1000}
          className="w-full h-screen"
        /> */}
      </div>
      <Growth />
      <div className="my-20">
        <h1 className="text-5xl font-bold text-center mb-14">Our Services</h1>
        <div className="flex flex-wrap justify-center gap-6 sm:px-20">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              src={service.src}
              name={service.name}
            />
          ))}
        </div>
      </div>
      <Slider/>
      <About />
      <Saftey />
    </main>
  );
}
