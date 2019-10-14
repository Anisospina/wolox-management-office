import {StyleSheet} from 'react-native';
import {green, blue, transparent, aquaHaze} from '@constants/colors';
import {refRatioScale} from '@constants/platform';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: aquaHaze,
  },
  text: {
    fontFamily: 'CeraPro-Regular',
  },
  formElementContainer: {
    backgroundColor: transparent,
    borderBottomColor: blue,
    borderBottomWidth: 1,
  },
  calendar: {
    paddingHorizontal: refRatioScale(30),
    backgroundColor: aquaHaze,
    borderRadius: refRatioScale(10),
  },
  formElement: {
    padding: 3,
    height: 30,
    width: 200,
  },
  formButton: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 3,
    margin: 20,
  },
});
