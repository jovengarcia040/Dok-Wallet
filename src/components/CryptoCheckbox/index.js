import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './CryptoCheckboxStyles';
import {CheckBox} from '@rneui/themed';

const CryptoCheckbox = ({
  setTermsCheck,
  title,
  number,
  setRiskCheck,
  setInfoCheck,
}) => {
  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => setChecked(!checked);

  useEffect(() => {
    if (number === '1') {
      setTermsCheck(checked);
    }
  }, [checked, number, setTermsCheck]);

  useEffect(() => {
    if (number === '2') {
      setRiskCheck(checked);
    }
  }, [checked, number, setRiskCheck]);

  useEffect(() => {
    if (number === '3') {
      setInfoCheck(checked);
    }
  }, [checked, number, setInfoCheck]);

  return (
    <View style={styles.checkbox}>
      <CheckBox
        containerStyle={{
          backgroundColor: 'transparent',
          borderWidth: 0,
          padding: 0,
          marginLeft: 0,
        }}
        size={24}
        checked={checked}
        onPress={toggleCheckbox}
        iconType="material-community"
        checkedIcon="checkbox-marked"
        uncheckedIcon="checkbox-blank-outline"
        checkedColor="#F44D03"
      />

      {number !== '3' ? (
        <Text>
          <Text style={styles.text}>I accept the</Text>
          <Text style={styles.checkText}>&nbsp;{title}</Text>
        </Text>
      ) : (
        <Text style={{...styles.text}}>{title}</Text>
      )}
    </View>
  );
};

export default CryptoCheckbox;
