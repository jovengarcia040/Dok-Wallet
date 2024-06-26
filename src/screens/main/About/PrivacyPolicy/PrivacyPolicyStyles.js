import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppStyles.colour.backgroundColor,
    paddingVertical: 20,
    paddingHorizontal: 15,
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {width: WIDTH - 30, marginTop: 20},
  title: {
    marginLeft: 30,
    color: AppStyles.colour.font,
    fontSize: 24,
    fontFamily: 'Roboto-Regular',
  },
  mainContainer: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: AppStyles.colour.gray,
  },
  main: {
    width: WIDTH - 60,
  },
});

export default styles;
