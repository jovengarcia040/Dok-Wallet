import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const SLIDER_HEIGHT = Dimensions.get('window').height / 3.5;
export const ITEM_HEIGHT = Dimensions.get('window').height / 2.5;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colour.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: ITEM_WIDTH,
  },
  paginationDotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inactiveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0,.2)',
    marginHorizontal: 5,
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: AppStyles.colour.background,
    marginHorizontal: 5,
  },
  btn: {
    fontFamily: 'Roboto-Regular',
    fontWeight: 'bold',
    color: 'rgba(0,0,0,.2)',
  },
  hidden: {
    display: 'none',
  },
  button: {
    backgroundColor: AppStyles.colour.background,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: AppStyles.colour.background,
    width: ITEM_WIDTH,
  },
  buttonTitle: {
    color: AppStyles.colour.backgroundColor,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  //////////////Item////////////
  caruselList: {
    backgroundColor: AppStyles.colour.backgroundColor,
    width: ITEM_WIDTH,
    marginTop: 20,
    alignSelf: 'center',
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: ITEM_HEIGHT,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: ITEM_WIDTH,
    height: SLIDER_HEIGHT,
  },
  title: {
    color: AppStyles.colour.font,
    fontSize: 34,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
  body: {
    color: AppStyles.colour.primary,
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
});

export default styles;
