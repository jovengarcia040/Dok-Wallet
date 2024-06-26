import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';
import {Platform} from 'react-native';

const WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(WIDTH * 0.7);
// const {height: screenHeight} = Dimensions.get('window');
// const modalHeight = screenHeight / 2.5;

const styles = StyleSheet.create({
  infoList: {
    flex: 1,
    padding: 20,
    width: ITEM_WIDTH,
    // height: modalHeight - 120,
    alignItems: 'center',
  },
  infoHeader: {
    flexDirection: 'row',
  },
  titleInfo: {
    color: AppStyles.colour.font,
    fontSize: 25,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
  },
  infoIcon: {
    // borderWidth: 1,
    // borderColor: 'green',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
    borderRadius: 10,
    height: 60,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppStyles.colour.background,
  },
  buttonTitle: {
    color: AppStyles.colour.backgroundColor,
    fontSize: 16,
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
  formInput: {
    width: ITEM_WIDTH - 20,
    height: 50,

    // borderWidth: 1,
    // borderColor: 'green',
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 20,
    backgroundColor: AppStyles.colour.backgroundColor,
  },
  textConfirm: {
    marginTop: -15,
    color: 'red',
    marginLeft: 10,
    fontSize: 12,
  },
  textWarning: {
    marginTop: -15,
    color: 'red',
    fontSize: 15,
  },
});

export default styles;
