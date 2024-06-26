import React, {useState, useEffect, useCallback} from 'react';
import styles from './SendFundsStyles';
import {
  TouchableOpacity,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {TextInput, Switch} from 'react-native-paper';
import {Formik} from 'formik';
import ModalSend from 'components/ModalSend';
import {useDispatch, useSelector} from 'react-redux';
import {
  getCurrentCoin,
  getCurrentWallet,
  getUserCoins,
  getWalletName,
  getWallets,
} from 'redux/coins/coinsSelectors';
import AppStyles from 'assets/AppStyles';
import {ModalQR} from 'components/ModalQR';
import isJson from 'service/isJson';
import isValidHttpUrl from 'service/isValidHttpUrl';
import {Portal, Provider} from 'react-native-paper';
import {validationSchemaSendFunds} from 'service/validationSchema';
import mathRound2 from 'service/mathRound2';
import mathRound6 from 'service/mathRound6';
import {
  addWallet,
  removeWallet,
  updateWalletName,
} from 'redux/coins/coinsSlice';
import {
  getLocalCurrency,
  isNotificationsSent,
} from 'redux/settings/settingsSelectors';
import {useFloatingHeight} from 'service/dimensions';

// import Qrcode from 'assets/images/icons/qrcode.svg';

const SendFunds = ({navigation, route}) => {
  const currentCoin = useSelector(getCurrentCoin);
  const userCoins = useSelector(getUserCoins);
  const wallets = useSelector(getWallets);
  const currentWalletName = useSelector(getWalletName);
  const currentWallet = useSelector(getCurrentWallet);
  const isNotification = useSelector(isNotificationsSent);
  const localCurrency = useSelector(getLocalCurrency);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [amountInput, setAmountInput] = useState('');
  const [modal, setModal] = useState(false);
  const getTotalAmount = currentCoin.totalAmount;
  const [maxAmount, setMaxAmount] = useState('0.00000');
  const [modalVisible, setmodalVisible] = useState(false);
  const [sendInput, setSendInput] = useState('');
  const [currencySymbol, setCurrencySymbol] = useState('');
  const floatingHeight = useFloatingHeight();
  const dispatch = useDispatch();

  let tmp = '';

  const handleSetMaxAmount = async maxValue => {
    await setAmountInput('');
    await setAmountInput(maxValue);
    setSendInput(tmp);
  };

  // useEffect(() => {
  //   setUserCoins(coins);
  // }, [coins]);

  useEffect(() => {
    let symbol = '';
    if (localCurrency === 'USD') {
      symbol = '$';
    }
    if (localCurrency === 'EURO') {
      symbol = '€';
    }
    setCurrencySymbol(symbol);
  }, [localCurrency]);

  useEffect(() => {
    if (getTotalAmount > 0) {
      setMaxAmount(getTotalAmount);
    }
  }, [getTotalAmount]);

  useEffect(() => {
    setmodalVisible(route.params?.showModal || false);
  }, [route]);

  useEffect(() => {
    setSendInput(isDataCorrect() || '');
  }, [route?.params?.data, isDataCorrect]);

  const isDataCorrect = useCallback(() => {
    return route?.params?.data
      ? isJson(route?.params?.data)
        ? JSON.parse(route?.params?.data).address
        : isValidHttpUrl(route?.params?.data)
        ? ''
        : route?.params?.data
      : '';
  }, [route]);

  const handleSubmitForm = values => {
    console.log('values:', values);
    setAmountInput(values.amount);
    if (values.amount > getTotalAmount) {
      setModal(true);
      return;
    }

    const updatedUserCoins = userCoins.filter(
      ({title}) => title !== currentCoin.title,
    );

    const changedCurrentCoin = {
      ...currentCoin,
      ...{
        totalAmount: String(
          mathRound6(Number(currentCoin.totalAmount) - Number(values.amount)),
        ),
      },
      ...{
        totalCourse: String(
          mathRound2(
            (Number(currentCoin.totalAmount) - Number(values.amount)) *
              Number(currentCoin.currencyRate),
          ),
        ),
      },
    };
    updatedUserCoins.unshift(changedCurrentCoin);

    const updatedWallet = {...currentWallet, userCoins: updatedUserCoins};

    const idx = wallets.findIndex(
      item => item.walletName === currentWalletName,
    );
    dispatch(removeWallet(idx));

    dispatch(addWallet(updatedWallet));
    dispatch(updateWalletName(updatedWallet));

    navigation.navigate({
      name: 'Sidebar',
      params: {
        showDialog: isNotification,
        dialog: {
          firstLine: `You just sent: ${values.amount} ${currentCoin.title}`,
          secondLine: `New balance:: ${changedCurrentCoin.totalAmount} ${currentCoin.title}`,
        },
      },
    });

    // navigation.navigate({
    //   name: 'HomeScreen',
    //   params: {
    //     showDialog: true,
    //     dialog: {
    //       firstLine: `You just sent: ${values.amount} ${currentCoin.title}`,
    //       secondLine: `New balance:: ${changedCurrentCoin.totalAmount} ${currentCoin.title}`,
    //     },
    //   },
    // });
  };

  return (
    <Provider>
      <Portal>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              ...styles.container,
              paddingVertical: floatingHeight > 400 ? 40 : 10,
            }}>
            <View style={styles.formInput}>
              <Text style={styles.title}>Your balance</Text>
              <View style={styles.box}>
                <Text style={styles.boxTitle}>{currentCoin.totalAmount}</Text>
                <Text style={styles.boxTitle}>{currentCoin.title}</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.boxBalance}>
                  {currencySymbol}
                  {currentCoin.totalCourse}
                </Text>
              </View>

              <Formik
                enableReinitialize={true}
                initialValues={{send: sendInput, amount: amountInput}}
                validationSchema={validationSchemaSendFunds}
                onSubmit={handleSubmitForm}>
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                  isValid,
                }) => (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'space-between',
                    }}>
                    <View style={styles.boxInput}>
                      <Text style={styles.listTitle}>Send to</Text>
                      <TextInput
                        style={styles.input}
                        label="Enter wallet adress or scan QR"
                        theme={{
                          colors: {
                            onSurfaceVariant: errors
                              ? AppStyles.colour.gray
                              : 'red',
                          },
                        }}
                        outlineColor={
                          errors.send ? 'red' : AppStyles.colour.gray
                        }
                        activeOutlineColor={
                          errors.send ? 'red' : AppStyles.colour.font
                        }
                        autoCapitalize="none"
                        returnKeyType="next"
                        mode="outlined"
                        selectionColor={AppStyles.colour.backgroundColor}
                        blurOnSubmit={false}
                        name="send"
                        onChangeText={
                          ((tmp = values.send), handleChange('send'))
                        }
                        onBlur={handleBlur('send')}
                        value={values.send}
                        onSubmitEditing={handleSubmit}
                        right={
                          <TextInput.Icon
                            style={styles.scan}
                            icon="qrcode-scan"
                            iconColor="#ffff"
                            size={15}
                            onPress={() => {
                              navigation.navigate('Scanner', {
                                page: 'SendFunds',
                              });
                            }}
                          />
                        }
                      />
                      {errors.send && touched.send && (
                        <Text style={styles.textConfirm}>{errors.send}</Text>
                      )}
                    </View>
                    {/* //////////amount//////////// */}
                    <View style={styles.boxInput}>
                      <Text style={styles.listTitle}>Amount</Text>
                      <TextInput
                        style={styles.input}
                        label="Enter amount of Crypto to send"
                        theme={{
                          colors: {
                            onSurfaceVariant: errors
                              ? AppStyles.colour.gray
                              : 'red',
                          },
                        }}
                        outlineColor={
                          errors.amount ? 'red' : AppStyles.colour.gray
                        }
                        activeOutlineColor={
                          errors.amount ? 'red' : AppStyles.colour.font
                        }
                        autoCapitalize="none"
                        returnKeyType="next"
                        mode="outlined"
                        selectionColor={AppStyles.colour.backgroundColor}
                        blurOnSubmit={false}
                        name="amount"
                        onChangeText={handleChange('amount')}
                        onBlur={handleBlur('amount')}
                        value={values.amount}
                        onSubmitEditing={handleSubmit}
                        keyboardType="number-pad"
                        type="number"
                      />
                      <TouchableOpacity
                        style={styles.btnMax}
                        onPress={() => {
                          handleSetMaxAmount(maxAmount);
                        }}>
                        <Text style={styles.btnText}>Max</Text>
                      </TouchableOpacity>

                      {errors.amount && touched.amount && (
                        <Text style={styles.textConfirm}>{errors.amount}</Text>
                      )}
                    </View>

                    <View style={styles.blockList}>
                      <Text style={styles.blockTitle}>Blockchain free</Text>
                      <View style={{direction: 'rtl'}}>
                        <View style={styles.box}>
                          <Text style={styles.boxText}>
                            {currentCoin.totalAmount}
                          </Text>
                          <Text style={{...styles.boxText, marginLeft: 5}}>
                            {currentCoin.title}
                          </Text>
                        </View>
                        <View style={{...styles.box, alignSelf: 'flex-end'}}>
                          <Text style={styles.boxText}>
                            {currencySymbol}
                            {currentCoin.totalCourse}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.switchList}>
                      <Switch
                        value={isSwitchOn}
                        onValueChange={onToggleSwitch}
                        trackColor={{false: 'gray', true: '#E8E8E8'}}
                        thumbColor={isSwitchOn ? '#F44D03' : 'white'}
                        ios_backgroundColor="#E8E8E8"
                      />
                      <Text style={styles.switchText}>Fast Transaction</Text>
                    </View>

                    <View>
                      <TouchableOpacity
                        disabled={isValid ? false : true}
                        style={{
                          ...styles.button,
                          backgroundColor: isValid
                            ? AppStyles.colour.background
                            : AppStyles.colour.gray,
                        }}
                        onPress={handleSubmit}>
                        <Text style={styles.buttonTitle}>Send</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </Formik>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <ModalSend
          visible={modal}
          hideModal={setModal}
          navigation={navigation}
        />
        <ModalQR
          visible={modalVisible}
          hideModal={setmodalVisible}
          data={isDataCorrect()}
        />
      </Portal>
    </Provider>
  );
};

export default SendFunds;
