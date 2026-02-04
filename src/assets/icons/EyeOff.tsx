import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEyeOff = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
    >
      <path d="M19.959 7.116c1.361 1.249 2.518 2.812 3.402 4.599a.64.64 0 0 1 0 .569c-2.326 4.703-6.543 7.847-11.362 7.847-1.475 0-2.893-.294-4.219-.838M5.768 18.232c-2.116-1.381-3.892-3.443-5.129-5.948a.64.64 0 0 1 0-.569C2.964 7.012 7.181 3.868 12 3.868c2.254 0 4.373.686 6.232 1.9" />
      <path d="M15.967 11.109q.098.43.099.891a4.065 4.065 0 0 1-4.957 3.967M9.125 14.875a4.065 4.065 0 1 1 5.751-5.751" />
    </g>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="m.5 23.5 23-23"
    />
  </svg>
);
export default SvgEyeOff;
