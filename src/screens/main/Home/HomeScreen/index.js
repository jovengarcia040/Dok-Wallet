import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {CryptoList} from 'components/CryptoList';
import styles from './HomeScreenStyles';
import {Portal, Provider} from 'react-native-paper';
import {ModalQR} from 'components/ModalQR';
import {useDispatch, useSelector} from 'react-redux';
import {
  setDefaultCurrentWallet,
  addWallet,
  setCurrentCoin,
} from 'redux/coins/coinsSlice';
import // getAllCoins,
// getCurrentWallet,
// getNewKey,
// getTotalWallets,
// getUserCoins,
'redux/coins/coinsSelectors';
import AddCircle from 'assets/images/icons/add-circle.svg';
import isJson from 'service/isJson';
import isValidHttpUrl from 'service/isValidHttpUrl';
import {
  allWalletsSelector,
  currentWalletSelector,
} from 'redux/wallets/walletsSlice';
import {ErrorBoundary} from 'react-error-boundary';
const HomeScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const [modalVisible, setmodalVisible] = useState(false);
  const [number, setNumber] = useState(1);
  // const allCoins = useSelector(getAllCoins);
  const currentWallet = useSelector(currentWalletSelector);
  // const allCoins = currentWallet.allCoins;
  const userCoins = currentWallet ? currentWallet.userCoins : [];
  // const userCoins = useSelector(getUserCoins);
  // const allWallets = useSelector(allWalletsSelector);
  // const totalWallets = allWallets.length;
  // const key = useSelector(getNewKey);
  const [newItem, setNewItem] = useState('');

  // useEffect(() => {
  //   if (!currentWallet) {
  //     const result = {};
  //     result.walletName = 'Main Wallet';
  //     result.userCoins = allCoins.filter(item => item.top === 'true');
  //     const allPage = new Set(result.userCoins.map(({page}) => page));
  //     result.otherCoins = [...allCoins.filter(({page}) => !allPage.has(page))];
  //     // result.key = key;
  //     dispatch(addWallet(result));
  //     // dispatch(setDefaultCurrentWallet());
  //   }
  // }, [allCoins, currentWallet, dispatch]);

  useEffect(() => {
    setList(userCoins);
  }, [userCoins]);

  useEffect(() => {
    dispatch(setCurrentCoin(newItem));
  }, [newItem, dispatch]);

  useEffect(() => {
    setmodalVisible(route.params?.showModal || false);
  }, [route]);

  return (
    <ErrorBoundary fallback={<div>Something went wrong in HomeScreen</div>}>
      <Provider>
        <Portal>
          <SafeAreaView style={styles.container}>
            <ScrollView>
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Total Assets</Text>
                <Text style={styles.headerNumber}>$0</Text>
              </View>

              <CryptoList
                number={number}
                list={list}
                navigation={navigation}
                setItem={setNewItem}
              />

              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('ManageCoins')}>
                <AddCircle height="25" width="25" style={styles.circle} />
                <Text style={styles.btnText}>More Coins</Text>
              </TouchableOpacity>
            </ScrollView>
          </SafeAreaView>
          <ModalQR
            visible={modalVisible}
            hideModal={setmodalVisible}
            data={
              route?.params?.data
                ? isJson(route?.params?.data)
                  ? JSON.parse(route?.params?.data).address
                  : isValidHttpUrl(route?.params?.data)
                  ? ''
                  : route?.params?.data
                : ''
            }
          />
        </Portal>
      </Provider>
    </ErrorBoundary>
  );
};
export default HomeScreen;
