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
  },
});
export default styles;
