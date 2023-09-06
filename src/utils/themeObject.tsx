import {paletteLight, hexToRGBA} from './colorPalettes';
import {ScreenNormalization as screenNormalizer} from './screenNormalization';

const palette = paletteLight;

const themeObject = {
  colors: {
    background: {
      primary: palette.base.white,
      secondary: palette.grey[1],
      tertiary: palette.base.white,
    },
    label: {
      primary: palette.grey[9],
      secondary: palette.grey[7],
      tertiary: hexToRGBA(palette.grey[7], 90),
      quaternary: hexToRGBA(palette.grey[6], 83),
    },
    fill: {
      primary: palette.base.white,
      secondary: hexToRGBA(palette.grey[6], 8),
      tertiary: hexToRGBA(palette.grey[7], 4),
      quaternary: hexToRGBA(palette.grey[7], 10),
    },
    tint: {
      tint: palette.blue[7],
      tint2: palette.blue[8],
      tintTapState: palette.blue[9],
    },
    seperetor: hexToRGBA(palette.grey[6], 37),
    ...palette,
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    title3: {
      fontFamily: 'SF Pro Text',
      fontSize: screenNormalizer.fontPixel(20),
      fontStyle: 'normal',
      fontWeight: '300',
      lineHeight: screenNormalizer.fontPixel(25),
    },
    bodyBold: {
      fontFamily: 'SF Pro Text',
      fontSize: screenNormalizer.fontPixel(17),
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: screenNormalizer.fontPixel(22),
    },
    bodyDefault: {
      fontFamily: 'SF Pro Text',
      fontSize: screenNormalizer.fontPixel(17),
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: screenNormalizer.fontPixel(22),
    },
    subheadDefault: {
      fontFamily: 'SF Pro Text',
      fontSize: screenNormalizer.fontPixel(15),
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: screenNormalizer.fontPixel(20),
    },
    footnoteBold: {
      fontFamily: 'SF Pro Text',
      fontSize: screenNormalizer.fontPixel(13),
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: screenNormalizer.fontPixel(18),
    },
    footnoteDefault: {
      fontFamily: 'SF Pro Text',
      fontSize: screenNormalizer.fontPixel(13),
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: screenNormalizer.fontPixel(18),
    },
  },
};

// export const darkTheme = {
//   ...theme,
//   colors: {
//     ...theme.colors,
//     background: palette.black,
//     foreground: palette.white,
//   },
// };

export default themeObject;
