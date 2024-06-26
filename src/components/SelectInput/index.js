import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './SelectInputStyles';
import AppStyles from 'assets/AppStyles';
import KeyboardArrow from 'assets/images/icons/keyboard-arrow-right.svg';
import ArrowDown from 'assets/images/buy/arrow-down.svg';
import {Dropdown} from 'react-native-element-dropdown';

const SelectInput = ({setValue, title, error, form, listData, number}) => {
  const [select, setSelect] = useState('');
  const [show, setShow] = useState(false);
  const [setData, setSetData] = useState([]);
  const [inputForm, setInputForm] = useState('');

  useEffect(() => {
    setValue(select);
  }, [select, setValue]);

  useEffect(() => {
    setInputForm(form);
  }, [form]);

  useEffect(() => {
    setSetData(listData);
  }, [listData]);

  const renderItem = item => {
    // console.log('item:', item);
    return (
      <View style={styles.list}>
        <View style={styles.iconBox}>
          <Text>{item.options.icon}</Text>
        </View>

        <View style={styles.items}>
          <Text
            style={inputForm === 'Crypto' ? styles.title : styles.titleAmount}>
            {item.options.page}
          </Text>
          <Text style={inputForm === 'Crypto' && styles.text}>
            {item.options.title}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.select}>
      <Text style={inputForm !== 'Network' && styles.selectTitle}>{title}</Text>
      <Dropdown
        style={[
          styles.dropdown,
          show && {borderColor: '#222'},
          error && {borderColor: 'red'},
        ]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={inputForm !== 'Network' && styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={setData}
        search={inputForm !== 'Network' && true}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!show ? 'Select' + ' ' + inputForm : '...'}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        searchPlaceholder="Search..."
        value={select}
        onChange={item => {
          setSelect(item.value);
          // setValue(item.value);
          setShow(false);
        }}
        renderRightIcon={() =>
          inputForm === 'Country' ? (
            <KeyboardArrow
              height="30"
              width="30"
              style={{fill: AppStyles.colour.gray}}
            />
          ) : (
            <ArrowDown
              height="30"
              width="30"
              style={{fill: AppStyles.colour.gray}}
            />
          )
        }
        renderItem={number === '2' ? false : renderItem}
      />
      {/* {error === true && (
        <Text style={styles.textConfirm}>{inputForm} is required</Text>
      )} */}
    </View>
  );
};

export default SelectInput;
