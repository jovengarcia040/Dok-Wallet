import {StyleSheet, Dimensions, Platform} from 'react-native';
import AppStyles from 'assets/AppStyles';

const WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(WIDTH * 0.75);
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colour.backgroundColor,
  },
  section: {
    width: ITEM_WIDTH,
    alignSelf: 'center',
  },
  formInput: {
    flex: 1,
    width: ITEM_WIDTH,
    alignSelf: 'center',
  },
  title: {
    color: AppStyles.colour.font,
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
    fontWeight: 'bold',
  },
  span: {
    color: AppStyles.colour.gray,
    fontSize: 15,
    marginBottom: 5,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
  },
  textFirst: {
    color: AppStyles.colour.gray,
    fontSize: 15,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    color: AppStyles.colour.gray,
    fontSize: 15,
    marginBottom: 10,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
  },
  input: {
    backgroundColor: AppStyles.colour.backgroundColor,
    width: ITEM_WIDTH,
    alignSelf: 'center',
  },
  checkbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: ITEM_WIDTH,
    marginVertical: 10,
  },
  checkText: {
    width: ITEM_WIDTH - 32,
    color: 'red',
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  textConfirm: {
    marginTop: 5,
    color: 'red',
    marginLeft: 18,
    fontSize: 12,
  },
  btn: {
    width: ITEM_WIDTH,
    alignSelf: 'center',
    borderRadius: 10,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  btnTitle: {
    color: AppStyles.colour.backgroundColor,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  info: {
    color: AppStyles.colour.font,
    fontSize: 15,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  wordsList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  wordsBox: {
    width: 50,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  number: {
    fontSize: 17,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    width: '100%',
    height: '100%',
    // borderRadius: 5,
    color: AppStyles.colour.gray,
    backgroundColor: '#E6E2E1',
    paddingTop: 20,
    ...Platform.select({
      android: {
        borderRadius: 5,
      },
      ios: {
        borderRadius: 5,
        overflow: 'hidden',
      },
    }),
  },
  numberRandom: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    width: '100%',
    height: '100%',
    // borderRadius: 5,
    paddingTop: 6,
    borderWidth: 1,
    borderColor: 'solid',
    ...Platform.select({
      android: {
        borderRadius: 5,
      },
      ios: {
        borderRadius: 5,
        overflow: 'hidden',
      },
    }),
  },
  icon: {
    textAlign: 'center',
    position: 'absolute',
    left: '26%',
    top: '50%',
  },
  cross: {
    fill: '#FF647C',
    textAlign: 'center',
    position: 'absolute',
    left: '35%',
    top: '55%',
  },
  check: {
    fill: '#FFFF',
    textAlign: 'center',
    position: 'absolute',
    left: '35%',
    top: '55%',
  },
});

export default styles;
