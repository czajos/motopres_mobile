import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"


const LockSvg = (props: SvgProps) => (
  <Svg
  width={20}
  height={20}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <G clipPath="url(#a)">
    <Path
      d="M13.558.145c-1.291 0-2.494.523-3.486 1.513C8.946 2.785 8.431 4.17 8.582 5.65c.113 1.099.614 2.206 1.418 3.197l-5.577 5.577-1.01-1.01c-.492-.495-.9-.085-1.394.41l-.48.504c-.494.492-.902.877-.409 1.37l1.008 1.01-.792.793a1.253 1.253 0 0 0 0 1.78 1.258 1.258 0 0 0 1.78 0l8.75-8.75c.947.593 1.976.912 2.98.912 1.29 0 2.495-.523 3.486-1.514 1.127-1.126 1.641-2.51 1.49-3.99-.136-1.332-.843-2.672-1.971-3.799C16.582.86 15.055.144 13.558.144Zm.048 1.586c1.072 0 2.185.548 3.149 1.514.857.854 1.391 1.848 1.49 2.813.103 1.003-.25 1.958-1.034 2.74-.701.7-1.519 1.057-2.403 1.057-1.073 0-2.183-.549-3.15-1.513-.856-.857-1.39-1.848-1.49-2.813-.101-1.003.25-1.957 1.034-2.74.702-.7 1.52-1.058 2.403-1.058h.001Z"
      fill="#6A6868"
    />
  </G>
  <Defs>
    <ClipPath id="a">
      <Path fill="#fff" d="M0 0h20v20H0z" />
    </ClipPath>
  </Defs>
</Svg>
)

export default LockSvg
