import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {Modal, Portal, Text, Provider} from 'react-native-paper';
import styles from './ModalResetStyles';
import AppStyles from 'assets/AppStyles';
import {getUserPassword} from 'redux/auth/authSelectors';
import {useSelector, useDispatch} from 'react-redux';
import {
  logOutSuccess,
  logOutFailure,
  fingerprintAuthOut,
} from 'redux/auth/authSlice';
// import {getLoading} from 'redux/auth/authSelectors';

const WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(WIDTH * 0.7);
const {height: screenHeight} = Dimensions.get('window');
const modalHeight = screenHeight / 2.5;

const ModalReset = ({visible, hideModal, navigation, page}) => {
  const dispatch = useDispatch();
  // const storePassword = useSelector(getUserPassword);
  const [list, setList] = useState('');

  useEffect(() => {
    setList(page);
  }, [page]);

  const handlerNo = () => {
    if (list === 'Reset Wallet') {
      hideModal(false);
      navigation.navigate('Sidebar', {
        screen: 'Home',
      });
    } else {
      hideModal(false);
    }
  };

  const handlerYes = () => {
    if (list === 'Reset Wallet') {
      hideModal(false);
      navigation.navigate('ResetWallet');
    } else if (list === 'Forgot') {
      dispatch(logOutSuccess());
      setTimeout(() => {
        navigation.navigate('Registration');
      }, 200);
    } else {
      hideModal(false);
      dispatch(fingerprintAuthOut());
      navigation.navigate('Login');
    }
  };

  return (
    <Modal
      visible={visible}
      contentContainerStyle={{
        backgroundColor: AppStyles.colour.backgroundColor,
        width: ITEM_WIDTH,
        alignSelf: 'center',
        borderRadius: 10,
        height: modalHeight,
      }}
      dismissable={false}>
      <View style={styles.infoList}>
        <Text style={styles.titleInfo}>{page}</Text>
        <Text style={styles.info}>
          Please make sure you have a copy of 12-word seed phrase. You will need
          it in order to restore your wallet. Without it you will NOT be able to
          restore your wallet and you will lose access to your funds.
        </Text>
        <Text style={styles.info}>Are you sure you want to proceed?</Text>
      </View>
      <View style={styles.btnList}>
        <View style={styles.learnBorder}>
          <TouchableOpacity style={styles.learnBox} onPress={() => handlerNo()}>
            <Text style={styles.learnText}>No</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.learnBox} onPress={() => handlerYes()}>
          <Text style={styles.learnText}>Yes</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalReset;
