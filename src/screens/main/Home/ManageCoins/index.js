import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View, Text, SafeAreaView, Icon} from 'react-native';
import {CryptoList} from 'components/CryptoList';
import {getUserCoins} from 'redux/coins/coinsSelectors';
import {useSelector, useDispatch} from 'react-redux';
import {Searchbar} from 'react-native-paper';
import styles from './ManageCoinsStyles';
import ModalAddToken from 'components/ModalAddToken';
import ModalAddCoins from 'components/ModalAddCoins';
import Pluscircleo from 'assets/images/icons/pluscircleo.svg';
import {iconsList} from 'data/currency';
import {currentWalletSelector} from 'redux/wallets/walletsSlice';
import {ErrorBoundary} from 'react-error-boundary';

const ManageCoins = ({navigation}) => {
  const [list, setList] = useState([]);
  console.log('list:', list);
  const [number, setNumber] = useState(2);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalAddTokenVisible, setModalAddTokenVisible] = useState(false);
  const [modalAddCoinsVisible, setModalAddCoinsVisible] = useState(false);
  const currentWallet = useSelector(currentWalletSelector);
  const userCoins = currentWallet.userCoins;

  useEffect(() => {
    setList(userCoins);
  }, [userCoins]);

  const handleSearch = query => {
    setSearchQuery(query);
    const newList = userCoins?.filter(item => {
      const itemList = item.page ? item.page.toUpperCase() : ''.toUpperCase();
      const queryData = query.toUpperCase();
      return itemList.indexOf(queryData) > -1;
    });
    console.log('newList:', newList);
    setList(newList);
  };

  return (
    <ErrorBoundary fallback={<div>Something went wrong in ManageCoins</div>}>
      <SafeAreaView style={styles.container}>
        <Searchbar
          placeholder="Search"
          value={searchQuery}
          style={styles.input}
          onChangeText={handleSearch}
        />

        <CryptoList number={number} list={list} />

        <View style={styles.btnList}>
          <TouchableOpacity
            style={styles.btnAdd}
            onPress={() => setModalAddCoinsVisible(true)}>
            <Pluscircleo height="24" width="24" style={styles.circle} />

            <View style={styles.box}>
              <Text style={styles.title}>Add Coin</Text>
              <Text style={styles.text}>Select from the supported list</Text>
            </View>
          </TouchableOpacity>

          <ModalAddCoins
            visible={modalAddCoinsVisible}
            hideModal={setModalAddCoinsVisible}
          />

          <TouchableOpacity
            style={styles.btnAdd}
            onPress={() => setModalAddTokenVisible(true)}>
            <Pluscircleo height="24" width="24" style={styles.circle} />
            <View style={styles.box}>
              <Text style={styles.title}>Add Custum Token</Text>
              <Text style={styles.text}>Add any ERC20/BEP20 Token</Text>
            </View>
          </TouchableOpacity>
          <ModalAddToken
            visible={modalAddTokenVisible}
            hideModal={setModalAddTokenVisible}
            navigation={navigation}
          />
        </View>
      </SafeAreaView>
    </ErrorBoundary>
  );
};

export default ManageCoins;
