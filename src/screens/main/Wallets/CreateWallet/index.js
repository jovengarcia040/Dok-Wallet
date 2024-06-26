import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';
import AppStyles from 'assets/AppStyles';
import {wallet} from 'assets/data';
import styles from './CreateWalletStyles';
import {addWallet, removeWallet} from 'redux/coins/coinsSlice';
import {
  getAllCoins,
  getWallets,
  getWalletName,
  getNewKey,
} from 'redux/coins/coinsSelectors';
import {useSelector, useDispatch} from 'react-redux';
import Exclamationcircleo from 'assets/images/icons/exclamationcircle.svg';
import {useFloatingHeight} from 'service/dimensions';
import {newWallet} from 'crypto';
import {
  allWalletsSelector,
  currentWalletIndexSelector,
  currentWalletSelector,
  updateWalletName,
} from 'redux/wallets/walletsSlice';

// import { useNavigationState, CommonActions, StackActions } from "@react-navigation/native";

const CreateWallet = ({navigation, route}) => {
  const dispatch = useDispatch();
  const walletName = route?.params?.walletName;
  const wallItem = route?.params?.item;
  const currentWallet = useSelector(currentWalletSelector);
  const currentWalletIndex = useSelector(currentWalletIndexSelector);
  const allWallets = useSelector(allWalletsSelector);
  // const [currentWalletName, setCurrentWalletName] = useState(walletName);
  // const currentWalletName = currentWallet.name;
  // const allCoins = useSelector(getAllCoins);
  // const allWallets = useSelector(getWallets);
  const defaultNewWalletName = currentWallet.walletName; //`Wallet ${allWallets.length}`;
  const [walletCreate, setWalletCreate] = useState('');
  const floatingHeight = useFloatingHeight();
  // const key = useSelector(getNewKey);

  const [wrong, setWrong] = useState(false);
  console.log('wrong:', wrong);
  // console.log("walletCreate:", walletCreate);
  //------------------ for goBack -------------------//
  // const currentRoutes = useNavigationState((state) => state.routes);

  // useEffect(() => {
  //   navigation.dispatch((state) => {
  //     const routes = state.routes.filter((r) => {
  //       return r.name !== "Verify" && r.name !== "VerifyCreate";
  //     });

  //     const isHome = currentRoutes.find(({ name }) => name === "Sidebar");
  //     isHome ? null : routes.unshift({ name: "Sidebar" });

  //     return CommonActions.reset({
  //       ...state,
  //       routes,
  //       index: routes.length - 1,
  //     });
  //   });
  // }, [route]);

  //------------------ for goBack -------------------//
  useEffect(() => {
    // if (wallItem === 'Reset') {
    //   // setWalletCreate(currentWalletName);
    // }
    // if (wallItem === 'Create') {
    setWalletCreate(defaultNewWalletName);
    // }
  }, [wallItem, /*currentWalletName,*/ defaultNewWalletName]);

  const validateNewWalletName = value => {
    if (currentWallet.walletName !== value) {
      const wrong = allWallets.some(({walletName}, index) => {
        if (walletName === value && index !== currentWalletIndex) {
          return true;
        }
        return false;
      });
      setWrong(wrong);
    }
    // const isWalletName = allWallets.find(
    //   ({walletName}) => walletName.toLowerCase() === value.toLowerCase(),
    // );
    // if (wallItem !== 'Reset') {
    //   if (
    //     isWalletName &&
    //     isWalletName?.walletName?.toLowerCase() !== walletName?.toLowerCase()
    //   ) {
    //     setWrong(true);
    //   } else {
    //     setWrong(false);
    //   }
    // } else {
    //   if (
    //     isWalletName &&
    //     isWalletName?.walletName?.toLowerCase() !==
    //       currentWalletName.toLowerCase()
    //   ) {
    //     setWrong(true);
    //   } else {
    //     setWrong(false);
    //   }
    // }
  };

  const handleSubmit = async values => {
    const result = {};
    result.walletName = values.name;
    if (walletName) {
      console.log('walletName:', walletName);
      // const [wallet] = allWallets.filter(
      //   item => item.walletName === walletName,
      // );
      // result.userCoins = wallet.userCoins;
      // result.otherCoins = wallet.otherCoins;
      // const idx = allWallets.findIndex(item => item.walletName === walletName);
      // dispatch(removeWallet(idx));
    } else if (wallItem === 'Reset') {
      // result.userCoins = allCoins.filter(item => item.top === 'true');
      // const allPage = new Set(result.userCoins.map(({page}) => page));
      // result.otherCoins = [...allCoins.filter(({page}) => !allPage.has(page))];
      // const idx = allWallets.findIndex(
      //   item => item.walletName === currentWalletName,
      // );
      // dispatch(removeWallet(idx));
    } else {
      // result.userCoins = allCoins.filter(item => item.top === 'true');
      // const allPage = new Set(result.userCoins?.map(({page}) => page));
      // result.otherCoins = [...allCoins.filter(({page}) => !allPage.has(page))];
    }
    // result.key = key
    // const wallet = await newWallet();
    // result.phrase = wallet.mnemonic.phrase;
    // dispatch(addWallet(result));
    dispatch(updateWalletName(result.walletName));
    navigation.navigate('Sidebar', {
      screen: 'Home',
    });
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('* Name cannot be empty'),
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          ...styles.container,
          paddingVertical: floatingHeight > 400 ? 40 : 10,
        }}>
        <View style={styles.formInput}>
          <Text style={styles.brand}>{walletName || walletCreate}</Text>
          <Formik
            enableReinitialize={true}
            initialValues={{
              name: walletName || walletCreate,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'space-between',
                }}>
                <View>
                  <TextInput
                    style={styles.input}
                    label="Name"
                    textColor="black"
                    theme={{
                      colors: {
                        onSurfaceVariant: errors
                          ? AppStyles.colour.gray
                          : 'red',
                      },
                    }}
                    outlineColor={errors.name ? 'red' : AppStyles.colour.gray}
                    activeOutlineColor={
                      errors.name ? 'red' : AppStyles.colour.font
                    }
                    autoCapitalize="none"
                    returnKeyType="next"
                    mode="outlined"
                    selectionColor={AppStyles.colour.backgroundColor}
                    blurOnSubmit={false}
                    name="name"
                    autoFocus={true}
                    onChangeText={handleChange('name')}
                    // onBlur={handleBlur('name')}
                    onBlur={() => {
                      validateNewWalletName(values.name);
                      handleBlur('currentPassword');
                    }}
                    value={values.name}
                    // onSubmitEditing={handleSubmit}
                  />
                  {errors.name && touched.name && (
                    <Text style={styles.textConfirm}>{errors.name}</Text>
                  )}

                  {wrong === true && (
                    <Text style={styles.textWarning}>
                      * Choose a different wallet name
                    </Text>
                  )}

                  <View>
                    <Text style={styles.listTitle}>Secret phrase backups</Text>
                    {wallet.map((item, index) => (
                      <TouchableOpacity style={styles.item} key={index}>
                        <View style={styles.itemIcon}>
                          <Text>{item.icon}</Text>
                        </View>

                        <View style={styles.itemSection}>
                          <Text style={styles.itemName}>{item.title}</Text>
                          <Text
                            style={{
                              ...styles.itemText,
                              color: item.body === 'Active' ? 'green' : 'red',
                            }}>
                            {item.body}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                    <View style={styles.infoSection}>
                      <Exclamationcircleo height="20" width="20" fill="black" />
                      <Text style={styles.info}>
                        We highly recommend completing both backup options to
                        help prevent the loss your crypto.
                      </Text>
                    </View>
                  </View>
                </View>

                <View>
                  <TouchableOpacity
                    disabled={wrong && true}
                    style={{...styles.button, opacity: wrong && 0.5}}
                    onPress={handleSubmit}>
                    <Text style={styles.buttonTitle}>
                      {walletName ? 'Update Wallet' : wallItem + ' ' + 'Wallet'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreateWallet;
