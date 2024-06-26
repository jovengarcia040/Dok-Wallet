import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';

const WIDTH = Dimensions.get('window').width;
const itemWidth = WIDTH / 1.2;

const styles = StyleSheet.create({
  section: {
    width: WIDTH,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: AppStyles.colour.gray,
  },
  box: {
    width: itemWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 5,
  },
  item: {
    alignItems: 'flex-start',
  },
  itemNumber: {
    alignItems: 'flex-end',
  },
  title: {
    color: AppStyles.colour.font,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  hyphen: {
    color: AppStyles.colour.gray,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    marginHorizontal: 5,
  },
  text: {
    color: AppStyles.colour.gray,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  arrow: {
    fill: AppStyles.colour.gray,
  },
  info: {
    color: AppStyles.colour.gray,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    marginTop: 20,
    textAlign: 'center',
    width: WIDTH / 1.3,
  },
});

export default styles;
