import {StyleSheet, Dimensions} from 'react-native';
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
  title: {
    color: AppStyles.colour.font,
    fontSize: 28,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
    fontWeight: 'bold',
  },
  formInput: {
    width: inputWidth,
    marginTop: 10,
  },
  input: {
    marginBottom: 20,
    backgroundColor: AppStyles.colour.backgroundColor,
  },
  textConfirm: {
    marginTop: -15,
    marginBottom: 20,
    color: 'red',
    marginLeft: 10,
    fontSize: 12,
  },
  info: {
    width: inputWidth - 60,
    color: AppStyles.colour.gray,
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
    marginTop: 10,
    textAlign: 'center',
    alignSelf: 'center',
  },
  listTitle: {
    color: AppStyles.colour.gray,
    fontSize: 17,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
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
});

export default styles;
