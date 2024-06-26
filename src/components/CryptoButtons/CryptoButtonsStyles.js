import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';

const {width: screenWidth} = Dimensions.get('window');
const inputWidth = screenWidth / 1.1;

const styles = StyleSheet.create({
  btnList: {
    flexDirection: 'row',
    marginBottom: 20,
    width: inputWidth,
    justifyContent: 'center',
    borderColor: AppStyles.colour.background,
    borderWidth: 1,
    height: 50,
    borderRadius: 5,
  },
  btnActive: {
    backgroundColor: AppStyles.colour.background,
    borderRadius: 5,
    alignItems: 'center',
    width: inputWidth / 2,
    justifyContent: 'center',
  },
  btnItem: {
    backgroundColor: AppStyles.colour.backgroundColor,
    alignItems: 'center',
    width: inputWidth / 2 - 2,
    borderRadius: 5,
    justifyContent: 'center',
  },
  btnTitle: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
});
export default styles;
