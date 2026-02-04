import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFilter = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="filter_svg__Warstwa_2"
    viewBox="0 0 99.24 106.01"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <style>
        {
          ".filter_svg__st0,.filter_svg__st1{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:3px}.filter_svg__st1{stroke-linecap:round}"
        }
      </style>
    </defs>
    <circle cx={76.624} cy={18.948} r={7.053} className="filter_svg__st0" />
    <circle cx={22.616} cy={53.005} r={7.053} className="filter_svg__st0" />
    <circle cx={66.649} cy={87.062} r={7.053} className="filter_svg__st0" />
    <path
      d="M97.784 18.948H83.677M69.571 18.948H1.456M97.784 87.062H73.705M59.592 87.062H1.456M97.784 53.005H29.669M15.563 53.005H1.456"
      className="filter_svg__st1"
    />
  </svg>
);
export default SvgFilter;
