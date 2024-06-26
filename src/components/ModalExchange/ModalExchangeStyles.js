import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';
import {Platform} from 'react-native';

const WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(WIDTH * 0.7);
const {height: screenHeight} = Dimensions.get('window');
const modalHeight = screenHeight / 2.5;

const styles = StyleSheet.create({
  infoList: {
    padding: 20,
    width: ITEM_WIDTH,
    height: modalHeight - 60,
    display: 'flex',
    justifyContent: 'center',
  },
  titleInfo: {
    color: AppStyles.colour.font,
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    marginBottom: 20,
  },
  info: {
    color: AppStyles.colour.font,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    marginBottom: 25,
  },
  button: {
    alignSelf: 'center',
    width: ITEM_WIDTH - 140,
    borderRadius: 10,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  btnEx: {
    color: AppStyles.colour.backgroundColor,
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: AppStyles.colour.background,
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: 5,
          width: 5,
        },
      },
      android: {
        elevation: 5,
        backgroundColor: AppStyles.colour.background,
      },
    }),
  },
});
export default styles;
