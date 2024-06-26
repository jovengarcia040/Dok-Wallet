import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';

const {width: screenWidth} = Dimensions.get('window');
const formWidth = screenWidth / 1.1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colour.backgroundColor,
    alignItems: 'center',
  },
  list: {
    width: formWidth,
  },
  title: {
    color: AppStyles.colour.gray,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    marginBottom: 15,
    marginTop: 15,
    textTransform: 'uppercase',
  },
  btn: {
    width: formWidth - 20,
    flexDirection: 'row',
    height: 50,
    fontSize: 20,
    alignItems: 'center',
    alignSelf: 'center',

    // borderColor: 'blue',
    // borderWidth: 1,
  },
  box: {
    marginLeft: 15,
  },
  btnTitle: {
    color: AppStyles.colour.font,
    fontSize: 17,
    fontFamily: 'Roboto-Bold',
  },
});
export default styles;
