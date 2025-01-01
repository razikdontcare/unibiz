import * as React from "react";
import { SVGProps } from "react";
const ShieldIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.5 12L11.5 14L15.5 10M21.118 5.984C17.9561 6.15192 14.8567 5.05861 12.5 2.944C10.1433 5.05861 7.0439 6.15192 3.882 5.984C3.62754 6.96911 3.49918 7.98255 3.5 9C3.5 14.591 7.324 19.29 12.5 20.622C17.676 19.29 21.5 14.592 21.5 9C21.5 7.958 21.367 6.948 21.118 5.984Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ShieldIcon;
