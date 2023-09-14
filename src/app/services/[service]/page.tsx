import { Arrow } from "@/components/icons/Arrow";
import { ReadMore } from "@/components/icons/Location";
import { Phone } from "@/components/icons/Phone";
import Image from "next/image";
import Link from "next/link";

export default function Services({ params }: { params: { service: string } }) {
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
            Our skilled team at Sadeem Construction takes immense pride in
            precision and craftsmanship when it comes to laying floors and
            blocks. Whether it's a residential project or a commercial one, we
            use state-of-the-art techniques and top-quality materials to ensure
            durability and perfection. From elegant tile flooring to robust
            concrete block walls, we turn your vision into a solid reality. Your
            satisfaction is our priority, and we're committed to delivering
            projects that stand the test of time.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="flex gap-2 items-center">
          <Phone /> <p>Give us a call and we will take care of it for you!</p>
        </div>
        <div className="flex gap-2 items-center">
          <ReadMore />
          <Link href={`https://sad-construct.vercel.app/services/sth/data/${params.service}`}>
            Interested in what we do?{" "}
            <span className="underline text-blue-500">Learn more</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
