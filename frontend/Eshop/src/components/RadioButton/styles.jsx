import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.themeColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.themeColor,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default styles;
