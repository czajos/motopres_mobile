import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const ArrowUpSvg = (props: SvgProps) => (
  <Svg
    width={18}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.045 9.384a1.25 1.25 0 0 0 1.768 0L9 3.196l6.188 6.188a1.25 1.25 0 0 0 1.767-1.768L9.884.545a1.25 1.25 0 0 0-1.768 0L1.045 7.616a1.25 1.25 0 0 0 0 1.768Z"
      fill="#F24E1E"
    />
  </Svg>
)

export default ArrowUpSvg
