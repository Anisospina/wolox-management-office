import {
  MIRAGE,
  CATEDBLUE,
  GALLERY,
  WHITE,
  BOMBAY,
  OUTERSPACE,
  CERULEAN,
  TRANSPARENT
} from '@constants/colors';
import {refRatioScale, isIos} from '@constants/platform';
import {
  MARGIN_HALF_PADDING,
  MARGIN_PADDING_DOUBLE,
  MARGIN_PADDING_15,
  MARGIN_PADDING_12,
  MARGIN_PADDING_TRIPLE,
  MARGIN_PADDING
} from '@constants/dimensions';
import {fontSizes, fontWeights, fontCera} from '@constants/fonts';

const SIZE_CIRCLE = isIos ? refRatioScale(34) : MARGIN_PADDING_TRIPLE;
const ZERO = 0;

export const myTheme = {
  calendarBackground: TRANSPARENT,
  textDisabledColor: BOMBAY,
  todayTextColor: CERULEAN,
  'stylesheet.day.period': {
    wrapper: {
      alignItems: 'center',
      alignSelf: 'stretch',
      paddingBottom: MARGIN_PADDING
    },
    text: {
      marginTop: isIos ? MARGIN_PADDING : MARGIN_HALF_PADDING,
      fontSize: fontSizes.SMALL,
      fontFamily: fontCera.REGULAR,
      fontWeight: fontWeights.NORMAL,
      color: MIRAGE,
      marginBottom: ZERO,
      paddingBottom: isIos ? ZERO : MARGIN_HALF_PADDING
    }
  },
  'stylesheet.calendar.main': {
    week: {
      marginVertical: ZERO,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    monthView: {
      backgroundColor: WHITE,
      paddingHorizontal: MARGIN_PADDING_DOUBLE,
      borderBottomLeftRadius: MARGIN_PADDING,
      borderBottomRightRadius: MARGIN_PADDING,
      paddingVertical: MARGIN_PADDING_15
    }
  },
  'stylesheet.calendar.header': {
    week: {
      marginTop: MARGIN_HALF_PADDING,
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderBottomWidth: 1,
      borderBottomColor: GALLERY,
      paddingHorizontal: MARGIN_PADDING_DOUBLE,
      paddingVertical: MARGIN_HALF_PADDING,
      backgroundColor: WHITE,
      borderTopLeftRadius: MARGIN_PADDING,
      borderTopRightRadius: MARGIN_PADDING
    },
    dayHeader: {
      marginVertical: MARGIN_PADDING_12,
      width: SIZE_CIRCLE,
      color: CATEDBLUE,
      fontSize: fontSizes.XSMALL,
      textAlign: 'center',
      fontFamily: fontCera.REGULAR,
      fontWeight: fontWeights.SEMI_BOLD
    },
    monthText: {
      fontSize: fontSizes.MEDIUM,
      fontFamily: fontCera.REGULAR,
      fontWeight: fontWeights.SEMI_BOLD,
      color: OUTERSPACE,
      margin: ZERO,
      padding: ZERO
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: MARGIN_HALF_PADDING,
      alignItems: 'center'
    }
  }
};
