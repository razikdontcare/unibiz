import * as React from "react";
import { SVGProps } from "react";
const TrashIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M33.25 12L31.7327 33.2485C31.6699 34.1315 31.2748 34.9579 30.6269 35.5613C29.9791 36.1646 29.1268 36.5 28.2415 36.5H13.7585C12.8732 36.5 12.0209 36.1646 11.373 35.5613C10.7252 34.9579 10.3301 34.1315 10.2673 33.2485L8.75 12M17.5 19V29.5M24.5 19V29.5M26.25 12V6.75C26.25 6.28587 26.0656 5.84075 25.7374 5.51256C25.4092 5.18437 24.9641 5 24.5 5H17.5C17.0359 5 16.5908 5.18437 16.2626 5.51256C15.9344 5.84075 15.75 6.28587 15.75 6.75V12M7 12H35"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default TrashIcon;
