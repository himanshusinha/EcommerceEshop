import {moderateScale, textScale} from '../../styles/responsiveSize';
import colors from '../../constants/colors';
import {StyleSheet} from 'react-native';

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.themeColor,
    height: moderateScale(52),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(16),
  },
  textStyle: {
    color: colors.white,
    fontSize: textScale(16),
  },
});
export default styles;
