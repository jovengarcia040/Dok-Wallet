import React, {useState} from 'react';
import {StyleSheet, Dimensions, View, Text} from 'react-native';
import AppStyles from 'assets/AppStyles';

const WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(WIDTH * 0.75);
const HEIGHT = Dimensions.get('window').height;

export const Learn = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoList}>
        <Text style={styles.titleInfo}>
          "With great power comes great responsibility"
        </Text>
        <Text style={styles.info}>
          A &nbsp;
          <Text style={styles.span}>seed phrase </Text> ensures that no one can
          access your funds except you. It`s like having the keys to a bank
          vault - you need to keep that phrase 100% SECURE so that you, and only
          you, can access it. But what if you lose or forget the phrase? Well,
          unfortunately, if you lose access to your &nbsp;
          <Text style={styles.span}>seed phrase </Text> then you lose access to
          all your crypto assets. So keeping your&nbsp;
          <Text style={styles.span}>seed phrase </Text> safe is super important,
          especially in the case your computer, smartphone, hardware wallet,
          etc.breaks or gets lost. This phrase will be what stands between you
          and keeping control of your assets.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppStyles.colour.backgroundColor,
    height: HEIGHT,
  },
  infoList: {
    marginTop: 20,
    width: ITEM_WIDTH,
    alignSelf: 'center',
  },
  titleInfo: {
    color: AppStyles.colour.font,
    fontSize: 25,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
    marginBottom: 20,
  },
  info: {
    color: AppStyles.colour.font,
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
  },
  span: {
    color: AppStyles.colour.font,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    fontWeight: 'bold',
  },
});
