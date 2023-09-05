import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgTime = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="black"
    viewBox="0 0 19 21"
    className=""
    {...props}>
    <Path d="M15.75 5.906a8.608 8.608 0 0 1 1.836 2.813A8.121 8.121 0 0 1 18.25 12c0 1.198-.234 2.33-.703 3.398a8.589 8.589 0 0 1-1.875 2.813 8.454 8.454 0 0 1-2.774 1.836 8.362 8.362 0 0 1-3.398.703 8.362 8.362 0 0 1-3.398-.703 8.909 8.909 0 0 1-2.813-1.836 9.491 9.491 0 0 1-1.875-2.813A8.784 8.784 0 0 1 .75 12c0-1.198.221-2.33.664-3.398A8.986 8.986 0 0 1 3.29 5.828a8.589 8.589 0 0 1 2.813-1.875A8.361 8.361 0 0 1 9.5 3.25c1.745 0 3.307.456 4.688 1.367l1.093-1.094a.952.952 0 0 1 .703-.273c.287 0 .521.104.704.313a.892.892 0 0 1 .312.703c0 .286-.091.52-.273.703l-.977.937ZM9.5 18.758a6.7 6.7 0 0 0 2.617-.508 6.93 6.93 0 0 0 2.149-1.445 6.647 6.647 0 0 0 1.445-2.149A6.554 6.554 0 0 0 16.258 12c0-.938-.182-1.81-.547-2.617a6.133 6.133 0 0 0-1.445-2.149 6.133 6.133 0 0 0-2.149-1.445A6.284 6.284 0 0 0 9.5 5.242c-.938 0-1.823.182-2.656.547a6.648 6.648 0 0 0-2.149 1.445A6.929 6.929 0 0 0 3.25 9.383 6.699 6.699 0 0 0 2.742 12c0 .938.17 1.823.508 2.656a7.6 7.6 0 0 0 1.445 2.149 7.602 7.602 0 0 0 2.149 1.445 6.99 6.99 0 0 0 2.656.508Zm3.438-7.344c.286 0 .52.091.703.274a.892.892 0 0 1 .312.703c0 .286-.104.534-.312.742a.952.952 0 0 1-.704.273H9.735a.952.952 0 0 1-.703-.273 1.09 1.09 0 0 1-.273-.742V8.016c0-.287.091-.521.273-.704A.892.892 0 0 1 9.734 7c.287 0 .521.104.704.313a.892.892 0 0 1 .312.703v3.398h2.188ZM6.766 2.742a1.09 1.09 0 0 1-.743-.273.952.952 0 0 1-.273-.703c0-.287.091-.521.273-.704.209-.208.456-.312.743-.312h5.468c.287 0 .521.104.704.313a.892.892 0 0 1 .312.703c0 .286-.104.52-.313.703a.952.952 0 0 1-.703.273H6.766Z" />
  </Svg>
);
export default SvgTime;