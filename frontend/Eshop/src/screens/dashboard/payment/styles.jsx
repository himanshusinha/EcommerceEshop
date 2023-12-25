import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    padding: 30,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
  },

  radioStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  radioStyleText: {
    fontWeight: '600',
    fontSize: 18,
    textTransform: 'uppercase',
    color: colors.BLACK,
  },
  btn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    margin: 10,
    padding: 5,
  },
});
export default styles;
