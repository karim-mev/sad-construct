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
            At Sadeem, we are passionate about building a better future. With
            expertise in civil, architectural, mechanical, and electrical
            construction, we are dedicated to delivering top-notch solutions
            that stand the test of time. Our commitment to quality
            craftsmanship, innovation, and safety is at the core of everything
            we do. We take pride in our experienced team, cutting-edge
            technology, and a track record of successfully bringing
            architectural visions to life.
          </h3>
        </div>
        <div>
          {/* <h2 className="text-2xl text-gray-900 font-semibold mb-2">
            Our mission
          </h2> */}
          <h3 className="text-gray-900 font-light">
            Whether it is designing iconic structures, renovation of any kind, maintenance or  ensuring the seamless
            integration of mechanical and electrical systems, we approach each
            project with precision and dedication. Sadeem is your trusted
            partner in construction excellence.
          </h3>
        </div>
        {/* <Link
          href="/"
          className="text-base text-slate-800 font-semibold border-2 border-slate-800 px-8 py-3 mt-2 hover:bg-slate-800 hover:text-white transition-all"
        >
          Our Services
        </Link> */}
      </div>
      <div className="flex-1 hidden lg:block my-auto">
        <Image
          src="/about.jpg"
          alt="about us"
          width={1000}
          height={500}
          className="min-w-full"
        />
      </div>
    </div>
  );
}
