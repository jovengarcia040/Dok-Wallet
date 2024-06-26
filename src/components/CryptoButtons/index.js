import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './CryptoButtonsStyles';
import AppStyles from 'assets/AppStyles';

const CryptoButtons = () => {
  const [active, setActive] = useState(1);

  return (
    <View style={styles.btnList}>
      <TouchableOpacity
        style={active === 1 ? styles.btnActive : styles.btnItem}
        onPress={() => setActive(1)}>
        <Text
          style={{
            ...styles.btnTitle,
            color:
              active === 1
                ? AppStyles.colour.backgroundColor
                : AppStyles.colour.background,
          }}>
          Buy Crypto
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={active === 2 ? styles.btnActive : styles.btnItem}
        onPress={() => setActive(2)}>
        <Text
          style={{
            ...styles.btnTitle,
            color:
              active === 2
                ? AppStyles.colour.backgroundColor
                : AppStyles.colour.background,
          }}>
          Sell Crypto
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CryptoButtons;
