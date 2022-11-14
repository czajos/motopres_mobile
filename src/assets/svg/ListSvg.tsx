import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const ListSvg = ({color,...props}:{color:string}) => (
  <Svg
    width={18}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.25 11.375a.625.625 0 0 1 .625-.625h11.25a.624.624 0 1 1 0 1.25H5.875a.625.625 0 0 1-.625-.625Zm0-5a.625.625 0 0 1 .625-.625h11.25a.625.625 0 1 1 0 1.25H5.875a.625.625 0 0 1-.625-.625Zm0-5A.625.625 0 0 1 5.875.75h11.25a.625.625 0 1 1 0 1.25H5.875a.625.625 0 0 1-.625-.625ZM1.5 2.625a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm0 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm0 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
      fill={color ? color : "#BA2727"}
    />
  </Svg>
)

export default ListSvg
