import {StyleSheet} from 'react-native';
import {green, blue, transparent, aquaHaze} from '@constants/colors';
import {refRatioScale} from '@constants/platform';
import {MARGIN_PADDING, MARGIN_PADDING_DOUBLE} from '@constants/dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: aquaHaze
  },
  formElementContainer: {
    backgroundColor: transparent,
    borderBottomColor: blue,
    borderBottomWidth: 1
  },
  formElement: {
    padding: 3,
    height: refRatioScale(30),
    width: refRatioScale(200)
  },
  formButton: {
    backgroundColor: green,
    padding: MARGIN_PADDING,
    borderRadius: 3,
    margin: MARGIN_PADDING_DOUBLE
  }
});
