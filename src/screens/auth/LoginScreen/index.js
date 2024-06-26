import React, {useState, useEffect, useCallback} from 'react';
import {TouchableOpacity, View, Text, Keyboard} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import {useSelector, useDispatch} from 'react-redux';
import {
  logInSuccess,
  fingerprintAuthSuccess,
  loadingOff,
  loadingOn,
} from 'redux/auth/authSlice';
import {getUserPassword, getFingerprintAuth} from 'redux/auth/authSelectors';
import styles from './LoginScreenStyles';
import Logo from 'assets/images/screens/login.svg';
import {validationSchemaLogin} from 'service/validationSchema';
import ModalReset from 'components/ModalReset';
import {isFingerprint} from 'redux/settings/settingsSelectors';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import {useFloatingHeight} from 'service/dimensions';
import {getWallets} from 'redux/coins/coinsSelectors';
import {allWalletsSelector} from 'redux/wallets/walletsSlice';

export const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [hide, setHide] = useState(true);
  const [wrong, setWrong] = useState(false);
  const [modal, setModal] = useState(false);
  const storePassword = useSelector(getUserPassword);
  const fingerprint = useSelector(isFingerprint);
  const isFinger = useSelector(getFingerprintAuth);
  console.log('isFinger:', isFinger);
  const floatingBtnHeight = useFloatingHeight();
  const allWallets = useSelector(allWalletsSelector);

  useEffect(() => {
    dispatch(loadingOff());
    setTimeout(() => {
      handleFingerprintAuth();
    }, 200);
  }, [dispatch, handleFingerprintAuth]);

  useEffect(() => {
    if (!isFinger) {
      handleFingerprintAuth();
    }
  }, [isFinger, handleFingerprintAuth]);

  const hasWallet = useCallback(() => {
    return allWallets?.length !== 0;
  }, [allWallets]);

  const handleFingerprintAuth = useCallback(async () => {
    if (fingerprint) {
      try {
        const isAuth = await FingerprintScanner.authenticate({
          description: 'Unlock Dok Wallet with your fingerprint',
        });

        dispatch(fingerprintAuthSuccess(isAuth));
        if (hasWallet()) {
          console.log('hasWallet: in login', hasWallet());
          dispatch(loadingOn());
          setTimeout(() => {
            navigation.navigate('Sidebar');
            dispatch(loadingOff());
          }, 200);
        } else {
          dispatch(loadingOn());
          setTimeout(() => {
            navigation.navigate('VerifyInfo');
          }, 200);
        }
      } catch (error) {
        if (error.name === 'SystemCancel') {
          console.log('Authentication was canceled by the system');
        } else {
          console.log('Error checking fingerprint settings:', error);
        }
      } finally {
        FingerprintScanner.release();
      }
    }
  }, [dispatch, fingerprint, navigation, hasWallet]);

  const handleSubmit = values => {
    dispatch(loadingOn());
    Keyboard.dismiss();
    if (storePassword === values.password) {
      console.log('Login successful');
      dispatch(fingerprintAuthSuccess(true));
      dispatch(logInSuccess(values.password));
      if (hasWallet()) {
        console.log('hasWallet: in login', hasWallet());
        dispatch(loadingOff());
        setTimeout(() => {
          navigation.navigate('Sidebar');
        }, 200);
      } else {
        dispatch(loadingOn());
        setTimeout(() => {
          navigation.navigate('VerifyInfo');
        }, 200);
      }
    } else {
      console.log('Wrong password');
      setWrong(true);
      dispatch(loadingOff());
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.formInput}>
          <Text
            style={{
              ...styles.brand,
              marginTop: floatingBtnHeight > 300 ? 20 : 0,
            }}>
            DOK WALLET
          </Text>
          <Logo width="200" height="76" style={styles.image} />
          <Text style={styles.title}>Sign in</Text>
          <Formik
            initialValues={{password: ''}}
            validationSchema={validationSchemaLogin}
            onSubmit={handleSubmit}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View>
                <TextInput
                  style={styles.input}
                  label="Password"
                  theme={{
                    colors: {
                      onSurfaceVariant: '#989898',
                      primary: errors.password ? 'red' : '#989898',
                    },
                  }}
                  outlineColor={errors.password ? 'red' : '#989898'}
                  activeOutlineColor={errors.password ? 'red' : '#222'}
                  autoCapitalize="none"
                  returnKeyType="next"
                  mode="outlined"
                  secureTextEntry={hide ? true : false}
                  selectionColor="#fff"
                  blurOnSubmit={false}
                  right={
                    <TextInput.Icon
                      icon={hide ? 'eye' : 'eye-off'}
                      onPress={() => setHide(!hide)}
                    />
                  }
                  name="password"
                  // autoFocus={true}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <Text style={styles.textConfirm}>{errors.password}</Text>
                )}
                {wrong === true && (
                  <Text style={styles.textWarning}>
                    * You have entered an invalid password
                  </Text>
                )}

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonTitle}>Sign in</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
          <View style={styles.reset}>
            <Text style={styles.resetTitle}>Forgot you password?</Text>
            <TouchableOpacity
              // onPress={() => navigation.navigate('Registration')}
              onPress={() => setModal(true)}>
              <Text style={styles.resetText}>
                Reset your wallet by using you seed phrase
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ModalReset
        visible={modal}
        hideModal={setModal}
        navigation={navigation}
        page={'Forgot'}
      />
    </>
  );
};
