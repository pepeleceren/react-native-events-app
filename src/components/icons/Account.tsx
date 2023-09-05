import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgAccount = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="black"
    viewBox="0 0 22 23"
    className=""
    {...props}>
    <Path d="M10.867 22.314c-5.91 0-10.808-4.897-10.808-10.807C.06 5.588 4.95.69 10.86.69c5.918 0 10.824 4.897 10.824 10.816 0 5.91-4.898 10.807-10.816 10.807Zm0-1.544a9.24 9.24 0 0 0 9.263-9.263 9.243 9.243 0 0 0-9.272-9.264 9.227 9.227 0 0 0-9.247 9.264 9.24 9.24 0 0 0 9.256 9.263Zm-.009-9.562C9.34 11.2 8.12 9.93 8.12 8.22c0-1.61 1.22-2.939 2.74-2.939 1.518 0 2.739 1.328 2.739 2.939 0 1.71-1.22 2.996-2.74 2.988ZM5.911 16.96c-.382 0-.556-.249-.556-.614 0-1.17 1.76-4.266 5.503-4.266 3.752 0 5.512 3.096 5.512 4.266 0 .365-.183.614-.564.614H5.91Z" />
  </Svg>
);
export default SvgAccount;