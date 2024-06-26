import React from 'react';
import {TouchableOpacity, View, Text, ScrollView} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import AppStyles from 'assets/AppStyles';
import styles from './ImportWalletStyles';
import {useDispatch} from 'react-redux';
import {createWallet} from 'redux/wallets/walletsSlice';

const ImportWallet = ({navigation, route}) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {phrase: ''},
    validationSchema: Yup.object().shape({
      phrase: Yup.string().required('* Wrong seed'),
    }),
    onSubmit: async values => {
      try {
        await dispatch(
          createWallet({phrase: values.phrase, replace: true}),
        ).unwrap();
        navigation.navigate('Home');
      } catch (err) {
        if (err.stack) {
          console.log(`in importWallet: ${JSON.stringify(err)}`);
          formik.setErrors({phrase: '* Wrong seed'});
        } else {
          navigation.navigate('Home');
        }
      }
    },
  });

  return (
    <>
      <View style={styles.container}>
        <View style={styles.formInput}>
          <Text style={styles.title}>Import</Text>
          <Text style={styles.title}>your Wallet</Text>
          <Text style={styles.listTitle}>
            Enter your 12-word seed phrase bellow to restore your crypto wallet.
          </Text>

          <ScrollView>
            <TextInput
              style={styles.input}
              multiline={true}
              numberOfLines={7}
              maxHeight={150}
              label="Enter seed phrase"
              theme={{
                colors: {
                  onSurfaceVariant: formik.errors.phrase
                    ? 'red'
                    : AppStyles.colour.gray,
                },
              }}
              outlineColor={
                formik.errors.phrase ? 'red' : AppStyles.colour.gray
              }
              activeOutlineColor={
                formik.errors.phrase ? 'red' : AppStyles.colour.font
              }
              autoCapitalize="none"
              returnKeyType="next"
              mode="outlined"
              selectionColor={AppStyles.colour.backgroundColor}
              blurOnSubmit={false}
              name="phrase"
              autoFocus={true}
              onChangeText={formik.handleChange('phrase')}
              onBlur={formik.handleBlur('phrase')}
              value={formik.values.phrase}
              onSubmitEditing={formik.handleSubmit}
            />
            {formik.errors.phrase && formik.touched.phrase && (
              <Text style={styles.textConfirm}>{formik.errors.phrase}</Text>
            )}

            <TouchableOpacity
              style={styles.button}
              onPress={formik.handleSubmit}>
              <Text style={styles.buttonTitle}>Import</Text>
            </TouchableOpacity>
          </ScrollView>

          <Text style={styles.info}>
            Your Private Key will be encrypted and stored on this device.
          </Text>
        </View>
      </View>
    </>
  );
};

export default ImportWallet;
