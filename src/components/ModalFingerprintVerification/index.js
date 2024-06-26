import React, {useState, useEffect} from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';
import {Modal, Text, TextInput} from 'react-native-paper';
import styles from './ModalFingerprintVerificationStyles';
import AppStyles from 'assets/AppStyles';
import CloseIcon from 'assets/images/icons/close.svg';
import {Formik} from 'formik';
import {getUserPassword} from 'redux/auth/authSelectors';
import {useFloatingHeight} from 'service/dimensions';
import {validationSchemaFingerprintVerification} from 'service/validationSchema';
import {useKeyboardHeight} from 'service/useKeyboardHeight';
import {useDispatch, useSelector} from 'react-redux';
import {updateFingerprint} from 'redux/settings/settingsSlice';
import {useToast} from 'react-native-toast-notifications';
import Toast from 'components/Toast';
import {fingerprintAuthSuccess} from 'redux/auth/authSlice';

const WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(WIDTH * 0.7);
const {height: screenHeight} = Dimensions.get('window');
const modalMinHeight = screenHeight / 2.5;
const modalMaxHeight = screenHeight / 3;

const ModalFingerprintVerification = ({visible, hideModal}) => {
  const floatingModalHeight = useFloatingHeight();
  const keyboardHeight = useKeyboardHeight();
  const storePassword = useSelector(getUserPassword);
  const [wrong, setWrong] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleSubmit = values => {
    const {currentPassword} = values;
    if (currentPassword === storePassword) {
      dispatch(fingerprintAuthSuccess(true));
      dispatch(updateFingerprint(true));
      hideModal(false);
      toast.show(<Toast message="Fingerpint enabled successfully" />, {
        normalColor: 'transparent',
        animationType: 'zoom-in',
      });
    } else {
      setWrong(true);
    }
  };

  return (
    <Modal
      visible={visible}
      contentContainerStyle={{
        marginBottom: keyboardHeight ? 150 : 0,
        backgroundColor: AppStyles.colour.backgroundColor,
        width: ITEM_WIDTH,
        alignSelf: 'center',
        borderRadius: 10,
        height: floatingModalHeight > 350 ? modalMaxHeight : modalMinHeight,
      }}
      dismissable={false}>
      <View style={styles.infoList}>
        <View style={styles.infoHeader}>
          <Text style={styles.titleInfo}>
            Please enter your password to confirm the use of Fingerprint
          </Text>
          <TouchableOpacity
            style={styles.infoIcon}
            onPress={() => {
              hideModal(false);
              setWrong(false);
              dispatch(updateFingerprint(false));
            }}>
            <CloseIcon width="20" height="20" fill="black" />
          </TouchableOpacity>
        </View>

        <Formik
          enableReinitialize={true}
          initialValues={{
            currentPassword: '',
          }}
          validationSchema={validationSchemaFingerprintVerification}
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
            <View style={styles.formInput}>
              <TextInput
                style={styles.input}
                textColor="black"
                underlineColor={errors.currentPassword ? 'red' : '#989898'}
                theme={{
                  colors: {
                    onSurfaceVariant: '#989898',
                    primary: wrong === true ? 'red' : '#989898',
                  },
                }}
                activeOutlineColor={errors.currentPassword ? 'red' : '#222'}
                autoCapitalize="none"
                returnKeyType="next"
                mode="flet"
                secureTextEntry={true}
                textAlign="center"
                selectionColor="#fff"
                blurOnSubmit={false}
                name="currentPassword"
                onChangeText={handleChange('currentPassword')}
                onBlur={handleBlur('currentPassword')}
                onSubmitEditing={handleSubmit}
                value={values.currentPassword}
                autoFocus={true}
              />

              {wrong === true ? (
                <Text style={styles.textWarning}>* Wrong password</Text>
              ) : (
                <>
                  {errors.currentPassword && touched.currentPassword && (
                    <Text style={styles.textConfirm}>
                      {errors.currentPassword}
                    </Text>
                  )}
                </>
              )}

              <TouchableOpacity
                style={{
                  ...styles.button,
                  ...styles.shadow,
                }}
                onPress={handleSubmit}>
                <Text style={styles.buttonTitle}>Verify</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </Modal>
  );
};

export default ModalFingerprintVerification;
