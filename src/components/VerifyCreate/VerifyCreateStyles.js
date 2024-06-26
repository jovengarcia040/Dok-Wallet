import {StyleSheet, Dimensions, Platform} from 'react-native';
import AppStyles from 'assets/AppStyles';
import {useFloatingHeight} from 'service/dimensions';

const WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(WIDTH * 0.75);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colour.backgroundColor,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  section: {
    width: ITEM_WIDTH,
  },
  title: {
    color: AppStyles.colour.font,
    fontSize: 25,
    marginTop: 5,
    marginBottom: 5,
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
  btn: {
    width: ITEM_WIDTH,
    alignSelf: 'center',
    backgroundColor: AppStyles.colour.background,
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
    color: AppStyles.colour.gray,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    marginTop: 10,
    alignSelf: 'center',
    width: ITEM_WIDTH + 16,
  },
  wordsList: {
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  wordsBox: {
    width: 100,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 6,
    position: 'relative',
    marginTop: 15,
  },
  number: {
    color: AppStyles.colour.font,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    width: 40,
    height: 40,
    backgroundColor: '#E6E2E1',
    paddingTop: 5,
    position: 'absolute',
    left: '30%',
    top: '-25%',
    fontWeight: 'bold',
    ...Platform.select({
      android: {
        borderRadius: 50,
      },
      ios: {
        borderRadius: 20,
        overflow: 'hidden',
      },
    }),
  },
  word: {
    color: AppStyles.colour.font,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    width: 100,
    height: 40,
    backgroundColor: '#E6E2E1',
    paddingTop: 5,
    ...Platform.select({
      android: {
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
      },
    }),
  },
  ...Platform.select({
    ios: {
      wordContainerIOS: {
        overflow: 'hidden',
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
      },
    },
  }),
});

export default styles;
