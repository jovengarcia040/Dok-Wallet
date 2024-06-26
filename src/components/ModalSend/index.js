import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import {Modal} from 'react-native-paper';
import styles from './ModaSendStyles';
import AppStyles from 'assets/AppStyles';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentCoin} from 'redux/coins/coinsSelectors';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalSend = ({visible, hideModal, navigation}) => {
  // const handleClose = () => {
  //   hideModal(false);
  // };
  const currentCoin = useSelector(getCurrentCoin);

  const containerStyle = {
    backgroundColor: AppStyles.colour.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: HEIGHT / 2.5,
    alignSelf: 'center',
    width: WIDTH,
  };

  return (
    <Modal
      animationType="slide"
      // dismissable={false}
      onDismiss={() => {
        hideModal(false);
      }}
      visible={visible}
      contentContainerStyle={containerStyle}
      style={styles.modal}>
      <View style={styles.list}>
        <Text style={styles.listTitle}>Your Need {currentCoin.title}</Text>
        <Text style={styles.listText}>
          In order to send funds, you need to have {currentCoin.page}.
        </Text>
        {/* </View> */}
        <View style={styles.listbtn}>
          <TouchableOpacity
            style={{...styles.button, ...styles.shadow}}
            onPress={() =>
              navigation.navigate('Sidebar', {
                screen: 'BuyCrypto',
              })
            }>
            <Text style={styles.btnBuy}>Buy {currentCoin.title}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.button, ...styles.shadow}}
            // onPress={() => {
            //   console.log('click:', 'click');
            // }}
            // onPress={() => navigation.navigate('Exchange')}>
            onPress={() =>
              navigation.navigate('Sidebar', {
                screen: 'Exchange',
              })
            }>
            <Text style={styles.btnEx}>Exchange</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalSend;
