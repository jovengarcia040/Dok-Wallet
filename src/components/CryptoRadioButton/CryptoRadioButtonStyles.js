import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';

// const WIDTH = Dimensions.get('window').width + 80;
// const ITEM_WIDTH = Math.round(WIDTH * 0.7);
// const {height: screenHeight} = Dimensions.get('window');
// const modalHeight = screenHeight / 1.6;

const styles = StyleSheet.create({
  section: {
    paddingVertical: 5,
    flex: 1,
    justifyContent: 'center',

    // borderColor: "blue",
    // borderWidth: 1,
  },
  title: {
    color: AppStyles.colour.primary,
    fontSize: 15,
    marginBottom: 15,
    fontFamily: 'Roboto-Regular',
    fontWeight: 'bold',
  },
  item: {
    color: AppStyles.colour.font,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  itembox: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,

    // borderColor: 'blue',
    // borderWidth: 1,
  },
});

export default styles;
