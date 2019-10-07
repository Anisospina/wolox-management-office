import {StyleSheet} from 'react-native';
import {regentGray, tundora, silver} from '@constants/colors';
import {refRatioScale, isIos} from '@constants/platform';
import {fontSizes, Roboto} from '@constants/fonts';
import {
  MARGIN_HALF_PADDING,
  MARGIN_PADDING,
  MARGIN_PADDING_12,
  MARGIN_PADDING_TRIPLE,
} from '@constants/dimensions';

const SIZE_CIRCLE = isIos ? refRatioScale(34) : MARGIN_PADDING_TRIPLE;
const ZERO = refRatioScale(0);
const ONE = refRatioScale(1);

export const myTheme = {
  'stylesheet.day.period': {
    wrapper: {
      alignItems: 'center',
      alignSelf: 'stretch',
    },
    base: {
      width: SIZE_CIRCLE,
      alignItems: 'center',
      height: SIZE_CIRCLE,
    },
    text: {
      marginTop: isIos ? MARGIN_PADDING : MARGIN_HALF_PADDING,
      fontSize: fontSizes.XSMALL,
      fontFamily: Roboto,
      // fontWeight: fontWeights.NORMAL,
      color: regentGray,
      marginBottom: ZERO,
      paddingBottom: isIos ? ZERO : MARGIN_HALF_PADDING,
    },
    fillers: {
      position: 'absolute',
      height: SIZE_CIRCLE,
      flexDirection: 'row',
      left: ZERO,
      right: ZERO,
    },
    leftFiller: {
      height: SIZE_CIRCLE,
      flex: ONE,
    },
    rightFiller: {
      height: SIZE_CIRCLE,
      flex: ONE,
    },
  },
  'stylesheet.calendar.main': {
    week: {
      marginVertical: ZERO,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  },
  'stylesheet.calendar.header': {
    dayHeader: {
      marginVertical: MARGIN_PADDING_12,
      width: SIZE_CIRCLE,
      color: silver,
      fontSize: fontSizes.SMALL,
      textAlign: 'center',
      fontFamily: Roboto,
      // fontWeight: isIos ? fontWeights.NORMAL : fontWeights.BOLD,
    },
    monthText: {
      fontSize: fontSizes.XSMALL,
      fontFamily: Roboto,
      // fontWeight: fontWeights.LIGHT,
      color: tundora,
      margin: ZERO,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: MARGIN_PADDING,
      paddingRight: MARGIN_PADDING,
      marginTop: ZERO,
      alignItems: 'center',
    },
  },
};

const styles = StyleSheet.create({
  title: {
    marginBottom: ZERO,
  },
});

export default styles;
