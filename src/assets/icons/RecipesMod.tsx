import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRecipesMod = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="recipesMod_svg__Warstwa_2"
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
          ".recipesMod_svg__st1{fill:none;stroke:#fefefe;stroke-linecap:round;stroke-miterlimit:10}"
        }
      </style>
    </defs>
    <path
      d="M15.999 10.51c.948 1.623-.241 3.648-2.215 3.711h-.198c-1.974-.062-3.163-2.087-2.215-3.711l.751-1.288h0l1.469-2.516a.11.11 0 0 1 .189 0l1.469 2.514h0L16 10.508z"
      className="recipesMod_svg__st1"
    />
    <rect
      width={19.632}
      height={19.876}
      x={3.868}
      y={0.5}
      className="recipesMod_svg__st1"
      rx={1}
      ry={1}
    />
    <path d="M.5.5v19.632" className="recipesMod_svg__st1" />
    <path
      d="m11.039 23.5-1.563-1.561L7.914 23.5v-3.124h3.125z"
      style={{
        strokeLinejoin: "round",
        fill: "none",
        stroke: "#fefefe",
        strokeLinecap: "round",
      }}
    />
  </svg>
);
export default SvgRecipesMod;
