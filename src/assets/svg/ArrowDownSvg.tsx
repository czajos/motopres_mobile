import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const ArrowDownSvg = (props: SvgProps) => (
  <Svg
    width={18}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.045.616a1.25 1.25 0 0 1 1.768 0L9 6.804 15.188.616a1.25 1.25 0 0 1 1.767 1.768L9.884 9.455a1.25 1.25 0 0 1-1.768 0L1.045 2.384a1.25 1.25 0 0 1 0-1.768Z"
      fill="#F24E1E"
    />
  </Svg>
)

export default ArrowDownSvg
