import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';

const WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(WIDTH * 0.7);

const styles = StyleSheet.create({
  icon: {
    alignSelf: 'center',
    backgroundColor: 'red',
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: AppStyles.colour.font,
    fontSize: 30,
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
  info: {
    color: AppStyles.colour.gray,
    fontSize: 15,
    marginBottom: 20,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
  },
  span: {
    color: AppStyles.colour.gray,
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    fontWeight: 'bold',
  },
  infoNext: {
    color: AppStyles.colour.gray,
    fontSize: 15,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
  },
  learnText: {
    color: AppStyles.colour.background,
    fontSize: 15,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
    marginBottom: 20,
  },
  infoRed: {
    color: 'red',
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    textAlign: 'left',
  },
  spanRed: {
    color: 'red',
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    fontWeight: 'bold',
  },
  btnVerify: {
    alignSelf: 'center',
    width: ITEM_WIDTH - 40,
    borderRadius: 10,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  verifyTitle: {
    color: AppStyles.colour.backgroundColor,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  btnLater: {
    marginTop: 10,
    alignSelf: 'center',
    width: ITEM_WIDTH - 40,
    borderRadius: 10,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: AppStyles.colour.backgroundColor,
  },
  laterTitle: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
});
export default styles;
