import React, {useState, useEffect} from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';
import {Modal, Text} from 'react-native-paper';
import styles from './ModalFingerprintStyles';
import AppStyles from 'assets/AppStyles';

const WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(WIDTH * 0.7);
const {height: screenHeight} = Dimensions.get('window');
const modalHeight = screenHeight / 3;

const ModalFingerprint = ({visible, hideModal, navigation}) => {
  const containerStyle = {
    backgroundColor: AppStyles.colour.backgroundColor,
    width: ITEM_WIDTH,
    alignSelf: 'center',
    borderRadius: 10,
    height: modalHeight,
  };

  return (
    <Modal
      visible={visible}
      contentContainerStyle={containerStyle}
      dismissable={false}>
      <View style={styles.infoList}>
        <Text style={styles.titleInfo}>Fingerprint is not added</Text>

        <Text style={styles.info}>
          Your Fingerprint is not registered on device.
        </Text>
        <Text style={styles.info}>
          Please register your Fingerprint by going into your device settings.
        </Text>
      </View>

      <View style={styles.buttonList}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            hideModal(false);
          }}>
          <Text style={styles.buttonTitle}>Ok</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalFingerprint;
