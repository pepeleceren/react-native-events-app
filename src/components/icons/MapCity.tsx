import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgMapCity = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="black"
    viewBox="0 0 21 21"
    className=""
    {...props}>
    <Path d="M19.734.71c.287 0 .521.105.703.313a.892.892 0 0 1 .313.704v15.742c0 .468-.208.781-.625.937l-5.508 2.227c-.078.052-.195.078-.351.078-.157 0-.274-.013-.352-.04L7.313 18.29l-5.157 2.344c-.078.052-.208.078-.39.078a1.09 1.09 0 0 1-.743-.273.952.952 0 0 1-.273-.704V4.227c0-.417.195-.717.586-.899l5.508-2.5a.754.754 0 0 1 .39-.117c.079 0 .196.026.352.078l6.601 2.344L19.345.828a.754.754 0 0 1 .39-.117ZM8.25 16.532l5 1.758V4.93l-5-1.796V16.53Zm-5.508 1.64 3.516-1.6V3.288L2.742 4.852v13.32ZM18.758 3.29l-3.516 1.563V18.25l3.516-1.445V3.289Z" />
  </Svg>
);
export default SvgMapCity;
