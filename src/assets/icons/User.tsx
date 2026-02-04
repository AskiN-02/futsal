import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUser = ({
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
      fill="currentColor"
      d="M12.001 1c2.831 0 5.133 2.305 5.133 5.138s-2.303 5.138-5.133 5.138-5.133-2.305-5.133-5.138S9.17 1 12.001 1m0-1C8.614 0 5.868 2.748 5.868 6.138s2.746 6.138 6.133 6.138 6.133-2.748 6.133-6.138S15.388 0 12.001 0"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.326 19.903c2.218 2.222 5.285 3.597 8.675 3.597s6.455-1.375 8.673-3.597h0a5.083 5.083 0 0 0-5.081-5.085H8.407a5.083 5.083 0 0 0-5.081 5.085"
    />
  </svg>
);
export default SvgUser;
