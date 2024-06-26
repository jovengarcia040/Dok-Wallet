import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './CryptoRadioButtonStyles';
import {CheckBox} from '@rneui/themed';

const cryptoList = [
  {label: 'Employment'},
  {label: 'Investment'},
  {label: 'Other'},
];

const CryptoRadioButton = ({setValueRadioBtn}) => {
  const [checked, setChecked] = useState('Employment');
  // console.log('checked:', checked);

  useEffect(() => {
    setValueRadioBtn(checked);
  }, [checked, setValueRadioBtn]);

  return (
    <View style={styles.section}>
      <Text style={styles.title}>Source of Funds</Text>

      {cryptoList?.map((item, index) => (
        <View style={styles.itembox} key={index}>
          <CheckBox
            containerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 0,
              padding: 0,
              marginLeft: 0,
            }}
            checked={checked === item.label}
            onPress={() => {
              setChecked(item.label);
            }}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor="#F44D03"
          />
          <Text style={styles.item}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default CryptoRadioButton;
