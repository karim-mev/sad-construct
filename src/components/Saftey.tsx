import Image from "next/image";

export default function Saftey() {
  return (
    <div className="flex flex-wrap bg-gray-100">
      <div className="flex flex-col gap-10 w-full lg:w-1/2 px-10 py-20">
        <h1 className="text-5xl text-neutral-700 font-bold">
          Construction Safety:
        </h1>
        <h4 className="font-light">
          We steadfastly adhere to and rigorously enforce stringent safety
          measures for a multitude of compelling reasons. First and foremost,
          our unwavering commitment to safety is centered around the well-being
          of our dedicated team members. We firmly believe that they deserve to
          work in an environment where their safety takes precedence above all
          else.
        </h4>
        <h4 className="font-light">
          Moreover, prioritizing construction safety is not just a matter of
          compliance but a cornerstone of our operational philosophy. It plays
          an instrumental role in ensuring the seamless execution of projects.
          By meticulously adhering to safety protocols, we minimize the risk of
          accidents, injuries, and setbacks, ultimately contributing to the
          timely and successful completion of construction endeavors.
        </h4>
      </div>
      <div className="relative flex-1 w-full hidden lg:block aspect-video">
        <Image src="/safety1.jpg" alt="" fill objectFit="cover" />
      </div>
    </div>
  );
}
