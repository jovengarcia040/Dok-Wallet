import {StyleSheet, Dimensions, Platform} from 'react-native';
import AppStyles from 'assets/AppStyles';

const {width: screenWidth} = Dimensions.get('window');
const formWidth = screenWidth / 1.1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: formWidth,
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  title: {
    color: AppStyles.colour.font,
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    marginBottom: 15,
    marginTop: 15,
  },
  btn: {
    width: formWidth - 20,
    flexDirection: 'row',
    height: 50,
    fontSize: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
  box: {
    marginLeft: 15,
  },
  btnTitle: {
    color: AppStyles.colour.font,
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
  },
  btnText: {
    color: AppStyles.colour.gray,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
});
export default styles;
