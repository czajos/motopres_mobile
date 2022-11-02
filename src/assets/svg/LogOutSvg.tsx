import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const LogOutSvg = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13.333 10.833V9.167h-7.5v-2.5L1.667 10l4.166 3.333v-2.5h7.5Z"
      fill="#6A6868"
    />
    <Path
      d="M16.667 2.5h-7.5c-.92 0-1.667.748-1.667 1.667V7.5h1.667V4.167h7.5v11.666h-7.5V12.5H7.5v3.333c0 .92.748 1.667 1.667 1.667h7.5c.919 0 1.666-.747 1.666-1.667V4.167c0-.92-.747-1.667-1.666-1.667Z"
      fill="#6A6868"
    />
  </Svg>
)

export default LogOutSvg
