import * as React from "react";
import { SVGProps } from "react";
const LogoutIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 21.0518H5C4.46957 21.0518 3.96086 20.841 3.58579 20.466C3.21071 20.0909 3 19.5822 3 19.0518V5.05176C3 4.52132 3.21071 4.01262 3.58579 3.63754C3.96086 3.26247 4.46957 3.05176 5 3.05176H9"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 17.0518L21 12.0518L16 7.05176"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 12.0518H9"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default LogoutIcon;
