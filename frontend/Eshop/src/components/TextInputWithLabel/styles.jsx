import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {
  moderateScale,
  moderateScaleVertical,
  scale,
} from '../../styles/responsiveSize';
const styles = StyleSheet.create({
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    borderRadius: moderateScale(4),
    fontSize: scale(12),
    backgroundColor: colors.white,
  },
  inlineStyle: {
    fontSize: scale(16),
    color: colors.blackOpacity80,
    flex: 1,
  },
  labelTextStyle: {
    fontSize: scale(14),
    color: colors.blackOpacity50,
  },
  flexView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default styles;
