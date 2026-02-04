import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogout = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="logout_svg__Warstwa_2"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <style>
        {
          ".logout_svg__st0{fill:none;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10}"
        }
      </style>
    </defs>
    <g id="logout_svg__Warstwa_3">
      <path
        d="M12 23.5H1.2c-.4 0-.7-.3-.7-.6V1.1c0-.4.3-.6.7-.6H12M6.3 12.1h17.2M17.9 17.8l5.4-5.4c.2-.2.2-.5 0-.6l-5.4-5.4"
        className="logout_svg__st0"
      />
    </g>
  </svg>
);
export default SvgLogout;
