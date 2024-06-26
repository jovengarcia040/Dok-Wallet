import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from './SettingsStyles';
import AppStyles from 'assets/AppStyles';
import LocalCurrency from 'assets/images/settings/local-currency.svg';
import SetCurrency from 'assets/images/settings/set-currency.svg';
import Notifications from 'assets/images/settings/notifications.svg';
import Change from 'assets/images/settings/change-pass.svg';
import ShowPhrase from 'assets/images/settings/show-phrase.svg';
import Rate from 'assets/images/settings/rate.svg';
import Privacy from 'assets/images/settings/privacy.svg';
import Terms from 'assets/images/settings/mail.svg';
import {Switch} from 'react-native-paper';
import ModalFingerprint from 'components/ModalFingerprint';
import ModalFingerprintVerification from 'components/ModalFingerprintVerification';
import {useDispatch, useSelector} from 'react-redux';
import {isFingerprint} from 'redux/settings/settingsSelectors';
import {updateFingerprint} from 'redux/settings/settingsSlice';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import {fingerprintAuthOut} from 'redux/auth/authSlice';

const Settings = ({navigation}) => {
  const isSwitchOn = useSelector(isFingerprint);
  const [showModalPass, setShowModalPass] = useState(false);
  const [showModalVarify, setShowModalVarify] = useState(false);
  const dispatch = useDispatch();
  const [isFingerprintEnabled, setIsFingerprintEnabled] = useState(false);

  const onToggleSwitch = () => {
    if (isFingerprintEnabled) {
      if (!isSwitchOn) {
        setShowModalPass(!showModalPass);
      } else {
        dispatch(updateFingerprint(!isSwitchOn));
        dispatch(fingerprintAuthOut());
      }
    } else {
      setShowModalVarify(true);
    }
  };

  useEffect(() => {
    const checkFingerprintSettings = async () => {
      try {
        const isAvailable = await FingerprintScanner.isSensorAvailable(
          FingerprintScanner.authenticate,
        );
        setIsFingerprintEnabled(isAvailable);
      } catch (error) {
        console.log('Error checking fingerprint settings:', error);
      }
    };

    checkFingerprintSettings();

    FingerprintScanner.release();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.list}>
        <Text style={styles.title}>Account settings</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('LocalCurrency')}
          style={{
            ...styles.btn,
            borderBottomWidth: 0.5,
            borderBottomColor: AppStyles.colour.gray,
          }}>
          <LocalCurrency />
          <View style={styles.box}>
            <Text style={styles.btnTitle}>Local Currency</Text>
            <Text style={styles.btnText}>United States Dollar</Text>
          </View>
        </TouchableOpacity>
        {/* /////////////////////////////// */}
        <TouchableOpacity
          onPress={() => navigation.navigate('ManageCoins')}
          style={styles.btn}>
          <SetCurrency />
          <View style={styles.box}>
            <Text style={styles.btnTitle}>Coin List</Text>
            <Text style={styles.btnText}>Manage your coin list</Text>
          </View>
        </TouchableOpacity>
        {/* /////////////////////////////// */}
        <Text style={styles.title}>Notifications settings</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Notifications')}
          style={styles.btn}>
          <Notifications />
          <View style={styles.box}>
            <Text style={styles.btnTitle}>Push Notifications</Text>
            <Text style={styles.btnText}>Manage push notifications</Text>
          </View>
        </TouchableOpacity>
        {/* /////////////////////////////// */}
        <Text style={styles.title}>Security</Text>
        <TouchableOpacity
          onPress={() => navigation.push('ChangePassword')}
          style={{
            ...styles.btn,
            borderBottomWidth: 0.5,
            borderBottomColor: AppStyles.colour.gray,
          }}>
          <Change />
          <View style={styles.box}>
            <Text style={styles.btnTitle}>Change Password</Text>
            <Text style={styles.btnText}>Change or reset your password</Text>
          </View>
        </TouchableOpacity>
        {/* /////////////////////////////// */}
        <TouchableOpacity
          onPress={() => navigation.push('VerifyInfo')}
          style={{
            ...styles.btn,
            borderBottomWidth: 0.5,
            borderBottomColor: AppStyles.colour.gray,
          }}>
          <ShowPhrase />
          <View style={styles.box}>
            <Text style={styles.btnTitle}>Show seed phrase</Text>
            <Text style={styles.btnText}>Manage your seed phrase</Text>
          </View>
        </TouchableOpacity>
        {/* /////////////////////////////// */}
        <View
          style={{...styles.btn, justifyContent: 'space-between'}}
          // onPress={onToggleSwitch}
        >
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Change />
            <View style={styles.box}>
              <Text style={styles.btnTitle}>Login with Fingerprint</Text>
              <Text style={styles.btnText}>
                {isSwitchOn === false ? 'No set' : 'Set'}
              </Text>
            </View>
          </View>
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            trackColor={{false: 'gray', true: '#E8E8E8'}}
            thumbColor={isSwitchOn ? '#F44D03' : 'white'}
            ios_backgroundColor="#E8E8E8"
          />
        </View>

        {/* /////////////////////////////// */}
        <Text style={styles.title}>General</Text>
        <TouchableOpacity
          // onPress={() =>}
          style={{
            ...styles.btn,
            borderBottomWidth: 0.5,
            borderBottomColor: AppStyles.colour.gray,
          }}>
          <Rate width="25" height="25" color="#333130" />
          <View style={styles.box}>
            <Text style={styles.btnTitle}>Rate our App</Text>
            <Text style={styles.btnText}>Rate & Review us</Text>
          </View>
        </TouchableOpacity>
        {/* /////////////////////////////// */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Terms & Conditions')}
          style={{
            ...styles.btn,
            borderBottomWidth: 0.5,
            borderBottomColor: AppStyles.colour.gray,
          }}>
          <Terms width="25" height="25" color="#333130" />
          <View style={styles.box}>
            <Text style={styles.btnTitle}>Terms & Conditions</Text>
          </View>
        </TouchableOpacity>
        {/* /////////////////////////////// */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Privacy Policy')}
          style={styles.btn}>
          <Privacy width="25" height="25" color="#333130" />
          <View style={styles.box}>
            <Text style={styles.btnTitle}>Privacy Policy</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <ModalFingerprint
        visible={showModalVarify}
        hideModal={setShowModalVarify}
        navigation={navigation}
      />
      <ModalFingerprintVerification
        visible={showModalPass}
        hideModal={setShowModalPass}
      />
    </View>
  );
};

export default Settings;
