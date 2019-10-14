import {StyleSheet} from 'react-native';
import {mirage, catedBlue, gallery, white} from '@constants/colors';
import {refRatioScale, isIos} from '@constants/platform';
import {fontSizes, fontWeights, Roboto} from '@constants/fonts';
import {
  MARGIN_HALF_PADDING,
  MARGIN_PADDING_12,
  MARGIN_PADDING_TRIPLE,
  MARGIN_PADDING,
} from '@constants/dimensions';

const SIZE_CIRCLE = isIos ? refRatioScale(34) : MARGIN_PADDING_TRIPLE;
const ZERO = refRatioScale(0);
const ONE = refRatioScale(1);

export const myTheme = {
  calendarBackground: 'transparent',
  'stylesheet.day.period': {
    wrapper: {
      alignItems: 'center',
      alignSelf: 'stretch',
      paddingBottom: refRatioScale(10),
    },
    base: {
      width: SIZE_CIRCLE,
      alignItems: 'center',
      height: SIZE_CIRCLE,
    },
    text: {
      marginTop: isIos ? MARGIN_PADDING : MARGIN_HALF_PADDING,
      fontSize: fontSizes.SMALL,
      fontFamily: Roboto,
      fontWeight: fontWeights.NORMAL,
      color: mirage,
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
    monthView: {
      backgroundColor: white,
      paddingHorizontal: refRatioScale(20),
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      paddingVertical: refRatioScale(15),
    },
  },
  'stylesheet.calendar.header': {
    week: {
      marginTop: 3,
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderBottomWidth: 1,
      borderBottomColor: gallery,
      paddingHorizontal: refRatioScale(20),
      paddingVertical: refRatioScale(5),
      backgroundColor: white,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    dayHeader: {
      marginVertical: MARGIN_PADDING_12,
      width: SIZE_CIRCLE,
      color: catedBlue,
      fontSize: fontSizes.XSMALL,
      textAlign: 'center',
      fontFamily: Roboto,
      fontWeight: fontWeights.SEMI_BOLD,
    },
    monthText: {
      fontSize: fontSizes.MEDIUM,
      fontFamily: Roboto,
      fontWeight: fontWeights.BOLD,
      color: mirage,
      margin: ZERO,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: refRatioScale(10),
      paddingBottom: refRatioScale(10),
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
