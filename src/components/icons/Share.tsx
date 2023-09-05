import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgShare = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="black"
    viewBox="0 0 20 21"
    className=""
    {...props}>
    <Path d="M16.25 12.75c1.068 0 1.953.365 2.656 1.094.73.703 1.094 1.588 1.094 2.656s-.365 1.953-1.094 2.656c-.703.73-1.588 1.094-2.656 1.094s-1.966-.365-2.695-1.094c-.703-.729-1.055-1.614-1.055-2.656l.04-.39-6.212-3.087A3.695 3.695 0 0 1 3.79 14c-.469 0-.937-.078-1.406-.234a4.457 4.457 0 0 1-1.211-.743 4.612 4.612 0 0 1-.86-1.21A3.805 3.805 0 0 1 0 10.25c0-.573.104-1.094.313-1.563.234-.468.52-.859.859-1.171a3.462 3.462 0 0 1 1.21-.743A3.855 3.855 0 0 1 3.79 6.5c.938 0 1.77.326 2.5.977L12.5 4.352V4c0-1.042.352-1.927 1.055-2.656C14.258.614 15.156.25 16.25.25c1.068 0 1.953.365 2.656 1.094C19.636 2.047 20 2.932 20 4s-.365 1.966-1.094 2.695c-.703.703-1.588 1.055-2.656 1.055-1.25 0-2.266-.508-3.047-1.523l-5.86 2.968c.105.287.157.638.157 1.055 0 .39-.052.742-.156 1.055l5.898 2.93c.755-.99 1.758-1.485 3.008-1.485Zm0-10.508c-.495 0-.912.17-1.25.508-.338.313-.508.73-.508 1.25 0 .495.17.911.508 1.25.338.339.755.508 1.25.508.52 0 .938-.17 1.25-.508.338-.339.508-.755.508-1.25 0-.52-.17-.938-.508-1.25-.313-.339-.73-.508-1.25-.508Zm-12.5 9.766c.52 0 .938-.156 1.25-.469.339-.338.508-.768.508-1.289 0-.52-.17-.938-.508-1.25-.313-.339-.73-.508-1.25-.508s-.95.17-1.29.508c-.312.313-.468.73-.468 1.25s.156.95.469 1.29c.338.312.768.468 1.289.468Zm12.5 6.25c.52 0 .938-.17 1.25-.508.338-.338.508-.755.508-1.25 0-.52-.17-.938-.508-1.25-.313-.338-.73-.508-1.25-.508-.495 0-.912.17-1.25.508-.338.313-.508.73-.508 1.25 0 .495.17.912.508 1.25.338.338.755.508 1.25.508Z" />
  </Svg>
);
export default SvgShare;