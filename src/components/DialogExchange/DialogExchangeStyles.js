import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from 'assets/AppStyles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const {height: screenHeight} = Dimensions.get('window');
const modalHeight = screenHeight / 7.5;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0,0.3)',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    color: AppStyles.colour.font,
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    marginLeft: 10,
  },
  modalView: {
    width: SCREEN_WIDTH,
    // height: modalHeight,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
});

export default styles;
