import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEyeOn = ({
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
      d="M23.433 11.712a.66.66 0 0 1 0 .576c-2.341 4.75-6.585 7.924-11.433 7.924S2.908 17.038.567 12.288a.66.66 0 0 1 0-.576C2.908 6.962 7.152 3.788 12 3.788s9.092 3.174 11.433 7.924Z"
    />
    <ellipse
      cx={12}
      cy={12}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      rx={4.091}
      ry={4.106}
    />
  </svg>
);
export default SvgEyeOn;
