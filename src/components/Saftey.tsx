import Image from "next/image";
import { Helmet } from "./icons/Helmet";
import { Gloves } from "./icons/Gloves";
import { Suit } from "./icons/Suit";
import { Goggles } from "./icons/Goggles";
import { Warning } from "./icons/Warning";

export default function Saftey() {
  return (
    <div className="flex flex-wrap bg-gray-200 text-[#1F1D8B]">
      <div className="flex flex-col gap-4 w-full lg:w-1/2 px-10 py-20">
        <h1 className="text-5xl font-bold mb-4">Construction Safety:</h1>
        <div className="flex items-center gap-4">
          <Helmet className="w-" />
          <h4 className="font-light">
            <span className="font-bold">Wearing helmet</span> to Protect head against falling construction elements
          </h4>
        </div>
        <div className="flex items-center gap-4">
          <Gloves className="text-black"/>
          <h4 className="font-light">
            Keep <span className="font-bold text-yellow-400">Safety Gloves</span> for protection against Cut and Abrasions, Heat,
            Chemicals, Etc.
          </h4>
        </div>
        <div className="flex items-center gap-4">
          <Suit />
          <h4 className="font-light">
            Wear <span className="font-bold text-orange-400">High Visibility Clothers</span> for easy to visible on construction site at night.
          </h4>
        </div>
        <div className="flex items-center gap-4">
          <Goggles />
          <h4 className="font-light">
            Wearing <span className="font-bold text-blue-300">Safety Goggles and Boots</span> to prevent eyes & foot on construction site
          </h4>
        </div>
        <div className="flex items-center gap-4">
          <Warning className="text-red-600"/>
          <h4 className="font-light">
            Followrs The <span className="text-red-600 font-bold">Construction Regulatory Sign</span>
          </h4>
        </div>
      </div>
      <div className="relative flex-1 w-full hidden lg:flex flex-wrap aspect-video">
        <div className="relative w-1/2 h-1/2">
          <Image src="/safety1.jpg" alt="" fill objectFit="cover" />
        </div>
        <div className="relative w-1/2 h-1/2">
          <Image src="/safety3.jpg" alt="" fill objectFit="cover" />
        </div>
        <div className="relative w-1/2 h-1/2">
          <Image src="/safety4.jpg" alt="" fill objectFit="cover" />
        </div>
        <div className="relative w-1/2 h-1/2">
          <Image src="/safety5.jpg" alt="" fill objectFit="cover" />
        </div>
      </div>
    </div>
  );
}
