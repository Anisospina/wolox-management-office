import {isIos, refRatioScale, IS_SMALL_DEVICE} from './platform';

export const STATUS_BAR = refRatioScale(isIos ? 20 : 0);
export const NAV_BAR_HEIGHT = refRatioScale(isIos ? 110 : 100);

export const MARGIN_HALF_PADDING = refRatioScale(5);
export const MARGIN_PADDING = refRatioScale(10);
export const MARGIN_PADDING_12 = refRatioScale(12);
export const MARGIN_PADDING_15 = refRatioScale(15);
export const MARGIN_PADDING_DOUBLE = refRatioScale(20);
export const MARGIN_PADDING_25 = refRatioScale(25);
export const MARGIN_PADDING_TRIPLE = refRatioScale(30);
export const MARGIN_PADDING_FOURTH = refRatioScale(40);
export const MARGIN_PADDING_FIFTH = refRatioScale(50);
export const MARGIN_PADDING_SIX = refRatioScale(60);
export const MARGIN_PADDING_SEVEN = refRatioScale(70);
export const MARGIN_PADDING_EIGHTH = refRatioScale(80);
export const MARGIN_PADDING_NINE = refRatioScale(90);
export const MARGIN_PADDING_TEN = refRatioScale(100);
export const MARGIN_PADDING_150 = refRatioScale(150);
export const MARGIN_PADDING_250 = refRatioScale(250);

export const GIF_SIZE = refRatioScale(290);
export const IMG_SIZE = IS_SMALL_DEVICE ? refRatioScale(200) : MARGIN_PADDING_250;
export const ICON_SIZE = MARGIN_PADDING_DOUBLE;
export const EXTRA_HEIGHT_FORMS = MARGIN_PADDING;
