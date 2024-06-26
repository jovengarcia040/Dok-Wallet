import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';

const {width: screenWidth} = Dimensions.get('window');
const inputWidth = screenWidth / 1.1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colour.backgroundColor,
    alignItems: 'center',
  },
  formInput: {
    width: inputWidth,
    flex: 1,
  },
  input: {
    marginBottom: 20,
    backgroundColor: AppStyles.colour.backgroundColor,
  },
  button: {
    backgroundColor: AppStyles.colour.background,
    height: 60,
    borderRadius: 10,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: AppStyles.colour.backgroundColor,
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },
  textConfirm: {
    marginTop: -15,
    color: 'red',
    marginLeft: 10,
    fontSize: 12,
  },
  textWarning: {
    marginBottom: 20,
    color: 'red',
    fontSize: 15,
  },
});

export default styles;
