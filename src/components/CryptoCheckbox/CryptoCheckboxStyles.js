import {StyleSheet} from 'react-native';
import AppStyles from 'assets/AppStyles';

const styles = StyleSheet.create({
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  text: {
    color: AppStyles.colour.font,
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
  },
  checkText: {
    color: AppStyles.colour.background,
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    marginLeft: 10,
  },
});
export default styles;
