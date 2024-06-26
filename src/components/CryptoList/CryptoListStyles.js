import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';

const WIDTH = Dimensions.get('window').width;
const itemWidth = WIDTH / 1.4;

const styles = StyleSheet.create({
  hidden: {
    display: 'none',
  },
  section: {
    width: WIDTH,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: AppStyles.colour.gray,
  },
  box: {
    width: itemWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 5,
  },
  item: {
    alignItems: 'flex-start',
  },
  itemNumber: {
    alignItems: 'flex-end',
  },
  title: {
    color: AppStyles.colour.font,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  text: {
    color: AppStyles.colour.gray,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  iconBox: {
    width: 39,
    height: 39,
    // color: AppStyles.colour.backgroundColor,
    backgroundColor: AppStyles.colour.font,
    borderRadius: 20,
    marginLeft: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginTop: 10,
  },
  ///////fix////////////
  // icon: {
  //   width: 30,
  //   height: 30,
  //   fill: AppStyles.colour.backgroundColor,
  //   alignItems: "center",
  //   alignContent: "center",
  //   borderWidth: 1,
  //   borderColor: "solid",
  //   borderColor: "blue",
  // },
  arrow: {
    fill: AppStyles.colour.gray,
  },
  btn: {
    alignSelf: 'center',
  },
  circle: {
    fill: AppStyles.colour.background,
  },
});

export default styles;
