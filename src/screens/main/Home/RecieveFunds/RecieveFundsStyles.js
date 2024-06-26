import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';

const {width: screenWidth} = Dimensions.get('window');
const inputWidth = screenWidth / 1.1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colour.backgroundColor,
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
  },

  qrContainer: {
    marginTop: 10,
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  addressTitle: {
    marginTop: 10,
    fontFamily: 'Roboto-Bold',
    textAlign: 'left',
    color: AppStyles.colour.gray,
  },
  addressContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  address: {
    fontFamily: 'Roboto-Bold',
    color: AppStyles.colour.gray,
    width: inputWidth * 0.9,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  input: {
    width: inputWidth * 0.48,
    flex: 1,
    height: 40,
    justifyContent: 'center',
    backgroundColor: AppStyles.colour.backgroundColor,
    paddingBottom: 0,
    fontFamily: 'Roboto-Bold',
  },
  currencyTitle: {
    fontFamily: 'Roboto-Regular',
    color: AppStyles.colour.gray,
  },
});

export default styles;
