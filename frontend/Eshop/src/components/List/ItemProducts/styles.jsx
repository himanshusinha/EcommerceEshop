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
    shadowOffset: {width: 0, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 4,
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
    width: 150,
    height: 180,
    alignSelf: 'center',
    bottom: moderateScale(10),
  },
  title: {
    marginStart: moderateScale(20),
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    bottom: moderateScale(10),
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
