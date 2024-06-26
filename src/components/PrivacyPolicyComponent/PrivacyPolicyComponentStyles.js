import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: 700,
    // height: 1000,
  },
  border: {
    height: 15,
    backgroundColor: AppStyles.colour.gray,
  },
  page: {
    padding: 80,
    height: 1000,
  },
  titlesContainer: {
    alignItems: 'center',
  },
  h1: {
    fontSize: 26,
    fontFamily: 'Roboto-Bold',
  },
  h2: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    marginTop: 50,
    marginBottom: 10,
  },
  h3: {
    fontFamily: 'Roboto-Bold',
    marginTop: 50,
  },
  content: {
    marginTop: 10,
    fontSize: 12,
    lineHeight: 25,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  list: {marginLeft: -30},
});

export default styles;
