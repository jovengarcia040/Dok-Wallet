import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {
  Modal,
  Portal,
  Text,
  Button,
  Provider,
  Checkbox,
} from 'react-native-paper';
import styles from './ModalQRStyles';

export const ModalQR = ({navigation, visible, hideModal, data}) => {
  const WIDTH = Dimensions.get('window').width + 80;
  const ITEM_WIDTH = Math.round(WIDTH * 0.7);
  const {height: screenHeight} = Dimensions.get('window');
  const modalHeight = data ? screenHeight / 2.2 : screenHeight / 8;

  // console.log("props:", props);
  // const [visible, setVisible] = useState(true);
  // const hideModal = () => setVisible(false);
  const containerStyleValid = {
    backgroundColor: 'white',
    padding: 20,
    width: ITEM_WIDTH,
    alignSelf: 'center',
    borderRadius: 10,
    height: modalHeight,
  };

  const containerStyleInvalid = {
    backgroundColor: 'white',
    padding: 10,
    width: ITEM_WIDTH,
    flexDirection: 'column',
    alignSelf: 'center',
    borderRadius: 10,
    height: modalHeight,
  };

  return (
    // <Provider>
    //   <Portal>
    <Modal
      visible={visible}
      contentContainerStyle={data ? containerStyleValid : containerStyleInvalid}
      onDismiss={() => hideModal(false)}>
      {data ? (
        <View>
          <Text style={styles.title}>My wallet address</Text>

          <Text style={styles.span}>{data}</Text>
          <Text style={styles.span} />

          <Text style={styles.info}>
            Use this as reference to confirm your wallet address on Business
            console.
          </Text>

          <TouchableOpacity
            style={{
              ...styles.btnVerify,
              backgroundColor: '#F44D03',
            }}
            // onPress={() => {
            //   hideModal(), navigation.navigate("VerifyCreate");
            // }}
            onPress={() => hideModal(false)}>
            <Text style={styles.verifyTitle}>OK</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={styles.title}>Invalid address</Text>
        </View>
      )}
    </Modal>
    //   </Portal>
    // </Provider>
  );
};
