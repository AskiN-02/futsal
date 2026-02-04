import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAttachment = ({
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
      d="M10.31 18.447a1.69 1.69 0 0 0 3.38 0M6.93 3.868C6.93 2.007 8.443.5 10.31.5s3.38 1.508 3.38 3.368"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M6.93 18.447c0 2.791 2.27 5.053 5.069 5.053s5.071-2.262 5.071-5.053M10.31 7.236v11.212M13.69 18.448V3.868M6.93 3.868v14.58M17.07 18.448V3.868"
    />
  </svg>
);
export default SvgAttachment;
