import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  section: {
    width: WIDTH,
    flex: 1,
    alignItems: 'flex-start',
    padding: 15,
    backgroundColor: AppStyles.colour.backgroundColor,
  },
  title: {
    color: AppStyles.colour.font,
    fontSize: 24,
    fontFamily: 'Roboto-Medium',
    marginBottom: 5,
  },
  list: {
    color: AppStyles.colour.font,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    lineHeight: 30,
  },
  item: {color: '#BB612F'},
  marginLeft: 110,
});

export default styles;
