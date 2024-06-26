import React from 'react';
import {View, Text, Linking, TouchableOpacity} from 'react-native';
import styles from './LearnResetStyles';

const LearnReset = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoList}>
        <Text style={styles.titleInfo}>Seed Phrase</Text>
        <Text style={styles.info}>
          A seed phrase, seed recovery phrase or backup seed phrase is a list of
          words which stores all the information needed to recover your digital
          assets.
        </Text>
        <Text style={styles.info}>
          Wallet software wiil typically generate a seed phrase and instruct the
          user to write it down on paper.
        </Text>
        <Text style={styles.info}>
          If the user's computer breaks or their hard drive becomes corrupted,
          they can download the same wallet software again and use the paper
          backup to get their digital assets back.
        </Text>
        <Text style={styles.span}>
          Anybody else who discovers the phrase can steal the coins, so it must
          be kept safe like jewels cash.
        </Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://en.bitcoin.it/wiki/Seed_phrase')
          }>
          <Text style={styles.learnText}>
            https://en.bitcoin.it/wiki/Seed_phrase
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LearnReset;
