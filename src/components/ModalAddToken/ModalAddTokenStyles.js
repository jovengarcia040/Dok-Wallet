import {StyleSheet} from 'react-native';
import AppStyles from 'assets/AppStyles';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(240, 240, 240,0.5)',
  },
  modalView: {
    position: 'relative',
    width: '100%',
    backgroundColor: AppStyles.colour.backgroundColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // padding: 15,
    // alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },

  button: {
    backgroundColor: AppStyles.colour.background,
    height: 60,
    borderRadius: 10,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: AppStyles.colour.backgroundColor,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  closeBtn: {
    // zIndex: 99,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: AppStyles.colour.primary,
    fontSize: 15,
    marginBottom: 20,
    fontFamily: 'Roboto-Regular',
  },
  input: {
    backgroundColor: AppStyles.colour.backgroundColor,
    height: 60,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalHeader: {
    padding: 15,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: AppStyles.colour.gray,
  },
  headerText: {fontSize: 16},
  modalBody: {padding: 15},

  qrContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  qrBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: AppStyles.colour.font,
  },
});

export default styles;
