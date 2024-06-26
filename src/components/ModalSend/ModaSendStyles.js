import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';
import {Platform} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  modal: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  list: {
    display: 'flex',
    padding: 10,
  },
  listTitle: {
    color: AppStyles.colour.backgroundColor,
    fontSize: 25,
    fontFamily: 'Roboto-Regular',
    marginBottom: 20,
  },
  listText: {
    color: AppStyles.colour.backgroundColor,
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },
  listbtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    height: 50,
    borderRadius: 10,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  btnBuy: {
    color: AppStyles.colour.backgroundColor,
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    textTransform: 'uppercase',
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
