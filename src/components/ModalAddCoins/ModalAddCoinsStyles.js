import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(240, 240, 240,0.5)',
  },
  modalView: {
    width: WIDTH,
    backgroundColor: AppStyles.colour.backgroundColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
  headerText: {fontSize: 16, fontFamily: 'Roboto-Regular'},
  btnClose: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBody: {
    alignItems: 'center',
    justifyContent: 'center',
    height: HEIGHT / 1.7,
  },
  input: {
    width: WIDTH - 20,
    backgroundColor: AppStyles.colour.backgroundColor,
    borderWidth: 1,
    borderColor: AppStyles.colour.gray,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18,
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: AppStyles.colour.backgroundColor,
  //   alignItems: "center",

  //   justifyContent: "space-between",
  // },
});

export default styles;
