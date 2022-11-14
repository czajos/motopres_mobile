import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { getColors } from "../../theme/colors"

const AddSvg = (props: SvgProps) => (
  <Svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5.167 11.833v-5h-5V5.167h5v-5h1.666v5h5v1.666h-5v5H5.167Z"
      fill={getColors('white')}
    />
  </Svg>
)

export default AddSvg
