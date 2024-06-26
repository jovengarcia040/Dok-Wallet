import {StyleSheet, Dimensions} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import AppStyles from 'assets/AppStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 25,
  },
  inputFrom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: AppStyles.colour.whiteOutline,
  },
  lable: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  amountAvailable: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountAvailableText: {
    marginRight: 5,
    color: AppStyles.colour.gray,
  },
  scurvedIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 22,
  },
  select: {
    position: 'relative',
    borderWidth: 0,
    // marginBottom: 15,
    // width: SCREEN_WIDTH * 0.8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 15,
  },
  selectInput: {
    position: 'absolute',
    top: SCREEN_HEIGHT * 0.07,
    left: -SCREEN_WIDTH * 0.01,
  },
  iconBox: {
    // width: 30,
    // height: 30,
    // color: AppStyles.colour.backgroundColor,
    transform: [{scale: 0.75}],
    backgroundColor: AppStyles.colour.font,
    borderRadius: 20,
    // marginLeft: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // marginRight: 10,
    // marginTop: 10,
    padding: 5,
  },
  coinTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 28,
  },
  picker: {
    width: 1,
  },
  arrow: {
    transform: [{rotate: '90deg'}],
    paddingBottom: 20,
  },
  arrowAmount: {
    paddingLeft: 10,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: AppStyles.colour.gray,
  },
  textValue: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: AppStyles.colour.font,
  },
  button: {
    backgroundColor: AppStyles.colour.background,
    height: 60,
    borderRadius: 10,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: AppStyles.colour.backgroundColor,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  footerText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    color: AppStyles.colour.gray,
    marginRight: 5,
  },
});
export default styles;
