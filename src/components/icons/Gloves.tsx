import { SVGProps } from "react";

export function Gloves(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 48 48"
      {...props}
    >
      <g fill="#FDE047">
        <path d="M27 4H15c-3.771 0-5.657 0-6.828 1.172C7 6.343 7 8.229 7 12v32h28v-7s7 0 7-6v-8c0-6-7-6-7-6v-5c0-3.771 0-5.657-1.172-6.828C32.657 4 30.771 4 27 4Z"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M35 27V17m0 0v-5c0-3.771 0-5.657-1.172-6.828C32.657 4 30.771 4 27 4H15c-3.771 0-5.657 0-6.828 1.172C7 6.343 7 8.229 7 12v32h28v-7s7 0 7-6v-8c0-6-7-6-7-6Zm-21 5V4m7 18V4m7 18V4M12 4h18"
        ></path>
      </g>
    </svg>
  );
}
