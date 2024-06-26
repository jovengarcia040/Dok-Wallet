import React, {useState} from 'react';
import {TouchableOpacity, View, Text, Keyboard} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {loadingOn, signUpSuccess} from 'redux/auth/authSlice';
import styles from './RegistrationScreenStyles';
import {validationSchemaRegistration} from 'service/validationSchema';
import {useFloatingHeight} from 'service/dimensions';

export const RegistrationScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [hide, setHide] = useState(true);
  const [hideConfirm, setHideConfirm] = useState(true);
  const floatingBtnHeight = useFloatingHeight();

  const handleSubmit = values => {
    dispatch(loadingOn());
    Keyboard.dismiss();
    setTimeout(() => {
      dispatch(signUpSuccess(values.password));
      navigation.navigate('VerifyInfo');
    }, 200);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.formInput}>
          <Text
            style={{
              ...styles.title,
              marginTop: floatingBtnHeight > 300 ? 20 : 0,
            }}>
            Greate account
          </Text>
          <Text style={styles.text}>
            Enter and confirm your new password bellow
          </Text>
          <Formik
            initialValues={{password: '', passConfirm: ''}}
            validationSchema={validationSchemaRegistration}
            onSubmit={handleSubmit}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View>
                <TextInput
                  style={styles.input}
                  label="Enter new password"
                  theme={{
                    colors: {
                      onSurfaceVariant: '#989898',
                      primary: errors.password ? 'red' : '#989898',
                    },
                  }}
                  outlineColor={errors.password ? 'red' : '#989898'}
                  activeOutlineColor={errors.password ? 'red' : '#222'}
                  autoCapitalize="none"
                  returnKeyType="next"
                  mode="outlined"
                  secureTextEntry={hide ? true : false}
                  selectionColor="#fff"
                  blurOnSubmit={false}
                  right={
                    <TextInput.Icon
                      icon={hide ? 'eye' : 'eye-off'}
                      onPress={() => setHide(!hide)}
                    />
                  }
                  name="password"
                  autoFocus={true}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <Text style={styles.textConfirm}>{errors.password}</Text>
                )}
                <TextInput
                  style={styles.input}
                  label="Confirm new password"
                  theme={{
                    colors: {
                      onSurfaceVariant: '#989898',
                      primary: errors.passConfirm ? 'red' : '#989898',
                    },
                  }}
                  outlineColor={errors.passConfirm ? 'red' : '#989898'}
                  activeOutlineColor={errors.passConfirm ? 'red' : '#222'}
                  autoCapitalize="none"
                  returnKeyType="next"
                  mode="outlined"
                  secureTextEntry={hideConfirm ? true : false}
                  selectionColor="#222"
                  blurOnSubmit={false}
                  right={
                    <TextInput.Icon
                      icon={hideConfirm ? 'eye' : 'eye-off'}
                      onPress={() => setHideConfirm(!hideConfirm)}
                    />
                  }
                  name="passConfirm"
                  onChangeText={handleChange('passConfirm')}
                  onBlur={handleBlur('passConfirm')}
                  value={values.passConfirm}
                />
                {errors.passConfirm && touched.passConfirm && (
                  <Text style={styles.textConfirm}>{errors.passConfirm}</Text>
                )}
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonTitle}>Create</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </>
  );
};
