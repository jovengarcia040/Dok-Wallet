import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import AppStyles from 'assets/AppStyles';

const {width: screenWidth} = Dimensions.get('window');
const inputWidth = screenWidth / 1.1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colour.backgroundColor,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  formInput: {
    width: inputWidth,
    marginTop: 40,
  },
  title: {
    color: AppStyles.colour.font,
    fontSize: 30,
    marginBottom: 10,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
  },
  text: {
    color: AppStyles.colour.primary,
    fontSize: 15,
    marginBottom: 20,
    fontFamily: 'Roboto-Regular',
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
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  textConfirm: {
    marginTop: -15,
    marginBottom: 10,
    color: 'red',
    marginLeft: 10,
    fontSize: 12,
  },
});
export default styles;
