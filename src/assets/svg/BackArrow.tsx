import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const BackArrow = (props: SvgProps) => (
  <Svg
    width={20}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6 1 1 6l5 5"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1 6h8c5.523 0 10 4.477 10 10v1"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default BackArrow;
