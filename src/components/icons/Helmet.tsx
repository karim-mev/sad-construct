import { SVGProps } from "react";

export function Helmet(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 48 48"
      {...props}
    >
      <g
        fill="#2F88FF"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      >
        <path d="M24 11C14.6112 11 7 18.8147 7 28.4545V35H41V28.4545C41 18.8147 33.3888 11 24 11Z"></path>
        <rect width="40" height="6" x="4" y="35"></rect>
        <rect width="6" height="18" x="21" y="6"></rect>
      </g>
    </svg>
  );
}
