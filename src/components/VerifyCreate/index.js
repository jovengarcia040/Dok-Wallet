import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {words} from 'assets/data';
// import wallet from '../../crypto';
// console.log(wallet);
// import "react-native-get-random-values";
// import "@ethersproject/shims";
// import { ethers } from "ethers";
// import * as SecureStore from "expo-secure-store";
import styles from './VerifyCreateStyles';
import {useFloatingHeight} from 'service/dimensions';
import {
  getCurrentWallet,
  getNewKey,
  getWalletPhrase,
} from 'redux/coins/coinsSelectors';
import {fromKey} from 'crypto';
import {useSelector} from 'react-redux';
import {currentWalletSelector} from 'redux/wallets/walletsSlice';

export const VerifyCreate = ({navigation, route}) => {
  const nextRoute = route?.params?.nextRoute;
  const reset = route?.params?.reset;
  const [random, setRandom] = useState([]);
  const [firstRender, setFirstRender] = useState(false);
  const floatingHeight = useFloatingHeight();
  // const phrase = useSelector(getWalletPhrase);

  const currentWallet = useSelector(currentWalletSelector);

  // const walletInfo = useSelector(getNewKey);
  // const wallet = fromKey(privateKey);
  // if (!walletInfo) {
  //   return null;
  // }
  if (!currentWallet?.phrase) {
    return;
  }
  const words = currentWallet.phrase.split(' ').map(w => ({word: w}));
  // const words = walletInfo.phrase.split(' ').map(w => ({word: w}));
  // useEffect(() => {
  //   if (!firstRender) {
  //     let result = [];
  //     for (let i = 1; i <= 12; i++) {
  //       result.push(words[Math.floor(Math.random() * words.length)]);
  //     }
  //     let newResult = result.map((item, index) => ({
  //       ...item,
  //       id: index + 1,
  //     }));
  //     setFirstRender(true);
  //     setRandom(newResult);
  //   }
  // });

  // useEffect(() => {
  //   const store = async (phrase) => {
  //     const username = "eth";
  //     await SecureStore.setItemAsync(username, phrase); //Keychain.setGenericPassword(username, phrase);
  //   };

  //   if (!firstRender) {
  //     const wallet = ethers.Wallet.createRandom();
  //     store(wallet.mnemonic.phrase);
  //     let result = [];
  //     result = wallet.mnemonic.phrase.split(" ").map((w) => ({ word: w })); //words[Math.floor(Math.random() * words.length)]);
  //     console.log(`result: len: ${result.length} ${result}`);

  //     let newResult = result.map((item, index) => ({
  //       ...item,
  //       id: index + 1,
  //     }));
  //     console.log(`333  ${newResult}`);
  //     setFirstRender(true);
  //     setRandom(newResult);

  //     console.log("4444");
  //   }
  // });

  return (
    <View
      style={{
        ...styles.container,
        paddingVertical: floatingHeight > 400 ? 40 : 10,
      }}>
      <View style={styles.section}>
        <Text style={styles.title}>Your{'\n'}seed phrase</Text>
        <Text style={styles.textFirst}>
          Get a pan and paper before you start.
        </Text>
        <Text style={styles.text}>
          Write down these words in the right order and save them somewhere
          safe.
        </Text>

        <View style={styles.wordsList}>
          <FlatList
            data={words}
            numColumns={3}
            renderItem={({item, index}) => (
              <View style={styles.wordsBox} key={index}>
                <Text style={styles.number}>{item.id}</Text>
                <View style={styles.wordContainerIOS}>
                  <Text style={styles.word}>{item.word}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          navigation.navigate('Verify', {
            random: words,
            nextRoute,
            reset,
          })
        }>
        <Text style={styles.btnTitle}>I`ve written it down</Text>
      </TouchableOpacity>
      <Text style={styles.info}>
        You will confirm this phrase on the next screen
      </Text>
    </View>
  );
};
