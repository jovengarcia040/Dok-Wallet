import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const ITEM_HEIGHT = Math.round(HEIGHT * 0.18);

const styles = StyleSheet.create({
  input: {
    width: WIDTH - 20,
    backgroundColor: AppStyles.colour.backgroundColor,
    borderWidth: 1,
    borderColor: AppStyles.colour.gray,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
    // color: AppStyles.colour.gray,
    fontSize: 18,
  },
  container: {
    flex: 1,
    backgroundColor: AppStyles.colour.backgroundColor,
    alignItems: 'center',

    justifyContent: 'space-between',
  },
  btnList: {
    height: ITEM_HEIGHT,
    width: WIDTH,
    backgroundColor: AppStyles.colour.backgroundColor,
  },
  btnAdd: {
    height: ITEM_HEIGHT / 2,
    width: WIDTH,
    borderBottomWidth: 1,
    borderBottomColor: AppStyles.colour.gray,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  box: {
    marginLeft: 20,
  },
  circle: {
    fill: AppStyles.colour.gray,
  },
  title: {
    color: AppStyles.colour.font,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  text: {
    color: AppStyles.colour.gray,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
});

export default styles;
