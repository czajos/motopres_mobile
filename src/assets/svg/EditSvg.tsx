import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const EditSvg = (props: SvgProps) => (
  <Svg
    width={18}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M.25 15.25h17.5v1.25H.25v-1.25ZM14.875 4.625c.5-.5.5-1.25 0-1.75l-2.25-2.25c-.5-.5-1.25-.5-1.75 0L1.5 10v4h4l9.375-9.375ZM11.75 1.5 14 3.75l-1.875 1.875-2.25-2.25L11.75 1.5Zm-9 11.25V10.5L9 4.25l2.25 2.25L5 12.75H2.75Z"
      fill="#fff"
    />
  </Svg>
)

export default EditSvg
