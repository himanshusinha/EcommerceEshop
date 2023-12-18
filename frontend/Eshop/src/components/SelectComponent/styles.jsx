import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {moderateScale} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    justifyContent: 'center',
    backgroundColor: colors.white, // Set your desired background color
    marginHorizontal: moderateScale(40),
    alignItems: 'center',
    flex: 1,
  },
  heading: {
    fontSize: moderateScale(20),
    marginVertical: moderateScale(10),
    fontWeight: 'bold',
  },
  text: {
    fontSize: moderateScale(16),
    marginVertical: moderateScale(8),
  },
});

export default styles;
