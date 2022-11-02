import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const CheckSvg = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m3.333 10 5 5 8.334-10"
      stroke="#0FA958"
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default CheckSvg
