import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';

const {width: screenWidth} = Dimensions.get('window');
const inputWidth = screenWidth / 1.1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colour.backgroundColor,
  },
  walletSection: {
    marginTop: 20,
    width: inputWidth,
    alignSelf: 'center',
  },
  walletBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {color: AppStyles.colour.gray, fontSize: 14, marginLeft: 70},
  textContainer: {padding: 10, fontSize: 18},
  mainText: {
    fontSize: 18,
  },
  secondaryText: {
    fontSize: 14,
    color: AppStyles.colour.gray,
  },
  walletList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 10,
    // paddingVertical: 5,

    // borderWidth: 1,
    // borderColor: "solid",
    // borderColor: "red",
  },
  avatarWrapper: {
    position: 'relative',
  },
  avatarAvatar: {
    backgroundColor: AppStyles.colour.backgroundColor,
  },
  badge: {
    backgroundColor: '#2F77BA',
    zIndex: 2,
    position: 'absolute',
    top: -5,
    right: -5,
  },
  boxBtn: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsBtn: {fontSize: 24},
});
export default styles;
