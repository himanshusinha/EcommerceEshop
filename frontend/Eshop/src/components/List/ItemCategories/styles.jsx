import {moderateScale} from '../../../styles/responsiveSize';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    borderWidth: 1,
  },
  container: {marginStart: moderateScale(20)},
});
export default styles;
