import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgSearch = (props: SvgProps) => (
  <Svg width="24" height="24" className="" fill="black" {...props}>
    <Path d="M.24 7.538A6.86 6.86 0 0 1 7.098.673a6.86 6.86 0 0 1 6.857 6.865 6.583 6.583 0 0 1-1.18 3.785l3.579 3.594c.265.266.406.623.406 1.004 0 .797-.597 1.42-1.41 1.42-.383 0-.748-.133-1.022-.407l-3.61-3.61a6.622 6.622 0 0 1-3.62 1.07A6.858 6.858 0 0 1 .241 7.538Zm2.026 0a4.83 4.83 0 0 0 4.831 4.83 4.837 4.837 0 0 0 4.84-4.83 4.84 4.84 0 0 0-4.84-4.84 4.832 4.832 0 0 0-4.83 4.84Z" />
  </Svg>
);
export default SvgSearch;
