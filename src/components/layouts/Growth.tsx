import Stats from "../Stats";

export default function Growth() {
  return (
    <div className="flex flex-col font-serif bg-[#1F1D8B] items-center gap-8 text-white px-10 sm:px-32 py-10">
      <h2 className="text-4xl sm:text-5xl">Grow & Succeed</h2>
      <h3 className="text-3xl text-center leading-10">
        Sadeem construction company for contracting is located in Saudi Arabia
        and it is made for international companies that are looking for
        excellence.
      </h3>
      <div className="flex justify-between w-full">
        <Stats num={"9"} name={"Projects"} />
        <Stats num={"18"} name={"Employees"} />
        <Stats num={"1"} name={"Awards"} />
      </div>
    </div>
  );
}
