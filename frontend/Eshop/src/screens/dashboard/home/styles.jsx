import {StyleSheet} from 'react-native';
import {moderateScale} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';
import {ITEM_WIDTH} from '../../../components/List/ItemProductDetails/ItemProductDetails';

const styles = StyleSheet.create({
  flatListContainer: {},
  listStyle: {paddingHorizontal: moderateScale(10)},
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: colors.themeColor,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  addToCartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.4,
    width: '50%',
    alignItems: 'center',
    marginTop: moderateScale(100),
  },
  container: {
    marginTop: moderateScale(20),
    borderRadius: 8,
    width: ITEM_WIDTH,
    shadowColor: '#000',
    paddingHorizontal: moderateScale(10),
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: moderateScale(200),
  },
  btnCompStyle: {width: 50},
  header: {
    color: '#222',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  btnCountStyle: {
    fontSize: moderateScale(18),
    color: 'black',
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  btnRowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    marginTop: moderateScale(20),
  },
});

export default styles;
