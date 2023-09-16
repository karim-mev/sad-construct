import Image from "next/image";

interface CompaniesType {
    sth: string
}

export default function Companies({sth} : CompaniesType) {
  return (
    <div className="">
        <Image src={sth} alt="" width={300} height={100} className="aspect-video"/>
    </div>
  )
}
