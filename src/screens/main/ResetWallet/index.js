import styles from './ResetWalletStyles';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AppStyles from 'assets/AppStyles';
import Create from 'assets/images/icons/reset_create.svg';
import Import from 'assets/images/icons/reset_import.svg';
import Plus from 'assets/images/icons/plus.svg';
import Arrowright from 'assets/images/icons/arrowright.svg';
import {loadingOn} from 'redux/auth/authSlice';
import {useDispatch} from 'react-redux';

const ResetWallet = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.infoList}>
        <Text style={styles.titleInfo}>Set up </Text>
        <Text style={styles.titleInfo}>your Wallet </Text>
        <Text style={styles.info}>
          A cryptocurrency wallet is simply a virtual wallet used to send,
          receive and store digital assets such as PMA, Ethereum, Bitcoin and
          Litecoin, among others.
        </Text>
        <Text style={styles.info}>
          To set up a wallet, we will generate a seed phrase for you, consisting
          of 12 unique words. It is very important that you store your seed
          phrase in a safe place.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LearnReset')}>
          <Text style={styles.learnText}>Learn more</Text>
        </TouchableOpacity>
        <View style={styles.btnList}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              dispatch(loadingOn());
              setTimeout(() => {
                navigation.push('VerifyInfo', {
                  reset: 'CreateWallet',
                });
              }, 200);
            }}
            style={{
              ...styles.btn,
              ...styles.shadow,
              backgroundColor: '#FF4C00',
            }}>
            <Plus height="17" width="17" style={styles.icon_plus} />
            <Create width="113" height="113" style={styles.icon_create} />
            <View style={styles.textBox}>
              <Text style={{...styles.textBtn, color: AppStyles.colour.font}}>
                Create
              </Text>
              <Text
                style={{
                  ...styles.textBtn,
                  color: AppStyles.colour.backgroundColor,
                }}>
                Wallet
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('ImportWallet')}
            style={{
              ...styles.btn,
              ...styles.shadow,
              backgroundColor: '#000000',
            }}>
            <Arrowright style={styles.icon_arrow} />
            <Import width="108" height="101" style={styles.icon_create} />
            <View style={styles.textBox2}>
              <Text
                style={{
                  ...styles.textBtn,
                  color: AppStyles.colour.background,
                }}>
                Import
              </Text>
              <Text
                style={{
                  ...styles.textBtn,
                  color: AppStyles.colour.backgroundColor,
                }}>
                Wallet
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ResetWallet;
