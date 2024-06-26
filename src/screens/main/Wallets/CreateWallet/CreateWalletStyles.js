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
  brand: {
    color: AppStyles.colour.font,
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
    fontWeight: 'bold',
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
    color: 'red',
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    marginTop: 10,
  },
  listTitle: {
    color: AppStyles.colour.font,
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  itemSection: {
    marginLeft: 20,
  },
  itemIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemName: {
    color: AppStyles.colour.font,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
  },
  button: {
    marginTop: 20,
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
  textWarning: {
    marginBottom: 20,
    color: 'red',
    fontSize: 15,
  },
});

export default styles;
