import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import colors from '../../constants/colors';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'red',
  },
  innerContainer: {
    backgroundColor: colors.TRANSPARENT,
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalInnerView: {
    backgroundColor: colors.TRANSPARENT,
    flex: 1,
    justifyContent: 'center',
  },
  modalImageContainer: {
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
    height: moderateScale(150),
    marginHorizontal: 8,
    borderRadius: 10,
    marginHorizontal: 20,
    borderColor: 'gray',
  },
  btnCancel: {
    position: 'absolute',
    top: scale(10),
    right: scale(15),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  imageCancel: {
    width: 15,
    height: 15,
    left: moderateScale(8),
  },
  cameraContainer: {
    justifyContent: 'center',
    width: '100%',
    marginStart: 10,
    marginTop: 2,
  },
  btnCamera: {
    flexDirection: 'row',
    bottom: 10,
    marginHorizontal: 20,
  },
  imageCamera: {
    width: 40,
    height: 40,
    tintColor: colors.BLACK,
    top: 15,
  },
  cameraText: {
    color: colors.BLACK,
    fontSize: scale(15),
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,
  },
  gallerybtn: {
    flexDirection: 'row',

    top: 10,
    marginHorizontal: 20,
  },
  galleryImage: {
    width: 40,
    height: 40,
    tintColor: colors.BLACK,
    marginTop: 15,
  },
  galleryText: {
    color: colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,
    fontSize: scale(15),
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: moderateScale(60),
  },
  titleText: {
    color: 'black',
    top: moderateVerticalScale(50),
    fontSize: 14,
    color: colors.PRIMARY_BLACK,
  },
  subTitleText: {
    color: 'black',
    top: moderateVerticalScale(70),
    fontSize: 12,
    color: colors.PRIMARY_BLACK,
  },
  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btnstyle: {
    width: '60%',
    top: moderateScale(5),
  },
  cancelbtnStyle: {
    width: '60%',
    top: moderateScale(5),
  },
  closeIcon: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
});

export default styles;
