import {StyleSheet} from 'react-native';
import {moderateScaleVertical} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    padding: 20,
  },
  userProfileImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userName: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    marginBottom: 5,
  },
  coinsContainer: {
    flexDirection: 'row',
  },
  coinsText: {
    color: '#fff',
    fontFamily: 'Roboto-Regular',
    marginRight: 5,
  },
  coinsIcon: {
    fontSize: 14,
    color: '#fff',
  },
  menuItem: {
    paddingVertical: 15,
  },
  menuItemText: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    marginLeft: 5,
  },
  activeMenuItem: {
    backgroundColor: 'red',
  },
  darkThemeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  darkThemeText: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    marginLeft: 5,
  },
  switch: {
    // Your custom styles for the switch component
  },
});

export default styles;
