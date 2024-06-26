import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';

const WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(WIDTH * 0.7);
const {height: screenHeight} = Dimensions.get('window');
const modalHeight = screenHeight / 2.5;

const styles = StyleSheet.create({
  infoList: {
    padding: 10,
    width: ITEM_WIDTH,
    height: modalHeight - 120,
    display: 'flex',
    justifyContent: 'center',
  },
  infoBox: {
    textAlign: 'left',
    width: ITEM_WIDTH / 1.2,
    marginBottom: 20,
  },
  titleInfo: {
    color: AppStyles.colour.font,
    fontSize: 22,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
    marginBottom: 10,
  },
  info: {
    color: AppStyles.colour.font,
    fontSize: 15,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
    marginBottom: 10,
  },
  buttonList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: ITEM_WIDTH,
    height: 60,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',

    borderTopWidth: 1,
    borderTopColor: AppStyles.colour.gray,
  },
  buttonTitle: {
    color: AppStyles.colour.background,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    textTransform: 'uppercase',
  },
});

export default styles;
