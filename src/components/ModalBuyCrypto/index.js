import React, {useState, useEffect} from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';
import {Modal, Text} from 'react-native-paper';
import styles from './ModalBuyCryptoStyles';
import AppStyles from 'assets/AppStyles';

const WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(WIDTH * 0.7);
const {height: screenHeight} = Dimensions.get('window');
const modalHeight = screenHeight / 3;

const ModalBuyCrypto = ({
  visible,
  hideModal,
  navigation,
  cryptoProvider,
  sourceProvider,
}) => {
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
        <Text style={styles.titleInfo}>
          Your Dokwallet`s address was copied to clipboard.
        </Text>
        <Text style={styles.infoBox}>
          <Text style={styles.info}>
            Simply paste it when asked by {cryptoProvider.toLowerCase()}.
          </Text>
        </Text>
        <Text style={styles.info}>
          **Please double check when purchasing for the first time.
        </Text>
      </View>

      <View style={styles.buttonList}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            hideModal(false);
            navigation.navigate('CryptoCoinsList', {
              sourceProvider: sourceProvider,
            });
          }}>
          <Text style={styles.buttonTitle}>Ok</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalBuyCrypto;
