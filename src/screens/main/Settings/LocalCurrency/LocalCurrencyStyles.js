import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';

const {width: screenWidth} = Dimensions.get('window');
const itemWidth = screenWidth / 1.4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colour.backgroundColor,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: AppStyles.colour.gray,
  },
  iconBoxChecked: {
    width: 39,
    height: 39,
    backgroundColor: AppStyles.colour.background,
    borderRadius: 20,
    marginLeft: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  iconBox: {
    width: 39,
    height: 39,
    backgroundColor: AppStyles.colour.backgroundColor,
    borderRadius: 20,
    marginLeft: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    borderColor: AppStyles.colour.gray,
    borderWidth: 1,
  },
  items: {
    alignItems: 'flex-start',
    width: itemWidth,
  },
  title: {
    color: AppStyles.colour.font,
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
  },
});
export default styles;
