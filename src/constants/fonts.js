// FONTS
// You can add here your custom fonts.
// Example: export const SOURCE_SANS_PRO = 'Source Sans Pro';
// If you want to read more about naming and linking custom fonts,
// this is the original post: https://medium.com/@mehran.khan/ultimate-guide-to-use-custom-fonts-in-react-native-77fcdf859cf4

import {refRatioScale} from './platform';

export const DEFAULT_FONT = 'DEFAULT_FONT';
// WEIGHTS
export const LIGHT = 'Light';
export const REGULAR = 'Regular';
export const SEMIBOLD = 'SemiBold';
export const BOLD = 'Bold';
export const BLACK = 'Black';
// STYLES
export const NORMAL = 'normal';
export const ITALIC = 'Italic';

export const fontSizes = {
  TINY: refRatioScale(10),
  XXSMALL: refRatioScale(12),
  XSMALL: refRatioScale(14),
  SMALL: refRatioScale(16),
  MEDIUM: refRatioScale(18),
  XMEDIUM: refRatioScale(20),
  BIG: refRatioScale(22),
  XBIG: refRatioScale(36),
  XXBIG: refRatioScale(42),
};

export const fontWeights = {
  LIGHT: '300',
  SEMI_BOLD: '500',
  NORMAL: 'normal',
  BOLD: 'bold',
};
