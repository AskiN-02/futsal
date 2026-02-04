import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSettings = ({
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
      strokeLinejoin="round"
      d="M22.35 13.413c-1.064-.628-1.064-2.197 0-2.825l.831-.49a.66.66 0 0 0 .234-.89l-3.341-5.915a.63.63 0 0 0-.87-.239l-.832.491c-1.064.628-2.394-.157-2.394-1.413v-.981A.644.644 0 0 0 15.342.5H8.659a.643.643 0 0 0-.636.651v.981c0 1.256-1.33 2.04-2.394 1.413l-.832-.491a.63.63 0 0 0-.87.239L.585 9.208a.66.66 0 0 0 .234.89l.831.49c1.064.628 1.064 2.197 0 2.825l-.831.49a.66.66 0 0 0-.234.89l3.341 5.915a.63.63 0 0 0 .87.239l.832-.491c1.064-.628 2.394.157 2.394 1.413v.981c0 .359.285.651.636.651h6.683a.643.643 0 0 0 .636-.651v-.981c0-1.256 1.33-2.04 2.394-1.413l.832.491a.63.63 0 0 0 .87-.239l3.341-5.915a.66.66 0 0 0-.234-.89l-.831-.49Z"
    />
    <ellipse
      cx={12}
      cy={12}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      rx={3.978}
      ry={4.066}
    />
  </svg>
);
export default SvgSettings;
