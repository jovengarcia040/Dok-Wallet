import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './CryptoListStyles';
import KeyboardArrow from 'assets/images/icons/keyboard-arrow-right.svg';
import AddCircle from 'assets/images/icons/add-circle.svg';

import {getLocalCurrency} from 'redux/settings/settingsSelectors';
import {useSelector} from 'react-redux';
import {iconsList} from 'data/currency';

const WIDTH = Dimensions.get('window').width;
const itemWidth = WIDTH / 1.4;

export const CryptoList = ({number, list, setItem, navigation}) => {
  const localCurrency = useSelector(getLocalCurrency);
  const [currencySymbol, setCurrencySymbol] = useState(localCurrency);
  const [hide, setHide] = useState(0);
  const [renderList, setRenderList] = useState([]);

  useEffect(() => {
    const updatedRenderList = list?.map(el => {
      const matchingObject = iconsList.find(item => item.title === el.title);
      if (matchingObject) {
        return {
          ...el,
          icon: matchingObject.icon,
        };
      }
    });
    setRenderList(updatedRenderList);
    console.log('click:', 'click');
  }, [list]);

  useEffect(() => {
    let symbol = '';
    if (localCurrency === 'USD') {
      symbol = '$';
    }
    if (localCurrency === 'EURO') {
      symbol = '€';
    }
    setCurrencySymbol(symbol);
  }, [localCurrency]);

  useEffect(() => {
    setHide(number);
  }, [number]);

  return (
    <>
      <ScrollView>
        {renderList?.map((item, index) => (
          <TouchableOpacity
            style={styles.section}
            key={index}
            disabled={hide === 1 ? false : true}
            onPress={() => {
              setItem(item), navigation.navigate('SendScreen');
            }}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>{item?.icon}</Text>
            </View>

            <View style={styles.list}>
              <View
                style={{
                  ...styles.box,
                  width:
                    hide === 1
                      ? itemWidth
                      : WIDTH && hide === 3
                      ? itemWidth
                      : WIDTH,
                }}>
                <View style={styles.item}>
                  <Text style={styles.title}>{item.page}</Text>
                  <Text style={styles.text}>{item.title}</Text>
                </View>

                {hide === 1 && (
                  <View style={styles.itemNumber}>
                    <Text style={styles.title}>{item.totalAmount}</Text>
                    <Text style={styles.text}>
                      {currencySymbol}
                      {item.totalCourse}
                    </Text>
                  </View>
                )}
              </View>

              {hide === 1 && (
                <View>
                  <KeyboardArrow height="30" width="30" style={styles.arrow} />
                </View>
              )}

              {hide === 3 && (
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => {
                    setItem(item);
                  }}>
                  <AddCircle height="25" width="25" style={styles.circle} />
                </TouchableOpacity>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};
