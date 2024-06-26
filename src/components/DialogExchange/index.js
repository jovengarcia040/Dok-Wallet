import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import ProfileIcon from 'assets/images/icons/Profile.svg';
import styles from './DialogExchangeStyles';
import AppStyles from 'assets/AppStyles';
import {Modal} from 'react-native-paper';

const WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(WIDTH * 0.7);
const {height: screenHeight} = Dimensions.get('window');
const modalHeight = screenHeight / 7.5;

const DialogExchange = ({visible, hideDialog, data}) => {
  const containerStyle = {
    backgroundColor: AppStyles.colour.backgroundColor,
    // width: ITEM_WIDTH,
    justifyContent: 'flex-start',
    // top: -screenHeight / 2 + modalHeight,
    // alignSelf: 'flex-start',
    borderRadius: 20,
    // height: modalHeight,
  };

  // return (
  //   <Modal animationType="fade" transparent={true} visible={visible}>
  //     <TouchableOpacity
  //       style={styles.centeredView}
  //       onPressOut={() => hideDialog(false)}>
  //       <View style={styles.modalView}>
  //         <View style={styles.titleContainer}>
  //           <ProfileIcon width={24} height={24} />
  //           <Text style={styles.titleText}>DokWallet</Text>
  //         </View>
  //         <Text style={styles.modalText}>{data.firstLine}</Text>
  //         <Text style={styles.modalText}>{data.secondLine}</Text>
  //       </View>
  //     </TouchableOpacity>
  //   </Modal>
  // );

  return (
    <Modal
      visible={visible}
      contentContainerStyle={containerStyle}
      onDismiss={() => hideDialog(false)}
      style={{
        // backgroundColor: 'white',
        // margin: 0, // This is the important style you need to set
        // alignItems: undefined,
        justifyContent: 'flex-start',
        padding: 0,
      }}>
      <View style={styles.modalView}>
        <View style={styles.titleContainer}>
          <ProfileIcon width={24} height={24} />
          <Text style={styles.titleText}>DokWallet</Text>
        </View>
        <Text style={styles.modalText}>{data.firstLine}</Text>
        <Text style={styles.modalText}>{data.secondLine}</Text>
      </View>
    </Modal>
  );
};

export default DialogExchange;
