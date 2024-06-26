import {View, Text} from 'react-native';
import styles from './LocalCurrencyStyles';
import {localCurrencyList} from 'data/currency';
import {CheckBox} from '@rneui/themed';
import RadioOn from 'assets/images/icons/radio-button-on.svg';
import {useDispatch, useSelector} from 'react-redux';
import {getLocalCurrency} from 'redux/settings/settingsSelectors';
import {setLocalCurrency} from 'redux/settings/settingsSlice';

const LocalCurrency = () => {
  const localCurrency = useSelector(getLocalCurrency);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {localCurrencyList?.map((item, index) => (
        <View style={styles.list} key={index}>
          <View
            style={
              localCurrency === item.id ? styles.iconBoxChecked : styles.iconBox
            }>
            <Text>{localCurrency === item.id && item.icon}</Text>
          </View>

          <View style={styles.items}>
            <Text style={styles.title}>{item.label}</Text>
          </View>
          <CheckBox
            containerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 0,
              padding: 0,
              marginLeft: 0,
            }}
            checked={localCurrency === item.id}
            onPress={() => {
              dispatch(setLocalCurrency(item.id));
            }}
            checkedIcon={<RadioOn width="25" height="25" color="#F44D03" />}
            uncheckedIcon="circle-o"
            checkedColor="#F44D03"
          />
        </View>
      ))}
    </View>
  );
};

export default LocalCurrency;
