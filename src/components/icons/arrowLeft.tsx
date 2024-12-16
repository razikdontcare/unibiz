import * as React from "react";
import { SVGProps } from "react";
const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={20}
    viewBox="0 0 32 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 18L2 10M2 10L10 2M2 10H30"
      stroke="#1486C3"
      strokeWidth={3.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ArrowLeftIcon;
