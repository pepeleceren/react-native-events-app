import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgSearch = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="black"
    viewBox="0 0 22 21"
    className=""
    {...props}>
    <Path d="M.624 8.44c0-4.632 3.769-8.4 8.4-8.4 4.632 0 8.4 3.768 8.4 8.4 0 1.95-.68 3.752-1.809 5.171l5.446 5.47c.199.208.307.474.307.78 0 .623-.44 1.121-1.096 1.121-.299 0-.59-.107-.797-.323l-5.47-5.479a8.305 8.305 0 0 1-4.98 1.652c-4.632 0-8.401-3.769-8.401-8.392Zm1.552 0c0 3.769 3.072 6.84 6.848 6.84a6.846 6.846 0 0 0 6.84-6.84c0-3.777-3.063-6.848-6.84-6.848A6.855 6.855 0 0 0 2.176 8.44Z" />
  </Svg>
);
export default SvgSearch;
