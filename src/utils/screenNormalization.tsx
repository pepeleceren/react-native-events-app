import {Dimensions, PixelRatio} from 'react-native';

const referanceScreenWidth: number = 375;
const referanceScreenHeight: number = 812;

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const widthBaseScale = SCREEN_WIDTH / referanceScreenWidth;
const heightBaseScale = SCREEN_HEIGHT / referanceScreenHeight;

function normalize(size: any, based = 'width') {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

//for width  pixel
const widthPixel = (size: any) => {
  return normalize(size, 'width');
};
//for height  pixel
const heightPixel = (size: any) => {
  return normalize(size, 'height');
};
//for font  pixel
const fontPixel = (size: any) => {
  return heightPixel(size);
};
//for Margin and Padding vertical pixel
const pixelSizeVertical = (size: any) => {
  return heightPixel(size);
};
//for Margin and Padding horizontal pixel
const pixelSizeHorizontal = (size: any) => {
  return widthPixel(size);
};

export const ScreenNormalization = {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
};
