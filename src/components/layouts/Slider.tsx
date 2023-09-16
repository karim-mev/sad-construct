"use client";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import { companies } from "@/config/services";
import Companies from "../Companies";

export default function Slider() {
  return (
    <div className="mx-7 sm:mx-10 mb-10">
      <h1 className="text-center text-5xl font-bold mb-10">Business Partner</h1>
      <Glider draggable hasArrows hasDots slidesToShow={2} slidesToScroll={2} responsive={[
    {
      breakpoint: 864,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
  ]} className="overflow-hidden">
        {companies.map((sth, index) => (
          <Companies sth={sth} key={index} />
        ))}
    </Glider>
    </div>
  );
}
