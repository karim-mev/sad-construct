import { SVGProps } from "react";

export function ReadMore(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m7.45 17.45l-1.4-1.4L9.075 13H2v-2h7.075L6.05 7.95l1.4-1.4L12.9 12l-5.45 5.45ZM13 17v-2h9v2h-9Zm0-8V7h9v2h-9Zm3 4v-2h6v2h-6Z"
      ></path>
    </svg>
  );
}
