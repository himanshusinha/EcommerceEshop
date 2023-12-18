import {StyleSheet} from 'react-native';
import {moderateScale} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    marginTop: moderateScale(10),
    backgroundColor: colors.white,
    marginHorizontal: moderateScale(20),
    shadowOffset: {width: 0, height: 1},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: 'center',
    padding: moderateScale(10),
    elevation: 5,
  },
  image: {
    width: moderateScale(80),
    height: moderateScale(80),
    marginRight: moderateScale(10),
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  btnContainer: {paddingHorizontal: moderateScale(20)},
  btnStyle: {
    width: '100%',
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
    bottom: moderateScale(40),
  },
  cartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(22),
    marginBottom: moderateScale(30),
    padding: moderateScale(20),
  },
  btnCompStyle: {
    width: moderateScale(40),
    height: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartContainer: {
    justifyContent: 'space-between',
    flex: 0.70,
    width: '50%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnCountStyle: {marginHorizontal: moderateScale(2)},
});
export default styles;
