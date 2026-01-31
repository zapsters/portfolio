import { CSSProperties } from "react";

type PixelatedProp = React.PropsWithChildren<{
  style?: CSSProperties | undefined;
}>;

export default function Pixelated({ children, style }: PixelatedProp) {
  return (
    <div className="pixel-corners--wrapper">
      <div className="pixel-corners" style={style}>
        {children}
      </div>
    </div>
  );
}
