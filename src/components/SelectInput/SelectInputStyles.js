import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';

const {width: screenWidth} = Dimensions.get('window');
const itemWidth = screenWidth / 1.4;

const styles = StyleSheet.create({
  selectTitle: {
    color: AppStyles.colour.primary,
    fontSize: 15,
    marginBottom: 15,
    fontFamily: 'Roboto-Regular',
    fontWeight: 'bold',
  },
  dropdown: {
    height: 50,
    borderColor: '#989898',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  placeholderStyle: {
    fontSize: 16,
    borderRadius: 5,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: 39,
    height: 39,
    backgroundColor: AppStyles.colour.font,
    borderRadius: 20,
    marginLeft: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  items: {
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: AppStyles.colour.gray,
    width: itemWidth,
  },
  // 'items:last-child': {
  //   borderBottomWidth: 0,
  // },
  title: {
    color: AppStyles.colour.font,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    marginTop: 10,
  },
  text: {
    color: AppStyles.colour.gray,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    marginBottom: 10,
  },
  titleAmount: {
    color: AppStyles.colour.font,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    marginTop: 10,
  },
  /////////////////////
  // textConfirm: {
  //   marginTop: -15,
  //   marginBottom: 20,
  //   color: 'red',
  //   marginLeft: 10,
  //   fontSize: 12,
  // },
});
export default styles;
