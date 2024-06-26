import {StyleSheet, Dimensions, Platform} from 'react-native';
import AppStyles from 'assets/AppStyles';

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colour.backgroundColor,
    alignItems: 'center',
  },
  box: {
    marginTop: 10,
    width: 340,
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: AppStyles.colour.gray,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  headerNumber: {
    color: AppStyles.colour.background,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  btnList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  btn: {
    backgroundColor: AppStyles.colour.background,
    width: 160,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#C0C0C0',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 1,
        shadowRadius: 5,
      },
      android: {
        shadowColor: AppStyles.colour.font,
        elevation: 10,
      },
    }),
  },
  btnText: {
    color: AppStyles.colour.backgroundColor,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    textTransform: 'uppercase',
  },
  icon: {
    color: AppStyles.colour.background,
    width: 18,
    height: 21,
    marginRight: 10,
  },
  coinList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coinIcon: {
    marginTop: 8,
    width: 60,
    height: 60,
    color: AppStyles.colour.backgroundColor,
    backgroundColor: AppStyles.colour.font,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ///////fix////////
  // currentIcon: {
  //   width: 60,
  //   height: 60,
  //   fill: AppStyles.colour.backgroundColor,

  //   borderWidth: 1,
  //   borderColor: "solid",
  //   borderColor: "red",
  // },
  coinBox: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 6,
  },
  coinNumber: {
    fontSize: 18,
    color: AppStyles.colour.font,
    fontFamily: 'Roboto-Regular',
    fontWeight: 'bold',
  },
  coinSum: {
    color: AppStyles.colour.gray,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  titleTrans: {
    marginVertical: 15,
    color: AppStyles.colour.font,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    fontWeight: 'bold',
  },
  addresList: {
    display: 'flex',
  },
  boxAdress: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  addresTitle: {
    color: AppStyles.colour.gray,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    textTransform: 'uppercase',
  },
  address: {
    color: AppStyles.colour.font,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  borderBox: {
    borderTopWidth: 1,
    borderTopColor: AppStyles.colour.gray,
  },
  sortList: {
    width: 340,
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sortTitle: {
    color: AppStyles.colour.font,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    textTransform: 'uppercase',
  },
  titleItem: {
    color: AppStyles.colour.font,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
});

export default styles;
