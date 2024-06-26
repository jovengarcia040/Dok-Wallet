import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from './CryptoProvidersStyles';
import {getAllCoins} from 'redux/coins/coinsSelectors';
import {useSelector, useDispatch} from 'react-redux';
import {providersList} from 'data/data';
import {Portal, Provider} from 'react-native-paper';
import ModalBuyCrypto from 'components/ModalBuyCrypto';
import Clipboard from '@react-native-clipboard/clipboard';

const CryptoProviders = ({navigation}) => {
  const [coinsList, setCoinsList] = useState('');
  const allCoins = useSelector(getAllCoins);
  const [newItem, setNewItem] = useState('');
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(true);
  const [provaiderName, setProvaiderName] = useState('');
  const [sourceProvider, setSourceProvider] = useState('');

  const address = 'VBORw0KGgoAAAANSUhEUgAAAOEAA1ehd1W';

  useEffect(() => {
    setCoinsList(allCoins.map(item => item.title).join(', '));
  }, [allCoins]);

  useEffect(() => {
    if (provaiderName !== '') {
      setSourceProvider(
        providersList.find(item => item.title === provaiderName).uri,
      );
    }
  }, [provaiderName]);

  useEffect(() => {
    if (sourceProvider !== '') {
      if (provaiderName !== 'Simplex') {
        navigation.navigate('CryptoCoinsList', {
          sourceProvider: sourceProvider,
        });
        console.log('provaiderName:', provaiderName);

        Clipboard.setString(address);
        setShow(true);
      }
    }
  }, [provaiderName, sourceProvider, navigation]);

  return (
    <Provider>
      <Portal>
        <View style={styles.container}>
          {show === true ? (
            <View style={styles.btnList}>
              {providersList?.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.btn}
                  onPress={() => {
                    setProvaiderName(item.title);
                    setShow(false);
                  }}>
                  <View style={styles.imageBox}>
                    <Image source={item.src} style={styles.image} />
                  </View>
                  <View style={styles.btnBox}>
                    <Text style={styles.btnTitle}>{item.title}</Text>
                    <Text style={styles.btnCoins}>{coinsList}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <>
              {provaiderName === 'Simplex' && (
                <ScrollView>
                  {allCoins?.map((item, index) => (
                    <TouchableOpacity
                      style={styles.list}
                      key={index}
                      onPress={() => {
                        setNewItem(item), setModal(true);
                        Clipboard.setString(address);
                      }}>
                      <View style={styles.iconBox}>
                        <Text>{item.icon}</Text>
                      </View>
                      <View style={styles.items}>
                        <Text style={styles.title}>{item.page}</Text>
                        <Text style={styles.text}>{item.title}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              )}
            </>
          )}
        </View>
        <ModalBuyCrypto
          visible={modal}
          hideModal={setModal}
          cryptoProvider={provaiderName}
          navigation={navigation}
          sourceProvider={sourceProvider}
        />
      </Portal>
    </Provider>
  );
};

export default CryptoProviders;
