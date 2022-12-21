import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const CheckSmallSvg = (props: SvgProps) => (
  <Svg
    width={11}
    height={9}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3.969 8.25.406 4.687l.89-.89L3.97 6.469 9.703.734l.89.891L3.97 8.25Z"
      fill="#0FA958"
    />
  </Svg>
)

export default CheckSmallSvg
