import { CSSProperties } from "react";

type PixelatedProp = React.PropsWithChildren<{
  wrapperStyle?: CSSProperties | undefined;
  style?: CSSProperties | undefined;
}>;

export default function Pixelated({ children, wrapperStyle, style }: PixelatedProp) {
  return (
    <div className="pixel-corners--wrapper" style={wrapperStyle}>
      <div className="pixel-corners" style={style}>
        {children}
      </div>
    </div>
  );
}
