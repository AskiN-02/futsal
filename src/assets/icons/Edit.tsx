import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEdit = ({
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
      strokeMiterlimit={10}
      d="M5.649 21.795a11.7 11.7 0 0 1-3.43-3.46l-.032.032-1.667 4.69a.332.332 0 0 0 .424.424l4.688-1.668.017-.017ZM21.87 5.574a11.75 11.75 0 0 0-3.46-3.428L19.861.695a.665.665 0 0 1 .939 0l2.505 2.504a.663.663 0 0 1 0 .941zM18.41 2.145 2.219 18.335M21.87 5.574 5.649 21.795"
    />
  </svg>
);
export default SvgEdit;
