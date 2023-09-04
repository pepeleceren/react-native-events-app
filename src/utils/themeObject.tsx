import {paletteLight, hexToRGBA} from './colorPalettes';

const palette = paletteLight;

const theme: any = {
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
    bodyBold: {
      fontFamily: 'SF Pro Text',
      fontSize: 17,
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: 22,
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

export default theme;
