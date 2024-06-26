import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import {useSelector, useDispatch} from 'react-redux';
import {changePasswordSuccess} from 'redux/auth/authSlice';
import {getUserPassword} from 'redux/auth/authSelectors';
import styles from './ChangePasswordStyles';
import {useFloatingHeight} from 'service/dimensions';
import {validationSchemaChangePassword} from 'service/validationSchema';

const ChangePassword = ({navigation}) => {
  const dispatch = useDispatch();
  const [hide, setHide] = useState(true);
  const floatingHeight = useFloatingHeight();
  const [wrong, setWrong] = useState(false);
  const storePassword = useSelector(getUserPassword);

  const validateCurrentPassword = (value, storedPassword) => {
    if (value !== storedPassword) {
      setWrong(true);
      return;
    }
    setWrong(false);
    return;
  };

  const handleSubmit = values => {
    // console.log('values:', values);
    console.log('CurrentPassword successful');
    dispatch(changePasswordSuccess(values.newPassword));
    // navigation.navigate('VerifyInfo');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          ...styles.container,
          paddingVertical: floatingHeight > 400 ? 40 : 10,
        }}>
        <View style={styles.formInput}>
          <Formik
            enableReinitialize={true}
            initialValues={{
              currentPassword: '',
              newPassword: '',
              retypePassword: '',
            }}
            validationSchema={validationSchemaChangePassword}
            onSubmit={handleSubmit}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'space-between',
                }}>
                <View>
                  <TextInput
                    style={styles.input}
                    label={!values.currentPassword && 'Current Password'}
                    textColor="black"
                    underlineColor={errors.currentPassword ? 'red' : '#989898'}
                    theme={{
                      colors: {
                        onSurfaceVariant: '#989898',
                        primary: errors.currentPassword ? 'red' : '#989898',
                      },
                    }}
                    activeOutlineColor={errors.currentPassword ? 'red' : '#222'}
                    autoCapitalize="none"
                    returnKeyType="next"
                    mode="flet"
                    secureTextEntry={hide ? true : false}
                    selectionColor="#fff"
                    blurOnSubmit={false}
                    right={
                      <TextInput.Icon
                        icon={hide ? 'eye' : 'eye-off'}
                        onPress={() => setHide(!hide)}
                      />
                    }
                    name="currentPassword"
                    onChangeText={handleChange('currentPassword')}
                    // onBlur={handleBlur('currentPassword')}
                    onBlur={() => {
                      validateCurrentPassword(
                        values.currentPassword,
                        storePassword,
                      );
                      handleBlur('currentPassword');
                    }}
                    onSubmitEditing={handleSubmit}
                    value={values.currentPassword}
                  />
                  {errors.currentPassword && touched.currentPassword && (
                    <Text style={styles.textConfirm}>
                      {errors.currentPassword}
                    </Text>
                  )}

                  {wrong === true && (
                    <Text style={styles.textWarning}>
                      * You have entered an invalid password
                    </Text>
                  )}

                  <TextInput
                    style={styles.input}
                    label={!values.newPassword && 'New Password'}
                    textColor="black"
                    underlineColor={errors.newPassword ? 'red' : '#989898'}
                    theme={{
                      colors: {
                        onSurfaceVariant: '#989898',
                        primary: errors.newPassword ? 'red' : '#989898',
                      },
                    }}
                    activeOutlineColor={errors.newPassword ? 'red' : '#222'}
                    autoCapitalize="none"
                    returnKeyType="next"
                    mode="flet"
                    secureTextEntry={hide ? true : false}
                    selectionColor="#fff"
                    blurOnSubmit={false}
                    right={
                      <TextInput.Icon
                        icon={hide ? 'eye' : 'eye-off'}
                        onPress={() => setHide(!hide)}
                      />
                    }
                    name="newPassword"
                    onChangeText={handleChange('newPassword')}
                    onBlur={handleBlur('newPassword')}
                    value={values.newPassword}
                  />
                  {errors.newPassword && touched.newPassword && (
                    <Text style={styles.textConfirm}>{errors.newPassword}</Text>
                  )}
                  <TextInput
                    style={styles.input}
                    label={!values.retypePassword && 'New Password'}
                    textColor="black"
                    underlineColor={errors.retypePassword ? 'red' : '#989898'}
                    theme={{
                      colors: {
                        onSurfaceVariant: '#989898',
                        primary: errors.retypePassword ? 'red' : '#989898',
                      },
                    }}
                    activeOutlineColor={errors.retypePassword ? 'red' : '#222'}
                    autoCapitalize="none"
                    returnKeyType="next"
                    mode="flet"
                    secureTextEntry={hide ? true : false}
                    selectionColor="#fff"
                    blurOnSubmit={false}
                    right={
                      <TextInput.Icon
                        icon={hide ? 'eye' : 'eye-off'}
                        onPress={() => setHide(!hide)}
                      />
                    }
                    name="retypePassword"
                    onChangeText={handleChange('retypePassword')}
                    onBlur={handleBlur('retypePassword')}
                    value={values.retypePassword}
                  />
                  {errors.retypePassword && touched.retypePassword && (
                    <Text style={styles.textConfirm}>
                      {errors.retypePassword}
                    </Text>
                  )}
                </View>

                <View>
                  <TouchableOpacity
                    disabled={isValid ? false : true}
                    style={{
                      ...styles.button,
                      // marginTop: isValid
                      //   ? floatingBtnHeight
                      //   : floatingBtnHeight - 30,
                      opacity: !isValid && 0.5,
                    }}
                    onPress={handleSubmit}>
                    <Text style={styles.buttonTitle}>Update password</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChangePassword;
