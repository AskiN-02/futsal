import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPrint = ({
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
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M23.5 13.966v6.623c0 .591-.445 1.071-.994 1.071h-2.375v-.77c0-.591-.445-1.071-.994-1.071H4.862c-.549 0-.994.479-.994 1.071v.77H1.494c-.549 0-.994-.479-.994-1.071v-6.623c0-.591.445-1.071.994-1.071h21.013c.549 0 .994.479.994 1.071Z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M20.132 21.659v.77c0 .591-.445 1.071-.994 1.071H4.862c-.549 0-.994-.479-.994-1.071v-.77M4.868.5h14.264a1 1 0 0 1 1 1v11.395H3.868V1.5a1 1 0 0 1 1-1Z"
    />
  </svg>
);
export default SvgPrint;
