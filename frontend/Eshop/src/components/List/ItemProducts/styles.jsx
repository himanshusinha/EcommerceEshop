import colors from '../../../constants/colors';
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
  container: {
    marginStart: moderateScale(20),
    elevation: 5, // Add elevation for Android
    shadowColor: colors.BLACK, // Add shadow color for iOS
    shadowOffset: {width: 0, height: 2}, // Add shadow offset for iOS
    shadowOpacity: 0.3, // Add shadow opacity for iOS
    shadowRadius: 2, // Add shadow radius for iOS
  },
  itemContainer: {
    height: moderateScale(250),
    width: 200,
    borderColor: colors.blackOpacity30,
    borderWidth: 1,
    marginHorizontal: moderateScale(10),
    borderRadius: moderateScale(20),
    marginTop: moderateScale(10),
    justifyContent: 'center',
  },
  oddBackground: {
    backgroundColor: colors.themeColor,
  },
  evenBackground: {
    backgroundColor: colors.white,
  },
  image: {
    width: moderateScale(100),
    height: moderateScale(100),
    alignSelf: 'center',
  },
  title: {
    marginStart: moderateScale(20),
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    bottom: moderateScale(10),
  },
  sub_title: {
    marginStart: moderateScale(20),
    fontSize: moderateScale(12),
    fontWeight: '400',
    bottom: moderateScale(6),
    color: colors.GRAY,
  },
  evenText: {
    color: colors.black,
  },
  oddText: {
    color: colors.white,
  },
  addToCartButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  addToCartText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default styles;
