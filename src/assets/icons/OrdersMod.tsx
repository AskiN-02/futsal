import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOrdersMod = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="ordersMod_svg__Warstwa_2"
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
          ".ordersMod_svg__st0,.ordersMod_svg__st1{fill:none;stroke:#fff;stroke-miterlimit:10}.ordersMod_svg__st1{stroke-linecap:round}"
        }
      </style>
    </defs>
    <path
      d="M15.601 3.868h3.506a1 1 0 0 1 1 1V22.5a1 1 0 0 1-1 1H4.893a1 1 0 0 1-1-1V4.868a1 1 0 0 1 1-1h3.506"
      className="ordersMod_svg__st0"
    />
    <path
      d="M13.68 2.183C13.68 1.254 12.928.5 12 .5s-1.68.755-1.68 1.683h-.921a1 1 0 0 0-1 1v1.37a1 1 0 0 0 1 1h5.202a1 1 0 0 0 1-1v-1.37a1 1 0 0 0-1-1z"
      className="ordersMod_svg__st0"
    />
    <path d="M7.19 11.675h9.62M7.19 15.741H12" className="ordersMod_svg__st1" />
  </svg>
);
export default SvgOrdersMod;
