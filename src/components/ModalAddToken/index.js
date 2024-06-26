import React, {useState, useEffect} from 'react';
import {Modal, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import styles from './ModalAddTokenStyles';
import CloseIcon from 'assets/images/icons/close.svg';
import QRCodeIcon from 'assets/images/sidebarIcons/QRCode.svg';
import AppStyles from 'assets/AppStyles';
import {TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import {useKeyboardHeight} from 'service/useKeyboardHeight';
import SelectInput from 'components/SelectInput';
import {ModalAddTokenList} from 'data/data';
import {useDispatch} from 'react-redux';
import {addToken} from 'redux/wallets/walletsSlice';

const ModalAddToken = ({navigation, visible, hideModal, data}) => {
  const [networkInput, setNetworkInput] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = values => {
    values.chain = networkInput;
    console.log(values); // This will log the form values to the console
    dispatch(addToken(values));
    hideModal(false);
  };

  const keyboardHeight = useKeyboardHeight();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      statusBarTranslucent={true}
      visible={visible}
      onRequestClose={() => {
        hideModal(false);
        navigation.navigate('Home');
      }}>
      <View
        style={{
          ...styles.centeredView,
          marginBottom: keyboardHeight ? keyboardHeight : 0,
        }}>
        <View style={styles.modalView}>
          <ScrollView keyboardShouldPersistTaps={'always'}>
            <View style={styles.modalHeader}>
              <Text style={styles.headerText}>Add Custom Token</Text>
              <TouchableOpacity
                onPress={() => {
                  hideModal(false);
                }}
                style={styles.closeBtn}>
                <CloseIcon fill={AppStyles.colour.font} width={13} />
              </TouchableOpacity>
            </View>
            <View style={styles.modalBody}>
              <Formik
                initialValues={{
                  address: '',
                  name: '',
                  symbol: '',
                  decimal: '',
                }}
                onSubmit={values => handleSubmit(values)}>
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                }) => (
                  <View>
                    <SelectInput
                      setValue={setNetworkInput}
                      form={'Network'}
                      number={'2'}
                      listData={ModalAddTokenList}
                    />
                    <View style={styles.qrContainer}>
                      <TextInput
                        style={{...styles.input, width: '85%'}}
                        label="Address"
                        theme={{
                          colors: {
                            onSurfaceVariant: errors ? '#989898' : 'red',
                          },
                        }}
                        outlineColor={errors.address ? 'red' : '#989898'}
                        activeOutlineColor={errors.address ? 'red' : '#222'}
                        autoCapitalize="none"
                        returnKeyType="next"
                        mode="outlined"
                        selectionColor="#fff"
                        blurOnSubmit={false}
                        name="address"
                        onChangeText={handleChange('address')}
                        onBlur={handleBlur('address')}
                        value={values.address}
                      />
                      <TouchableOpacity style={styles.qrBtn}>
                        <QRCodeIcon
                          fill={AppStyles.colour.backgroundColor}
                          width={15}
                        />
                      </TouchableOpacity>
                    </View>
                    <TextInput
                      style={{...styles.input, marginBottom: 20}}
                      label="Name"
                      theme={{
                        colors: {
                          onSurfaceVariant: errors ? '#989898' : 'red',
                        },
                      }}
                      outlineColor={errors.name ? 'red' : '#989898'}
                      activeOutlineColor={errors.name ? 'red' : '#222'}
                      disabled={!values.address && !values.name}
                      autoCapitalize="none"
                      returnKeyType="next"
                      mode="outlined"
                      selectionColor="#fff"
                      blurOnSubmit={false}
                      name="name"
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      value={values.name}
                    />
                    <View style={{...styles.qrContainer, marginBottom: 20}}>
                      <TextInput
                        style={{...styles.input, width: '45%'}}
                        label="Symbol"
                        theme={{
                          colors: {
                            onSurfaceVariant: errors ? '#989898' : 'red',
                          },
                        }}
                        outlineColor={errors.symbol ? 'red' : '#989898'}
                        activeOutlineColor={errors.symbol ? 'red' : '#222'}
                        disabled={!values.address && !values.symbol}
                        autoCapitalize="none"
                        returnKeyType="next"
                        mode="outlined"
                        selectionColor="#fff"
                        blurOnSubmit={false}
                        name="symbol"
                        onChangeText={handleChange('symbol')}
                        onBlur={handleBlur('symbol')}
                        value={values.symbol}
                      />
                      <TextInput
                        style={{...styles.input, width: '45%'}}
                        label="Decimal"
                        theme={{
                          colors: {
                            onSurfaceVariant: errors ? '#989898' : 'red',
                          },
                        }}
                        outlineColor={errors.decimal ? 'red' : '#989898'}
                        activeOutlineColor={errors.decimal ? 'red' : '#222'}
                        disabled={!values.address}
                        autoCapitalize="none"
                        returnKeyType="next"
                        mode="outlined"
                        selectionColor="#fff"
                        blurOnSubmit={false}
                        name="decimal"
                        onChangeText={handleChange('decimal')}
                        onBlur={handleBlur('decimal')}
                        value={values.decimal}
                      />
                    </View>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={handleSubmit}>
                      <Text style={styles.buttonTitle}>Add new Coin</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </Formik>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default ModalAddToken;
