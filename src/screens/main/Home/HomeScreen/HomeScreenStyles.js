import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colour.backgroundColor,
  },
  header: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  headerTitle: {
    color: AppStyles.colour.gray,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  headerNumber: {
    color: AppStyles.colour.font,
    fontSize: 24,
    fontFamily: 'Roboto-Regular',
  },
  btn: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 40,
  },
  btnText: {
    color: AppStyles.colour.gray,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    marginRight: 10,
  },
  circle: {
    fill: AppStyles.colour.background,
  },
});

export default styles;
