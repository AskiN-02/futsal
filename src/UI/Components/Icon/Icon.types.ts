export type IconType = {
  size?: number;
  // src: React.SVGProps<SVGSVGElement> & SVGRProps; //dobre
  src: any;
  color?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};
