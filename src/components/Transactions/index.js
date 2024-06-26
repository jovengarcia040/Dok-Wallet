import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import KeyboardArrow from 'assets/images/icons/keyboard-arrow-right.svg';
// import { dataTransactions } from "../../data";
import {getCurrentCoin} from 'redux/coins/coinsSelectors';
import {useDispatch, useSelector} from 'react-redux';
import TransactionsIcon from 'assets/images/send//trans.svg';
import styles from './TransactionsStyles';

const Transactions = ({renderList}) => {
  const [list, setList] = useState([]);
  // console.log("list:", list);
  const currentCoin = useSelector(getCurrentCoin);

  // useEffect(() => {
  //  setList(currentCoin.transactions);
  // }, [currentCoin]);

  useEffect(() => {
    setList(renderList);
  }, [renderList]);

  return (
    <>
      <ScrollView>
        {list?.length === 0 ? (
          <View style={{...styles.section, marginTop: 40}}>
            <TransactionsIcon height="114" width="114" />
            <Text style={styles.info}>
              Your transactions will be shown here. Make a payment by using
              wallet address or scan a QR Code
            </Text>
          </View>
        ) : (
          <>
            {list?.map((item, index) => (
              <TouchableOpacity
                style={{...styles.section, flexDirection: 'row'}}
                key={index}>
                <View style={styles.list}>
                  <View style={styles.box}>
                    <View style={styles.item}>
                      <Text style={styles.title}>{item.link}</Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.text}>{item.date}</Text>
                        <Text style={styles.hyphen}>&#45;</Text>
                        <Text style={styles.text}>{item.status}</Text>
                      </View>
                    </View>

                    <View style={styles.itemNumber}>
                      <View style={{flexDirection: 'row'}}>
                        {item.status === 'Failed' ? (
                          <>
                            <Text
                              style={{
                                ...styles.text,
                                marginRight: 5,
                              }}>
                              {item.amount}
                            </Text>
                            <Text style={styles.text}>{currentCoin.title}</Text>
                          </>
                        ) : (
                          <>
                            <Text
                              style={{
                                ...styles.text,
                                marginRight: 5,
                                color:
                                  Math.sign(item.amount) === -1
                                    ? 'red'
                                    : 'green',
                              }}>
                              {item.amount}
                            </Text>
                            <Text
                              style={{
                                ...styles.text,
                                color:
                                  Math.sign(item.amount) === -1
                                    ? 'red'
                                    : 'green',
                              }}>
                              {item.title}
                            </Text>
                          </>
                        )}
                      </View>
                      <Text style={styles.text}>${item.course}</Text>
                    </View>
                  </View>

                  <View>
                    <KeyboardArrow
                      height="30"
                      width="30"
                      style={styles.arrow}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </>
        )}
      </ScrollView>
    </>
  );
};

export default Transactions;
