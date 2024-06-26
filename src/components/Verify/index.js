import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {CheckBox} from '@rneui/themed';
import {Formik} from 'formik';
import styles from './VerifyStyles';
import Castle from 'assets/images/verify/сastle.svg';
import Cross from 'assets/images/verify/cross.svg';
import Check from 'assets/images/verify/check.svg';
import {useFloatingHeight} from 'service/dimensions';
import {useKeyboardHeight} from 'service/useKeyboardHeight';

export const Verify = ({route, navigation}) => {
  const nextRoute = route?.params?.nextRoute;
  const {random} = route.params;
  const reset = route?.params?.reset;
  const [nextItem, setNextItem] = useState('');
  const [list, setList] = useState([]);
  const [checked, setChecked] = useState(false);
  const [randomList, setRandomList] = useState([]);
  const [firstRender, setFirstRender] = useState(false);
  const [selected, setSelected] = useState(null);
  const [audit, setAudit] = useState('');
  const [verify, setVerify] = useState(false);
  const floatingHeight = useFloatingHeight();
  const keyboardHeight = useKeyboardHeight();

  useEffect(() => {
    if (reset) {
      setNextItem('Reset');
    }
    if (nextRoute) {
      setNextItem('Create');
    }
  }, [reset, nextRoute]);

  useEffect(() => {
    if (!firstRender) {
      let randomWords = [...random].sort(() => 0.5 - Math.random());
      let randomNumbers = randomWords.slice(0, 3);
      setRandomList(randomNumbers);
      setFirstRender(true);

      let randomIds = randomNumbers.map(item => item.id);
      setList(
        random.map(value => ({
          ...value,
          random: randomIds.includes(value.id),
          audit: '',
        })),
      );
    }
  }, [random, firstRender]);

  const handleSubmit = values => {
    navigation.navigate(nextRoute || reset || 'Sidebar' || 'Temp', {
      item: nextItem,
    });
    ////////////////////temporary/////////////
    let selectedRandom = randomList.filter(value => value.id === selected);
    console.log('selectedRandom:', selectedRandom);
    let auditIsRight = selectedRandom.some(item => item.word === values.word);
    console.log('auditIsRight:', auditIsRight);
    setAudit(auditIsRight);
    setList(items =>
      items.map(el => (el.id === selected ? {...el, audit: auditIsRight} : el)),
    );
    ////////////////////Checking whether all even numbers are passed///////////////////////////////////////////
    if (auditIsRight === true) {
      setRandomList(items =>
        items.map(el => (el.id === selected ? {...el, checked: true} : el)),
      );
      for (let i = 0; i <= randomList.length; i++) {
        if (randomList[i].checked === true) {
          setVerify(true);
        }
        return;
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          ...styles.container,
          justifyContent: 'space-between',
          paddingVertical: floatingHeight > 400 ? 40 : 10,
          marginTop: floatingHeight < 250 && keyboardHeight !== 0 ? -100 : 0,
        }}>
        {/* <KeyboardAvoidingView
          {...(Platform.OS === 'ios'
            ? {
                behavior: 'position',
                keyboardVerticalOffset: 100,
              }
              : {})}>
             */}

        <View>
          <View style={styles.section}>
            <Text style={styles.title}>Your{'\n'}seed phrase</Text>
            <Text style={styles.textFirst}>
              Verify that you`ve stored seed phrase.
            </Text>
            <Text style={styles.text}>
              Enter the correct words of you seed phrase below.
            </Text>
            <View style={styles.wordsList}>
              {list.map((item, index) => (
                <TouchableOpacity
                  style={{
                    ...styles.wordsBox,
                    marginVertical: floatingHeight > 300 ? 8 : 4,
                    marginHorizontal: floatingHeight > 300 ? 4 : 2,
                  }}
                  key={index}
                  onPress={() => setSelected(item.id)}
                  disabled={
                    audit === false
                      ? true
                      : false || (item.random === false && true)
                  }>
                  {item.random === false ? (
                    <>
                      <Text style={styles.number}>{item.id}</Text>
                    </>
                  ) : (
                    <>
                      <Text
                        style={{
                          ...styles.numberRandom,
                          borderColor:
                            item.id === selected ? 'red' : 'transparent',
                          backgroundColor:
                            item.audit === true
                              ? '#F44D03'
                              : '#CCC8C6' && item.audit === false
                              ? '#FFF7E5'
                              : '#CCC8C6',
                          color:
                            item.audit === true
                              ? '#fff'
                              : '#F44D03' && item.audit === false
                              ? '#FF647C'
                              : '#F44D03',
                        }}>
                        {item.id}
                      </Text>
                    </>
                  )}
                  {item.random === true && (
                    <>
                      {item.audit === '' && (
                        <Castle width={24} height={24} style={styles.icon} />
                      )}

                      {item.audit === false && <Cross style={styles.cross} />}

                      {item.audit === true && (
                        <Check style={styles.check} />
                        // color="#fff"
                      )}
                    </>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: keyboardHeight !== 0 ? 'flex-start' : 'flex-end',
            ...styles.formInput,
          }}>
          <Text style={styles.info}>Enter the {selected}rd word</Text>
          <Formik initialValues={{word: ''}} onSubmit={handleSubmit}>
            {({handleChange, handleBlur, handleSubmit, values, touched}) => (
              <View>
                <TextInput
                  style={styles.input}
                  label="Enter word here"
                  theme={{
                    colors: {
                      onSurfaceVariant: audit === false ? 'red' : '#989898',
                    },
                  }}
                  outlineColor={audit === false ? 'red' : '#989898'}
                  activeOutlineColor={audit === false ? 'red' : '#000000'}
                  autoCapitalize="none"
                  returnKeyType="next"
                  mode="outlined"
                  selectionColor="#fff"
                  blurOnSubmit={false}
                  name="word"
                  // autoFocus={true}
                  onChangeText={handleChange('word')}
                  onBlur={handleBlur('word')}
                  value={values.word}
                />

                {audit === false && (
                  <Text style={styles.textConfirm}>Invalid mnemonic word.</Text>
                )}

                <View style={styles.checkbox}>
                  <CheckBox
                    containerStyle={{
                      backgroundColor: 'transparent',
                      borderWidth: 0,
                      padding: 0,
                      marginLeft: 0,
                    }}
                    size={24}
                    checked={checked}
                    onPress={() => {
                      setChecked(!checked);
                      setFirstRender(!firstRender);
                    }}
                    iconType="material-community"
                    checkedIcon="checkbox-marked"
                    uncheckedIcon="checkbox-blank-outline"
                    checkedColor="#F44D03"
                  />
                  <Text style={styles.checkText}>
                    I acknowledge that I must safely store me seed phrase as I
                    wiil not be able to access my funds
                  </Text>
                </View>

                <TouchableOpacity
                  disabled={
                    checked ? false : true && touched.word ? false : true
                  }
                  style={{
                    ...styles.btn,
                    backgroundColor: checked
                      ? '#F44D03'
                      : '#708090' && touched.word
                      ? '#F44D03'
                      : '#708090',
                  }}
                  // onPress={() =>
                  //   verify === true
                  //     ? navigation.navigate("Create")
                  //     : handleSubmit()
                  // }
                  onPress={handleSubmit}>
                  <Text style={styles.btnTitle}>Confirm</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
        {/* </KeyboardAvoidingView> */}
      </View>
    </TouchableWithoutFeedback>
  );
};
