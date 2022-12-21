import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const XSvg= (props: SvgProps) => (
  <Svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4 11.875 3.125 11l3.5-3.5-3.5-3.5L4 3.125l3.5 3.5 3.5-3.5.875.875-3.5 3.5 3.5 3.5-.875.875-3.5-3.5-3.5 3.5Z"
      fill="#F24E1E"
    />
  </Svg>
)

export default XSvg
