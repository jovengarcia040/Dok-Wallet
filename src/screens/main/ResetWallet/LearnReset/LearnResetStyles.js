import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';

const WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(WIDTH * 0.75);
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppStyles.colour.backgroundColor,
    height: HEIGHT,
  },
  infoList: {
    marginTop: 20,
    width: ITEM_WIDTH,
    alignSelf: 'center',
  },
  titleInfo: {
    color: AppStyles.colour.font,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    marginBottom: 10,
  },
  info: {
    color: AppStyles.colour.font,
    fontSize: 17,
    marginBottom: 20,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
  },
  span: {
    color: AppStyles.colour.font,
    fontSize: 17,
    fontFamily: 'Roboto-Regular',
    fontWeight: 'bold',
    marginTop: 20,
  },
  learnText: {
    color: AppStyles.colour.background,
    fontSize: 17,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
  },
});
export default styles;
