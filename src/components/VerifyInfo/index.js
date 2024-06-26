import React, {useState, useEffect} from 'react';
import {Dimensions, TouchableOpacity, View, ScrollView} from 'react-native';
import {Modal, Text} from 'react-native-paper';
import Warning from 'assets/images/verify/warning.svg';
import styles from './VerifyInfoStyles';
import AppStyles from 'assets/AppStyles';
import CryptoCheckbox from 'components/CryptoCheckbox';
import {
  addCoins,
  addWallet,
  keyCreated,
  updateWallet,
} from 'redux/coins/coinsSlice';
import {useDispatch, useSelector} from 'react-redux';
import {getCoin, newWallet} from '../../crypto';
import {loadingOff} from 'redux/auth/authSlice';
import {updateWalletPhrase} from 'redux/coins/coinsSlice';
import {currency} from 'data/currency';
import {getLocalCurrency} from 'redux/settings/settingsSelectors';
// import {getCurrentWallet, getWallets} from 'redux/coins/coinsSelectors';
import {
  allWalletsSelector,
  createWallet,
  currentWalletIndexSelector,
  currentWalletSelector,
} from 'redux/wallets/walletsSlice';

const WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(WIDTH * 0.7);

export const VerifyInfo = ({navigation, route}) => {
  const nextRoute = route?.params?.nextRoute;
  console.log('nextRoute:', nextRoute);
  const reset = route?.params?.reset;
  console.log('reset:', reset);

  const allWallets = useSelector(allWalletsSelector);
  const currentWallet = useSelector(currentWalletSelector);

  const [infoCheck, setInfoCheck] = useState(false);
  const [visible, setVisible] = useState(true);
  const hideModal = () => setVisible(false);
  const dispatch = useDispatch();
  console.log('verifyInfo2');
  useEffect(() => {
    if (reset === 'CreateWallet') {
      dispatch(
        createWallet({
          walletName: currentWallet.walletName,
          // walletIndex: currentWalletIndex,
          replace: true,
        }),
      );
    } else {
      dispatch(
        createWallet({
          walletName: allWallets.length
            ? `Wallet ${allWallets.length + 1}`
            : 'Main Wallet',
        }),
      );
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadingOff());
  }, [dispatch, allWallets]);

  console.log('verifyInfo3');
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    width: ITEM_WIDTH,
    alignSelf: 'center',
    borderRadius: 10,
  };

  return (
    <Modal
      visible={visible}
      contentContainerStyle={containerStyle}
      dismissable={false}>
      <ScrollView>
        <View style={styles.icon}>
          <Warning fill={AppStyles.colour.backgroundColor} />
        </View>

        <Text style={styles.title}>Important!</Text>
        <Text style={styles.info}>
          Your account is ready. We used a &nbsp;
          <Text style={styles.span}>seed phrase </Text> to create the private
          key with which you control your funds.
        </Text>
        <Text style={styles.infoNext}>
          It is very important that you keep the &nbsp;
          <Text style={styles.span}>seed phrase </Text> somewhere safe, outside
          of this device.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Learn')}>
          <Text style={styles.learnText}>Learn more.</Text>
        </TouchableOpacity>
        <Text style={styles.infoRed}>
          IMPORTANT:We do not keep your private key in our servers. It is
          encrypted and stored on this device. If you lose the private key, you
          will lose access to your funds! The &nbsp;
          <Text style={styles.spanRed}>seed phrase </Text> is the only means by
          which you can restore your key.
        </Text>

        <CryptoCheckbox
          setInfoCheck={setInfoCheck}
          number={'3'}
          title={'I understand'}
        />

        <TouchableOpacity
          disabled={infoCheck ? false : true}
          style={{
            ...styles.btnVerify,
            backgroundColor: infoCheck ? '#F44D03' : '#708090',
          }}
          onPress={() => {
            hideModal(),
              navigation.navigate('VerifyCreate', {
                nextRoute,
                reset,
              });
          }}>
          <Text style={styles.verifyTitle}>Verify seed phrase</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={infoCheck ? false : true}
          style={styles.btnLater}
          onPress={() => {
            hideModal(),
              //  navigation.navigate('VerifyCreate');
              navigation.navigate('VerifyCreate', {
                nextRoute,
                reset,
              });
          }}>
          <Text
            style={{
              ...styles.laterTitle,
              color: infoCheck ? '#F44D03' : '#708090',
            }}>
            Do it later
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </Modal>
  );
};
