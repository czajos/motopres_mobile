import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"

const EyeOpenSvg = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)" fill="#6A6868">
      <Path d="M18.678 9.739c-1.872-3.461-5.156-5.556-8.79-5.556-3.632 0-6.921 2.095-8.777 5.556L.956 10l.144.267c1.872 3.46 5.156 5.555 8.789 5.555s6.922-2.066 8.789-5.555l.144-.267-.144-.261Zm-8.79 4.944c-3.127 0-6-1.744-7.666-4.683C3.89 7.061 6.762 5.317 9.89 5.317c3.128 0 5.967 1.75 7.661 4.683-1.694 2.939-4.539 4.683-7.661 4.683Z" />
      <Path d="M10.05 6.206a3.811 3.811 0 1 0 .056 7.622 3.811 3.811 0 0 0-.056-7.622Zm0 6.51a2.7 2.7 0 1 1 .056-5.399 2.7 2.7 0 0 1-.056 5.4Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default EyeOpenSvg
