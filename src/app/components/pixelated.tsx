import { CSSProperties } from "react";

type PixelatedProp = React.PropsWithChildren<{
  style?: CSSProperties | undefined;
  className?: string;
}>;

export default function Pixelated({ children, style, className }: PixelatedProp) {
  return (
    <div className={`pixel-corners--wrapper ${className ?? ""}`} style={style}>
      <div className="pixel-corners" style={style}>
        {children}
      </div>
    </div>
  );
}
