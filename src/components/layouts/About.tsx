import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex bg-gray-100">
      <div className="flex flex-col justify-center items-start gap-10 w-full py-2 xl:py-0 lg:w-1/2 px-10">
        <h1 className="text-4xl text-slate-800 font-extrabold">About us</h1>
        <div>
          {/* <h2 className="text-2xl text-gray-900 font-semibold mb-2">
            Our Vision 
          </h2> */}
          <h3 className="text-gray-900 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            dolorem iusto quos quia nihil quod atque voluptatem velit,
            voluptates, nemo ad praesentium quidem aspernatur! Unde. voluptatem
            velit, voluptates, nemo ad praesentium quidem aspernatur! Unde.
          </h3>
        </div>
        <div>
          {/* <h2 className="text-2xl text-gray-900 font-semibold mb-2">
            Our mission
          </h2> */}
          <h3 className="text-gray-900 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            dolorem iusto quos quia nihil quod atque voluptatem velit,
            voluptates, nemo ad praesentium quidem aspernatur! Unde.
          </h3>
        </div>
        <Link
        href="/"
        className="text-base text-slate-800 font-semibold border-2 border-slate-800 px-8 py-3 mt-2 hover:bg-slate-800 hover:text-white transition-all"
      >
        Our Services
      </Link>
      </div>
      <div className="flex-1 hidden lg:block my-auto">
        <Image src="/about.jpg" alt="about us" width={1000} height={500} className="min-w-full"/>
      </div>
    </div>
  );
}
