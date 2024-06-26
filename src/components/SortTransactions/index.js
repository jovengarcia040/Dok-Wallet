import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import styles from './SortTransactionsStyles';
import AppStyles from 'assets/AppStyles';
import {Modal} from 'react-native-paper';
import {CheckBox} from '@rneui/themed';
import RadioOn from 'assets/images/icons/radio-button-on.svg';

const WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(WIDTH * 0.7);
const {height: screenHeight} = Dimensions.get('window');
const modalHeight = screenHeight / 1.6;

const SortTransactions = ({visible, hideModal, setSort, setFilter}) => {
  const [value, setValue] = useState('Data Descending');
  const [status, setStatus] = useState('Send');

  const handleSumbit = () => {
    setSort(value);
    setFilter(status);
  };

  const sortList = [
    {label: 'Date Ascending'},
    {label: 'Data Descending'},
    {label: 'Amount Ascending'},
    {label: 'Amount Descending'},
  ];

  const filterList = [
    {label: 'None'},
    {label: 'Send'},
    {label: 'Received'},
    {label: 'Pending'},
  ];

  const containerStyle = {
    width: ITEM_WIDTH,
    alignSelf: 'center',
    backgroundColor: AppStyles.colour.backgroundColor,
    borderRadius: 5,
    height: modalHeight,
  };

  return (
    <Modal
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={containerStyle}
      animationType="fade"
      theme={{
        colors: {
          backdrop: 'transparent',
        },
      }}>
      <View style={styles.section}>
        <View style={styles.header}>
          <Text style={styles.headerBox}>
            <Text style={styles.title}>Sort by:</Text>
            <Text style={styles.titleItem}>{value}</Text>
          </Text>

          <TouchableOpacity style={styles.btn} onPress={() => hideModal(false)}>
            <Text style={styles.btnTitle}>Cancel</Text>
          </TouchableOpacity>
        </View>

        {sortList?.map((item, index) => (
          <View style={styles.itembox} key={index}>
            <CheckBox
              containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 0,
                padding: 0,
              }}
              checked={value === item.label}
              onPress={() => {
                setValue(item.label);
              }}
              checkedIcon={<RadioOn width="25" height="25" color="#F44D03" />}
              uncheckedIcon="circle-o"
              checkedColor="#F44D03"
            />
            <Text style={styles.item}>{item.label}</Text>
          </View>
        ))}

        {/* //////////////////filter/////////////////////////////////////////// */}
        <Text style={{...styles.titleItem, marginVertical: 10}}>Filter</Text>

        {filterList?.map((el, index) => (
          <View style={styles.itembox} key={index}>
            <CheckBox
              containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 0,
                padding: 0,
              }}
              checked={status === el.label}
              value={el.label}
              onPress={() => {
                setStatus(el.label);
              }}
              checkedIcon={<RadioOn width="25" height="25" color="#F44D03" />}
              uncheckedIcon="circle-o"
              checkedColor="#F44D03"
            />
            <Text style={styles.item}>{el.label}</Text>
          </View>
        ))}

        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={() => {
            hideModal(false), handleSumbit();
            //   setSort(value);
            // setFilter(status);
          }}>
          <Text style={styles.btnSubmitTitle}>Apply</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default SortTransactions;
