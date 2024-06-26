import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  section: {
    width: WIDTH,
    backgroundColor: AppStyles.colour.backgroundColor,
    flex: 1,
    alignItems: 'flex-start',
    padding: 20,
  },
  list: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: AppStyles.colour.gray,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: AppStyles.colour.font,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },

  iconBox: {
    padding: 10,
  },
  arrow: {
    fill: AppStyles.colour.gray,
  },
});

export default styles;
