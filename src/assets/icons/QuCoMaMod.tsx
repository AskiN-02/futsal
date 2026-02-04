import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgQuCoMaMod = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="quCoMaMod_svg__Warstwa_2"
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
          ".quCoMaMod_svg__st1{fill:none;stroke:#fff;stroke-linejoin:round;stroke-linecap:round}"
        }
      </style>
    </defs>
    <path
      d="M16.018 1.563A9.2 9.2 0 0 0 11.709.5C6.607.5 2.47 4.63 2.47 9.723a9.21 9.21 0 0 0 3.969 7.576q.002.004.004.004a9.22 9.22 0 0 0 5.108 1.642h.008q.076.002.151.002c.046 0 .096 0 .142-.002h.01a9.2 9.2 0 0 0 5.11-1.638l.006-.004A9.21 9.21 0 0 0 20.485 6.83"
      style={{
        fill: "none",
        stroke: "#fff",
        strokeLinejoin: "round",
      }}
    />
    <path
      d="M6.989 23.5v-3.406H3.638l2.8-2.795s.002.004.004.004a9.22 9.22 0 0 0 5.108 1.642zM19.763 20.094h-3.351V23.5l-4.561-4.555h.01a9.2 9.2 0 0 0 5.11-1.638zM16.399 4.533l1.11 1.108 2.222-2.217"
      className="quCoMaMod_svg__st1"
    />
    <path
      id="quCoMaMod_svg__Warstwa_3"
      d="M14.664 10.106c1.241 2.121-.316 4.765-2.9 4.848l-.13.002q-.065 0-.13-.002c-2.585-.081-4.141-2.726-2.9-4.848l.984-1.681h0l1.923-3.286a.144.144 0 0 1 .248 0l1.922 3.285h0z"
      className="quCoMaMod_svg__st1"
    />
    <ellipse
      cx={18.065}
      cy={4.354}
      className="quCoMaMod_svg__st1"
      rx={3.466}
      ry={3.459}
    />
  </svg>
);
export default SvgQuCoMaMod;
