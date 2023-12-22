import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import {moderateScale, verticalScale} from '../../../styles/responsiveSize';
const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 10,
    padding: 10,
    backgroundColor: '#e6e6e6',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  selectedListItem: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    paddingHorizontal: 10,
    marginHorizontal: 8,
    marginVertical: 8,
    height: 40,
    borderWidth: 0.7,
    borderColor: '#e6e6e6',
    fontSize: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.themeColor,
  },
  itemSelected: {
    color: colors.BLACK,
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemSelectedText: {
    fontSize: 14,
    color: colors.WHITE,
  },
  categoriesContainer: {
    flexDirection: 'row',
  },
  categoryView: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  container: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#cfcfcf',
    backgroundColor: colors.WHITE,
    borderRadius: 20,
    marginHorizontal: 30,
    width: Dimensions.get('window').width / 2,
    height: moderateScale(340),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  innerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  titleName: {
    fontSize: 18,
    padding: 10,
    color: colors.BLACK,
  },
  mainTitleAddress: {
    fontSize: 18,
    padding: 20,
    color: colors.BLACK,
  },
  maintitleAddress: {
    fontSize: 18,
    padding: 20,
    color: colors.BLACK,
  },
  titlePrice: {
    fontSize: 16,
    padding: 10,
    color: colors.BLACK,
  },
  imageContainer: {
    alignItems: 'flex-end',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 200,
    height: 200,
    marginStart: 140,
    marginTop: 150,
  },
  btnCart: {
    backgroundColor: colors.themeColor,
    height: moderateScale(40),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: verticalScale(68),
    width: '100%',
    borderWidth: 1,
    borderColor: '#cfcfcf',
  },
  titleCart: {
    fontSize: 16,
    color: colors.WHITE,
    fontWeight: 'bold',
  },
  carouselContainer: {
    width: Dimensions.get('window').width,
    height: 250,
  },
  containerOrder: {
    marginVertical: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#cfcfcf',
    borderRadius: 20,
    shadowColor: '#000',
    marginHorizontal: 20,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  emptyList: {
    height: Dimensions.get('window').height / 1.3,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  emptyTitle: {
    fontSize: 18,
    color: colors.BLACK,
    alignSelf: 'center',
  },
  cardContainer: {
    backgroundColor: colors.color2,
    elevation: 5,
    margin: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },
  cardText: {
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  containerStyle: {
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
  },

  imageContainerStyle: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  priceContainerStyle: {
    marginLeft: 20,
    width: 80,
  },

  nameContainerStyle: {
    width: 100,
  },

  categoryContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  stockContainerStyle: {
    width: 70,
    marginRight: 20,
  },
});

export default styles;
