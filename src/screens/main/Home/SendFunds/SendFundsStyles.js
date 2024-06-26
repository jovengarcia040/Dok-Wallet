import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const inputWidth = screenWidth / 1.1;
const marginBottomHeight = screenHeight / 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colour.backgroundColor,
    alignItems: 'center',
  },
  title: {
    color: AppStyles.colour.gray,
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
    marginBottom: 5,
  },
  box: {
    flexDirection: 'row',
  },
  boxTitle: {
    color: AppStyles.colour.font,
    fontSize: 20,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  boxBalance: {
    color: AppStyles.colour.gray,
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
  },
  formInput: {
    width: inputWidth,
    flex: 1,
  },
  boxInput: {
    height: 140,
  },
  input: {
    marginBottom: 5,
    backgroundColor: AppStyles.colour.backgroundColor,
    position: 'relative',
  },
  btnMax: {
    position: 'absolute',
    top: '46%',
    left: '85%',
    backgroundColor: AppStyles.colour.background,
    width: 40,
    height: 20,
    borderRadius: 5,
    borderColor: AppStyles.colour.background,
    color: AppStyles.colour.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: AppStyles.colour.backgroundColor,
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
  },
  scan: {
    backgroundColor: AppStyles.colour.font,
  },
  textConfirm: {
    color: 'red',
    marginLeft: 10,
    fontSize: 12,
  },
  listTitle: {
    color: AppStyles.colour.font,
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  blockList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  blockTitle: {
    color: AppStyles.colour.font,
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
    textTransform: 'uppercase',
  },
  boxText: {
    color: AppStyles.colour.font,
    fontSize: 18,
    textAlign: 'right',
    fontFamily: 'Roboto-Regular',
  },
  switchList: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginBottom: marginBottomHeight,
  },
  switchText: {
    color: AppStyles.colour.font,
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    marginLeft: 10,
  },
  button: {
    height: 60,
    borderRadius: 10,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: AppStyles.colour.backgroundColor,
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },
});

export default styles;
