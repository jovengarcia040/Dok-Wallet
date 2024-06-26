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
    height: modalHeight - 60,
    display: 'flex',
    justifyContent: 'center',
  },
  titleInfo: {
    color: AppStyles.colour.font,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  info: {
    color: AppStyles.colour.font,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
  btnList: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: AppStyles.colour.gray,
  },
  learnBorder: {
    borderRightWidth: 1,
    borderRightColor: AppStyles.colour.gray,
  },
  learnBox: {
    width: ITEM_WIDTH / 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  learnText: {
    color: AppStyles.colour.background,
    fontSize: 17,
    fontFamily: 'Roboto-Regular',
  },
});
export default styles;
