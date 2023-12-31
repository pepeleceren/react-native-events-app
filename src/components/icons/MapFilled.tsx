import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgMapFilled = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="black"
    viewBox="0 0 17 21"
    className=""
    {...props}>
    <Path d="M8.375.75a8.17 8.17 0 0 1 3.203.625c.99.417 1.85.99 2.578 1.719a7.987 7.987 0 0 1 1.719 2.578 7.69 7.69 0 0 1 .625 3.086 9.478 9.478 0 0 1-.664 3.437 15.365 15.365 0 0 1-1.758 3.282 18.912 18.912 0 0 1-2.383 2.812c-.885.86-1.77 1.602-2.656 2.227a.966.966 0 0 1-.351.195 1.281 1.281 0 0 1-.626 0 .966.966 0 0 1-.351-.195 22.31 22.31 0 0 1-2.656-2.227 20.882 20.882 0 0 1-2.422-2.812 16.446 16.446 0 0 1-1.719-3.282A9.478 9.478 0 0 1 .25 8.758a7.69 7.69 0 0 1 .625-3.086c.417-.99.99-1.85 1.719-2.578a7.987 7.987 0 0 1 2.578-1.719A8.17 8.17 0 0 1 8.375.75Zm0 4.61c-1.042 0-1.914.35-2.617 1.054-.677.677-1.016 1.537-1.016 2.578 0 1.042.339 1.914 1.016 2.617.703.678 1.575 1.016 2.617 1.016s1.901-.338 2.578-1.016c.703-.703 1.055-1.575 1.055-2.617 0-1.041-.352-1.9-1.055-2.578-.677-.703-1.536-1.055-2.578-1.055Z" />
  </Svg>
);
export default SvgMapFilled;
