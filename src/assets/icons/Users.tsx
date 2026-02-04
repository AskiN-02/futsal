import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUsers = ({
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
    <g fill="none" stroke="currentColor" strokeLinecap="round">
      <ellipse cx={12} cy={9.971} strokeMiterlimit={10} rx={4.065} ry={4.059} />
      <path
        strokeLinejoin="round"
        d="M6.25 19.075c1.47 1.47 3.503 2.379 5.75 2.379s4.279-.909 5.749-2.379h0a3.365 3.365 0 0 0-3.368-3.363H9.618a3.366 3.366 0 0 0-3.368 3.363"
      />
    </g>
    <g fill="none" stroke="currentColor" strokeLinecap="round">
      <path
        strokeMiterlimit={10}
        d="M7.948 10.293a4.063 4.063 0 0 1-5.762-3.689 4.06 4.06 0 0 1 4.065-4.059 4.064 4.064 0 0 1 4.053 3.738"
      />
      <path
        strokeLinejoin="round"
        d="M8.706 12.347h-.002q-.035-.003-.072-.002H3.869A3.367 3.367 0 0 0 .5 15.709a8.11 8.11 0 0 0 5.751 2.379q.074 0 .148-.002M11.998 15.712 12 15.71c0-.623-.169-1.206-.467-1.706"
      />
    </g>
    <g fill="none" stroke="currentColor" strokeLinecap="round">
      <path
        strokeMiterlimit={10}
        d="M16.053 10.293a4.063 4.063 0 0 0 5.762-3.689 4.06 4.06 0 0 0-4.065-4.059 4.064 4.064 0 0 0-4.053 3.738"
      />
      <path
        strokeLinejoin="round"
        d="M15.296 12.347h.002q.035-.003.07-.002h4.764c.93 0 1.772.377 2.382.986s.987 1.45.987 2.379a8.1 8.1 0 0 1-5.749 2.379q-.076 0-.15-.002M12.002 15.712 12 15.71c0-.623.169-1.206.467-1.706"
      />
    </g>
  </svg>
);
export default SvgUsers;
