"use client";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import { companies } from "@/config/services";
import Companies from "../Companies";

export default function Slider() {
  return (
    <div className="mx-10 mb-10">
      <h1 className="text-center text-5xl font-bold mb-10">Partnerships</h1>
      <Glider draggable hasArrows hasDots slidesToShow={5} slidesToScroll={5} className="overflow-hidden">
        {companies.map((sth, index) => (
          <Companies sth={sth} key={index} />
        ))}
    </Glider>
    </div>
  );
}
