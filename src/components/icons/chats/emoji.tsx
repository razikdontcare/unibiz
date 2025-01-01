import * as React from "react";
import { SVGProps } from "react";
const EmojiIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 10.75C9.69036 10.75 10.25 10.1904 10.25 9.5C10.25 8.80964 9.69036 8.25 9 8.25C8.30964 8.25 7.75 8.80964 7.75 9.5C7.75 10.1904 8.30964 10.75 9 10.75Z"
      fill="currentColor"
    />
    <path
      d="M15 10.75C15.6904 10.75 16.25 10.1904 16.25 9.5C16.25 8.80964 15.6904 8.25 15 8.25C14.3096 8.25 13.75 8.80964 13.75 9.5C13.75 10.1904 14.3096 10.75 15 10.75Z"
      fill="currentColor"
    />
    <path
      d="M15.4641 14.25C15.113 14.858 14.6081 15.3629 14 15.714C13.392 16.065 12.7022 16.2498 12.0001 16.2498C11.298 16.2498 10.6083 16.065 10.0002 15.714C9.39216 15.3629 8.88722 14.858 8.53613 14.25"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default EmojiIcon;
