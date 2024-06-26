import React, {useState, useEffect, useCallback} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  RefreshControl,
} from 'react-native';
import styles from './SendScreenStyles';
import AppStyles from 'assets/AppStyles';
import SendIcon from 'assets/images/send/send.svg';
import RecIcon from 'assets/images/send/rec.svg';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentCoin} from 'redux/coins/coinsSelectors';
import Transactions from 'components/Transactions';
import SortTransactions from 'components/SortTransactions';
import {Provider, Portal} from 'react-native-paper';
import FilterIcon from 'assets/images/icons/filter-list.svg';
import CopyIcon from 'assets/images/icons/copy.svg';
import Clipboard from '@react-native-clipboard/clipboard';
import {getLocalCurrency} from 'redux/settings/settingsSelectors';

const WIDTH = Dimensions.get('window').width;

const SendScreen = ({navigation, route}) => {
  const currentCoin = useSelector(getCurrentCoin);
  const localCurrency = useSelector(getLocalCurrency);
  const allTransactions = currentCoin.transactions;
  const [modalVisible, setmodalVisible] = useState(false);
  const [sort, setSort] = useState('Data Descending');
  const [filter, setFilter] = useState('');
  const [renderList, setRenderList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const [currencySymbol, setCurrencySymbol] = useState('');
  const address = currentCoin.address;
  //const address = '0x123f681646d4a755815f9cb19e18565';

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
    setRenderList(allTransactions);
  }, [currentCoin, allTransactions]);

  useEffect(() => {
    if (filter === 'Received') {
      const receivedList = allTransactions.filter(item => item.amount > -1);
      setRenderList(receivedList);
    } else if (filter === 'Send') {
      const sendList = allTransactions.filter(item => item.amount < 1);
      setRenderList(sendList);
    } else if (filter === 'Pending') {
      const pendingList = allTransactions.filter(
        item => item.status === filter,
      );
      setRenderList(pendingList);
    } else if (filter === 'None') {
      setRenderList('');
    }
  }, [filter, allTransactions]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      // update data request here
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <Provider>
      <Portal>
        <SafeAreaView style={styles.container}>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <View style={styles.box}>
              <View style={styles.header}>
                <Text style={styles.headerTitle}>24 Hours</Text>
                <Text style={styles.headerNumber}>- 3.87%</Text>
              </View>
              <View style={styles.coinList}>
                <View style={styles.coinIcon}>
                  <Text style={styles.currentIcon}>{currentCoin.icon}</Text>
                </View>
                <View style={styles.coinBox}>
                  <Text style={{...styles.coinNumber, marginRight: 5}}>
                    {currentCoin.totalAmount}
                  </Text>
                  <Text style={styles.coinNumber}>{currentCoin.title}</Text>
                </View>
                <Text style={styles.coinSum}>
                  {currencySymbol}
                  {currentCoin.totalCourse}
                </Text>
              </View>
              <View style={styles.btnList}>
                <TouchableOpacity
                  style={{...styles.btn, ...styles.shadow, marginRight: 20}}
                  onPress={() => navigation.navigate('SendFunds')}>
                  <SendIcon style={styles.icon} />
                  <Text style={styles.btnText}>Send</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{...styles.btn, ...styles.shadow}}
                  onPress={() => navigation.navigate('RecieveFunds')}>
                  <RecIcon style={styles.icon} />
                  <Text style={styles.btnText}>Receive</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.addresList}>
                <View style={styles.boxAdress}>
                  <Text style={styles.addresTitle}>Your Address:</Text>
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

                <Text style={styles.address}>{address}</Text>
              </View>

              <Text style={styles.titleTrans}>Transactions</Text>
            </View>
            <View style={styles.borderBox}>
              <View style={styles.sortList}>
                <Text>
                  <Text style={styles.sortTitle}>Sort by:</Text>
                  <Text style={styles.titleItem}>{sort}</Text>
                </Text>
                <TouchableOpacity onPress={() => setmodalVisible(true)}>
                  <FilterIcon height="30" width="30" fill="black" />
                </TouchableOpacity>
              </View>
            </View>
            <Transactions renderList={renderList} />
          </ScrollView>
        </SafeAreaView>
        <SortTransactions
          visible={modalVisible}
          hideModal={setmodalVisible}
          setSort={setSort}
          setFilter={setFilter}
        />
      </Portal>
    </Provider>
  );
};

export default SendScreen;
