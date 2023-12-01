import {StyleSheet} from 'react-native';
import {moderateScale} from '../../styles/responsiveSize';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    alignItems: 'center',
    height: moderateScale(60),
  },
  titleText: {
    fontSize: moderateScale(20),
  },
  backButtonImage: {
    width: moderateScale(25),
    height: moderateScale(25),
  },
});
export default styles;
