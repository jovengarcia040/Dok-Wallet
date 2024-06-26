import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    borderColor: AppStyles.colour.gray,
  },
  main: {
    width: WIDTH,
  },
});
export default styles;
