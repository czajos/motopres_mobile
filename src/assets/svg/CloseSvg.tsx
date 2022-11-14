import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { getColors } from "../../theme/colors"

const CloseSvg = (props: SvgProps) => (
  <Svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.333 11.833.167 10.667 4.833 6 .167 1.333 1.333.167 6 4.833 10.667.167l1.166 1.166L7.167 6l4.666 4.667-1.166 1.166L6 7.167l-4.667 4.666Z"
      fill={getColors('white')}
    />
  </Svg>
)

export default CloseSvg
