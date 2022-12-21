import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const UndoSvg = (props: SvgProps) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.5 15.313c1.835-2.24 3.464-3.51 4.888-3.813 1.424-.301 2.78-.347 4.068-.136v4.011L16.5 8.829l-6.044-6.204v3.813C8.075 6.456 6.05 7.31 4.384 9c-1.667 1.69-2.629 3.794-2.884 6.313Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </Svg>
)

export default UndoSvg
