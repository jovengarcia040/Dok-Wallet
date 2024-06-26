import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';

const WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(WIDTH * 0.7);
const {height: screenHeight} = Dimensions.get('window');
const modalHeight = screenHeight / 1.6;

const styles = StyleSheet.create({
  section: {
    paddingVertical: 5,
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  headerBox: {
    paddingLeft: 10,
    width: 160,
  },
  title: {
    color: AppStyles.colour.gray,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    textTransform: 'uppercase',
  },
  titleItem: {
    color: AppStyles.colour.gray,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    marginLeft: 10,
  },
  btn: {
    backgroundColor: AppStyles.colour.backgroundColor,
    width: 100,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  btnTitle: {
    color: AppStyles.colour.background,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  item: {
    color: AppStyles.colour.font,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  itembox: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnSubmit: {
    backgroundColor: AppStyles.colour.background,
    width: ITEM_WIDTH - 10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    alignSelf: 'center',
  },
  btnSubmitTitle: {
    color: AppStyles.colour.backgroundColor,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
});

export default styles;
