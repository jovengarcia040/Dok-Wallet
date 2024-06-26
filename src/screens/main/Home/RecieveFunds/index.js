import React, {useState, useEffect, useRef, useCallback} from 'react';
import styles from './RecieveFundsStyles';
import QRCode from 'react-native-qrcode-svg';
import {
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import CopyIcon from 'assets/images/icons/copy.svg';
import AppStyles from 'assets/AppStyles';
import Share from 'react-native-share';
import {CommonActions} from '@react-navigation/native';
import {useKeyboardHeight} from 'service/useKeyboardHeight';
import Clipboard from '@react-native-clipboard/clipboard';
import {useSelector} from 'react-redux';
import {getCurrentCoin} from 'redux/coins/coinsSelectors';
import {getLocalCurrency} from 'redux/settings/settingsSelectors';

const RecieveFunds = ({navigation}) => {
  const [isShowAddress, setIsShowAddress] = useState(true);
  const [crypto, setCrypto] = useState(0);
  const [currency, setCurrency] = useState(0);
  const [productQRref, setProductQRref] = useState(initialData);

  const currentCoin = useSelector(getCurrentCoin);
  const localCurrency = useSelector(getLocalCurrency);

  const initialData = JSON.stringify({crypto, currency, address});

  const currencyRate = 26345.2;

  const address = 'VBORw0KGgoAAAANSUhEUgAAAOEAA1ehd1W';

  const SCREEN_WIDTH = Dimensions.get('window').width;

  useEffect(() => {
    setProductQRref(JSON.stringify({crypto, currency, address}));
  }, [currency, crypto, address]);

  useEffect(() => {
    navigation.dispatch(CommonActions.setParams({shareQR}));
  }, [navigation, shareQR]);

  const handleCryptoChange = data => {
    if (data === ',') {
      return;
    }
    if (/^[0-9]*\.?\d*$/.test(data)) {
      setCrypto(data);
      setCurrency(String(Number(data) * Number(currencyRate)));
    }
  };
  const handleCurrencyChange = data => {
    if (data === ',') {
      return;
    }
    if (/^[0-9]*\.?\d*$/.test(data)) {
      setCurrency(data);
      setCrypto(String(Number(data) / Number(currencyRate)));
    }
  };

  const keyboardHeight = useKeyboardHeight();

  const viewRef = useRef();

  const callback = useCallback(
    dataURL => {
      let shareImageBase64 = {
        title: 'React Native',
        url: `data:image/png;base64,${dataURL}`,
        subject: address, //  for email
        type: 'PNG',
        filename: 'QRCode',
        message: address,
      };

      Share.open(shareImageBase64).catch(error => console.log(error));
    },
    [address],
  );

  const shareQR = useCallback(async () => {
    viewRef.current.toDataURL(callback);
  }, [viewRef, callback]);

  return (
    <View
      style={styles.container}
      behavior={keyboardHeight}
      scrollEnabled={false}>
      <ScrollView>
        <Text style={styles.title}>
          Receive funds by providing your address or QR code
        </Text>
        <Text style={styles.qrContainer}>
          <QRCode
            value={productQRref}
            size={SCREEN_WIDTH * 0.7}
            quietZone={SCREEN_WIDTH * 0.12}
            getRef={ref => (viewRef.current = ref)}
          />
        </Text>
        {isShowAddress && <Text style={styles.addressTitle}>YOUR ADDRESS</Text>}
        {isShowAddress && (
          <View style={styles.addressContainer}>
            <Text style={styles.address}>{address}</Text>
            <TouchableOpacity
              onPress={() => {
                Clipboard.setString(address);
              }}>
              <CopyIcon
                fill={AppStyles.colour.background}
                width={20}
                height={30}
              />
            </TouchableOpacity>
          </View>
        )}
        <Text style={{...styles.addressTitle, marginTop: 20}}>
          ASK FOR A SPECIFIC AMOUNT
        </Text>
        <View style={styles.inputContainer}>
          <View>
            <Text style={styles.currencyTitle}>{currentCoin.title}</Text>
            <TextInput
              onChangeText={handleCryptoChange}
              value={crypto.toString()}
              keyboardType="numeric"
              style={styles.input}
              onFocus={() => {
                setIsShowAddress(false);
              }}
              onBlur={() => {
                setIsShowAddress(true);
              }}
              theme={{colors: {primary: AppStyles.colour.gray}}}
            />
          </View>
          <View>
            <Text style={styles.currencyTitle}>{localCurrency}</Text>
            <TextInput
              onChangeText={handleCurrencyChange}
              value={currency.toString()}
              keyboardType="numeric"
              style={styles.input}
              onFocus={() => {
                setIsShowAddress(false);
              }}
              onBlur={() => {
                setIsShowAddress(true);
              }}
              theme={{colors: {primary: AppStyles.colour.gray}}}
            />
          </View>
        </View>
      </ScrollView>
      {/* <TouchableOpacity onPress={shareQR}>
        <Text>SHARE</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default RecieveFunds;
