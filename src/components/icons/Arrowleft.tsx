import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgArrowleft = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="black"
    viewBox="0 0 8 13"
    className=""
    {...props}>
    <Path d="M6.734 0c.287 0 .521.104.704.312a.892.892 0 0 1 .312.704c0 .26-.104.494-.313.703l-4.726 4.53 4.726 4.532c.209.208.313.443.313.703 0 .287-.104.534-.313.742a.952.952 0 0 1-.703.274.904.904 0 0 1-.664-.274L.562 6.954C.355 6.797.25 6.563.25 6.25c0-.287.104-.534.313-.742L6.07.273A.904.904 0 0 1 6.734 0Z" />
  </Svg>
);
export default SvgArrowleft;
