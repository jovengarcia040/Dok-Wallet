import React, {useState, useEffect} from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import styles from './ModalAddCoinsStyles';
import CloseIcon from 'assets/images/icons/close.svg';
import AppStyles from 'assets/AppStyles';
import {CryptoList} from 'components/CryptoList';
import {
  getAllCoins,
  getUserCoins,
  getOtherCoins,
  getWalletName,
  getWallets,
} from 'redux/coins/coinsSelectors';
import {
  removeWallet,
  addWallet,
  updateWalletName,
} from 'redux/coins/coinsSlice';
import {useSelector, useDispatch} from 'react-redux';
import {Searchbar} from 'react-native-paper';
import {
  currentWalletSelector,
  updateUserCoins,
} from 'redux/wallets/walletsSlice';
import {ErrorBoundary} from 'react-error-boundary';

const ModalAddCoins = ({visible, hideModal, navigation}) => {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const [number, setNumber] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');
  const [newItem, setNewItem] = useState('');
  const currentWallet = useSelector(currentWalletSelector);
  const filteredList = currentWallet.otherCoins;

  const handleClose = () => {
    hideModal(false);
    setSearchQuery('');
  };

  useEffect(() => {
    if (!newItem) {
      return;
    }
    const result = {};
    const userCoins = [...currentWallet.userCoins];
    userCoins.push(newItem);

    result.userCoins = userCoins;
    result.otherCoins = currentWallet.otherCoins.filter(
      ({page}) => newItem.page !== page,
    );

    dispatch(updateUserCoins(result));
    // result.walletName = currentWallet.walletName;

    // const idx = allWallets.findIndex(
    //   ({walletName}) => walletName === result.walletName,
    // );

    // dispatch(removeWallet(idx));
    // dispatch(addWallet(result));
    // dispatch(updateWalletName(result));
    setNewItem(null);
    setList(result.otherCoins);
  }, [newItem, currentWallet, dispatch]);

  useEffect(() => {
    setList(currentWallet.otherCoins);
  }, [visible, currentWallet]);

  const handleSearch = query => {
    setSearchQuery(query);
    const newList = filteredList.filter(item => {
      const itemList = item.page ? item.page.toUpperCase() : ''.toUpperCase();
      const queryData = query.toUpperCase();
      return itemList.indexOf(queryData) > -1;
    });
    setList(newList);
  };

  return (
    <ErrorBoundary fallback={<div>Something went wrong in ModalAddCoins</div>}>
      <Modal
        animationType="slide"
        transparent={true}
        statusBarTranslucent={true}
        visible={visible}
        onRequestClose={() => {
          handleClose();
          navigation.navigate('Home');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView keyboardShouldPersistTaps={'always'}>
              <View style={styles.modalHeader}>
                <Text style={styles.headerText}>Add Supported coin</Text>
                <TouchableOpacity style={styles.btnClose} onPress={handleClose}>
                  <CloseIcon fill={AppStyles.colour.font} width={13} />
                </TouchableOpacity>
              </View>

              <View style={styles.modalBody}>
                <Searchbar
                  placeholder="Search"
                  value={searchQuery}
                  style={styles.input}
                  onChangeText={handleSearch}
                />
                <CryptoList number={number} list={list} setItem={setNewItem} />
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </ErrorBoundary>
  );
};

export default ModalAddCoins;
