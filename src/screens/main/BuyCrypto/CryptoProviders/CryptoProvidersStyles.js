import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';

const {width: screenWidth} = Dimensions.get('window');
const itemWidth = screenWidth / 1.4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colour.backgroundColor,
  },
  btn: {
    backgroundColor: AppStyles.colour.backgroundColor,
    height: 60,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: AppStyles.colour.gray,
  },
  btnTitle: {
    color: AppStyles.colour.font,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  btnCoins: {
    color: AppStyles.colour.font,
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
  },
  imageBox: {
    width: 39,
    height: 39,
    color: AppStyles.colour.backgroundColor,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginLeft: 10,

    // borderWidth: 1,
  },
  image: {
    width: 30,
    height: 30,
  },
  ////////////////////////
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: AppStyles.colour.gray,
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
    width: itemWidth,
  },
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
});
export default styles;
