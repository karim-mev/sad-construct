interface StatsType {
  num: string;
  name: string;
}

export default function Stats({ num, name }: StatsType) {
  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-4xl sm:text-6xl font-bold">{num}</h2>
      <h4 className="text-base sm:text-xl font-semibold">{name}</h4>
    </div>
  );
}
