import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSend = ({
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
      d="M23.008.537.687 11.698a.34.34 0 0 0 .044.625l8.049 2.683a.34.34 0 0 1 .214.214l2.683 8.049a.34.34 0 0 0 .625.044L23.463.992a.34.34 0 0 0-.455-.455ZM8.941 15.059 23.399.601"
    />
  </svg>
);
export default SvgSend;
