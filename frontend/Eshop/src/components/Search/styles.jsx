import {Platform, StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {moderateScale} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    borderWidth: moderateScale(1),
    borderColor: colors.blackOpacity30,
    height: 50,
    marginHorizontal: moderateScale(20),
    borderRadius: moderateScale(10),
    marginVertical: moderateScale(10),
    paddingStart: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    width: moderateScale(25),
    height: moderateScale(25),
  },
  input: {
    width: '90%',
    paddingStart: moderateScale(10),
  },
});

export default styles;
