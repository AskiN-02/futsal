import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRefresh = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="refresh_svg__Warstwa_2"
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
          ".refresh_svg__st0{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>
    <path
      d="M2.582 17.225a10.9 10.9 0 0 1-1.237-6.702c.801-5.939 6.22-10.1 12.104-9.293a10.67 10.67 0 0 1 6.067 2.993M21.418 6.748a10.9 10.9 0 0 1 1.237 6.702c-.8 5.94-6.219 10.101-12.103 9.293a10.67 10.67 0 0 1-6.067-2.993M15.89 4.947l3.744-.668M18.973.5l.661 3.779M8.199 19.662H4.397M4.397 23.5v-3.838"
      className="refresh_svg__st0"
    />
  </svg>
);
export default SvgRefresh;
