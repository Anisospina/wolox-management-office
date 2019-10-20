import {mirage, catedBlue, gallery, white, bombay, outerSpace} from '@constants/colors';
import {refRatioScale, isIos} from '@constants/platform';
import {
  MARGIN_HALF_PADDING,
  MARGIN_PADDING_12,
  MARGIN_PADDING_TRIPLE,
  MARGIN_PADDING,
} from '@constants/dimensions';
import {fontSizes, fontWeights, fontCera} from '@constants/fonts';

const SIZE_CIRCLE = isIos ? refRatioScale(34) : MARGIN_PADDING_TRIPLE;
const ZERO = refRatioScale(0);

export const myTheme = {
  calendarBackground: 'transparent',
  textDisabledColor: bombay,
  todayTextColor: '#00adf5',
  'stylesheet.day.period': {
    wrapper: {
      alignItems: 'center',
      alignSelf: 'stretch',
      paddingBottom: refRatioScale(10),
    },
    text: {
      marginTop: isIos ? MARGIN_PADDING : MARGIN_HALF_PADDING,
      fontSize: fontSizes.SMALL,
      fontFamily: fontCera.REGULAR,
      fontWeight: fontWeights.NORMAL,
      color: mirage,
      marginBottom: ZERO,
      paddingBottom: isIos ? ZERO : MARGIN_HALF_PADDING,
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
      fontFamily: fontCera.REGULAR,
      fontWeight: fontWeights.SEMI_BOLD,
    },
    monthText: {
      fontSize: fontSizes.MEDIUM,
      fontFamily: fontCera.REGULAR,
      fontWeight: fontWeights.SEMI_BOLD,
      color: outerSpace,
      margin: ZERO,
      padding: 0,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: refRatioScale(5),
      alignItems: 'center',
    },
  },
};
