import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {iconsList} from 'data/currency';
import styles from './ExchangeStyles';
import {useEffect, useRef, useState} from 'react';
import {
  getCurrentWallet,
  getUserCoins,
  getWalletName,
  getWallets,
} from 'redux/coins/coinsSelectors';
import {useDispatch, useSelector} from 'react-redux';
import ArrIcon from 'assets/images/icons/ic_arrow_right.svg';
import InfoIcon from 'assets/images/icons/info.svg';
import ScurvedIcon from 'assets/images/icons/S-curved.svg';
import LogoIcon from 'assets/images/icons/Logo wide red.svg';

import mathRound2 from 'service/mathRound2';
import mathRound6 from 'service/mathRound6';

import AppStyles from 'assets/AppStyles';
import {
  addWallet,
  removeWallet,
  updateWalletName,
} from 'redux/coins/coinsSlice';

import ModalExchange from 'components/ModalExchange';
import SelectInputExchange from 'components/SelectInputExchange';
import {isNotificationsSent} from 'redux/settings/settingsSelectors';
import {updateSent} from 'redux/settings/settingsSlice';

const Exchange = ({navigation, route}) => {
  const userCoins = useSelector(getUserCoins);
  const wallets = useSelector(getWallets);
  const currentWalletName = useSelector(getWalletName);
  const currentWallet = useSelector(getCurrentWallet);
  const isNotification = useSelector(isNotificationsSent);

  const [coinsList, setCoinsList] = useState(userCoins);
  const [dropDownList, setDropDownList] = useState([]);
  const [coinFromTitle, setCoinFromTitle] = useState(userCoins[0].title);
  const [coinsFrom, setCoinsFrom] = useState('');
  const [amountFrom, setAmountFrom] = useState('');
  const [coinToTitle, setCoinToTitle] = useState(userCoins[1].title);
  const [coinsTo, setCoinsTo] = useState('');
  const [firstRender, setFirstRender] = useState(false);
  const [amountTo, setAmountTo] = useState('');
  const [modalVisible, setmodalVisible] = useState(false);
  const [onFocus, setOnFocus] = useState(false);

  const dispatch = useDispatch();
  const coinFromRef = useRef();
  const coinToRef = useRef();

  useEffect(() => {
    const updatedRenderList = coinsList?.map(el => {
      const matchingObject = iconsList.find(item => item.title === el.title);
      if (matchingObject) {
        return {
          ...el,
          icon: matchingObject.icon,
        };
      }
    });
    setCoinsList(updatedRenderList);
    setFirstRender(true);
  }, [coinsList]);

  useEffect(() => {
    const dropDownData = [];
    for (let i = 0; i < coinsList.length; i++) {
      dropDownData.push({
        value: coinsList[i].title,
        options: {
          title: coinsList[i].title,
          page: coinsList[i].page,
          icon: coinsList[i].icon,
        },
        label: coinsList[i].page,
      });
    }
    setDropDownList(dropDownData);
  }, [coinsList]);

  useEffect(() => {
    if (!coinsList || !coinFromTitle.trim()) {
      return;
    }
    const coins = coinsList?.find(({title}) => title === coinFromTitle);
    setCoinsFrom(coins);
    setAmountFrom('');
    setAmountTo('');
  }, [coinFromTitle, coinsList]);

  useEffect(() => {
    if (!coinsList || !coinToTitle.trim()) {
      return;
    }

    if (firstRender) {
      const coins = coinsList?.find(({title}) => title === coinToTitle);
      setCoinsTo(coins);
      setAmountTo(
        String(
          mathRound6(
            (Number(amountFrom) * Number(coinsFrom.currencyRate)) /
              Number(coins?.currencyRate),
          ) || '',
        ),
      );
    }
  }, [coinToTitle, firstRender, coinsList, amountFrom, coinsFrom]);

  useEffect(() => {
    setmodalVisible(route.params?.showModal || false);
  }, [route]);

  const handleFromChange = data => {
    if (data === ',' || data < 0) {
      return;
    }
    const strippedValue = data.replace(/^0+(?=\d)/, '');

    if (/^[0-9]*\.?\d*$/.test(strippedValue)) {
      setAmountFrom(strippedValue);
      setAmountTo(
        String(
          mathRound6(
            (Number(strippedValue) * Number(coinsFrom.currencyRate)) /
              Number(coinsTo.currencyRate),
          ),
        ),
      );
    }
  };

  const handleToChange = data => {
    if (data === ',' || data < 0) {
      return;
    }

    const strippedValue = data.replace(/^0+(?=\d)/, '');

    const amountConvert =
      (Number(strippedValue) * Number(coinsTo.currencyRate)) /
      Number(coinsFrom.currencyRate);

    if (/^[0-9]*\.?\d*$/.test(strippedValue)) {
      setAmountTo(strippedValue);
      setAmountFrom(String(mathRound6(amountConvert)));
    }
  };

  const handleSubmit = () => {
    if (amountFrom > Number(coinsFrom.totalAmount)) {
      setmodalVisible(true);
      return;
    }

    const updatedUserCoins = coinsList.filter(
      ({title}) => title !== coinFromTitle && title !== coinToTitle,
    );

    const changedFrom = {
      ...coinsList.find(({title}) => title === coinFromTitle),
      ...{
        totalAmount: String(
          mathRound6(Number(coinsFrom?.totalAmount) - Number(amountFrom)),
        ),
      },
      ...{
        totalCourse: String(
          mathRound2(
            (Number(coinsFrom?.totalAmount) - Number(amountFrom)) *
              Number(coinsFrom.currencyRate),
          ),
        ),
      },
    };

    const changedTo = {
      ...coinsList.find(({title}) => title === coinToTitle),
      ...{
        totalAmount: String(
          mathRound6(Number(coinsTo.totalAmount) + Number(amountTo)),
        ),
      },
      ...{
        totalCourse: String(
          mathRound2(
            (Number(coinsTo.totalAmount) + Number(amountTo)) *
              Number(coinsTo.currencyRate),
          ),
        ),
      },
    };

    updatedUserCoins.unshift(changedTo, changedFrom);

    const updatedWallet = {...currentWallet, userCoins: updatedUserCoins};

    const idx = wallets.findIndex(
      item => item.walletName === currentWalletName,
    );
    dispatch(removeWallet(idx));

    dispatch(addWallet(updatedWallet));
    dispatch(updateWalletName(updatedWallet));

    navigation.push('Sidebar', {
      showDialog: isNotification,
      dialog: {
        firstLine: `You just sent: ${amountFrom} ${coinFromTitle}`,
        secondLine: `New balance:: ${changedFrom.totalAmount} ${coinFromTitle}`,
      },
    });
    setAmountFrom('');
    setAmountTo('');
  };

  return (
    <View style={styles.container}>
      <View>
        <ScrollView>
          <View style={styles.lable}>
            <Text>FROM</Text>
            <View style={styles.amountAvailable}>
              <Text style={styles.amountAvailableText}>
                Available amount: {coinsFrom?.totalAmount} {coinFromTitle}
              </Text>

              <InfoIcon
                width={24}
                height={24}
                stroke={AppStyles.colour.background}
              />
            </View>
          </View>
          <View style={styles.inputFrom}>
            <TouchableOpacity
              style={styles.select}
              onPress={() => coinFromRef.current.open()}>
              <View style={styles.iconBox}>{coinsFrom?.icon}</View>
              <View style={styles.selectInput}>
                <SelectInputExchange
                  selectRef={coinFromRef}
                  listData={dropDownList}
                  selectedValue={coinFromTitle}
                  onValueChange={setCoinFromTitle}
                />
              </View>
              <Text style={styles.coinTitle}>{coinFromTitle}</Text>
              <View style={styles.arrow}>
                <ArrIcon width={12} height={12} fill={AppStyles.colour.gray} />
              </View>
            </TouchableOpacity>
            <View style={styles.select}>
              <TextInput
                style={{
                  ...styles.coinTitle,
                  color:
                    amountFrom > Number(coinsFrom?.totalAmount)
                      ? '#ff0000'
                      : AppStyles.colour.font,
                }}
                onChangeText={handleFromChange}
                value={
                  !onFocus & (amountFrom.length > 15)
                    ? amountFrom.substring(0, 15 - 3) + '...'
                    : amountFrom
                }
                placeholder="0.0"
                keyboardType="numeric"
                onFocus={() => setOnFocus(true)}
                onBlur={() => setOnFocus(false)}
              />
              <View style={styles.arrowAmount}>
                <ArrIcon width={12} height={12} fill={AppStyles.colour.gray} />
              </View>
            </View>
          </View>
          <View style={styles.scurvedIcon}>
            <ScurvedIcon
              width={25}
              height={20}
              stroke={AppStyles.colour.background}
            />
          </View>
          <View style={styles.lable}>
            <Text>TO</Text>
          </View>
          <View style={styles.inputFrom}>
            <TouchableOpacity
              style={styles.select}
              onPress={() => coinToRef.current.open()}>
              <View style={styles.iconBox}>{coinsTo?.icon}</View>
              <View style={styles.selectInput}>
                <SelectInputExchange
                  selectRef={coinToRef}
                  listData={dropDownList}
                  selectedValue={coinToTitle}
                  onValueChange={setCoinToTitle}
                />
              </View>
              <Text style={styles.coinTitle}>{coinToTitle}</Text>
              <View style={styles.arrow}>
                <ArrIcon width={12} height={12} fill={AppStyles.colour.gray} />
              </View>
            </TouchableOpacity>
            <View style={styles.select}>
              <TextInput
                style={styles.coinTitle}
                onChangeText={handleToChange}
                value={
                  !onFocus & (amountTo.length > 15)
                    ? amountTo.substring(0, 15 - 3) + '...'
                    : amountTo
                }
                placeholder="0.0"
                keyboardType="numeric"
                onFocus={() => setOnFocus(true)}
                onBlur={() => setOnFocus(false)}
              />
              <View style={styles.arrowAmount}>
                <ArrIcon width={12} height={12} fill={AppStyles.colour.gray} />
              </View>
            </View>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}>Gas fee</Text>
            <View style={styles.amountAvailable}>
              <Text style={styles.textValue}>0.0 {coinFromTitle}</Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={{...styles.text, fontFamily: 'Roboto-Bold'}}>
              You pay
            </Text>
            <View style={styles.amountAvailable}>
              <Text style={{...styles.textValue, fontFamily: 'Roboto-Bold'}}>
                {amountFrom || '0.0'} {coinFromTitle}
              </Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Minimum amount</Text>
            <View style={styles.amountAvailable}>
              <Text style={styles.textValue}>0.005 {coinFromTitle}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View>
        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor:
              coinFromTitle === coinToTitle ||
              !amountFrom ||
              Number(amountFrom) === 0
                ? '#708090'
                : '#F44D03',
          }}
          onPress={handleSubmit}
          disabled={
            coinFromTitle === coinToTitle ||
            !amountFrom ||
            Number(amountFrom) === 0
          }>
          <Text style={styles.buttonTitle}>Next</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Powered by</Text>
          <LogoIcon width={87} height={20} fill={AppStyles.colour.background} />
        </View>
      </View>
      <ModalExchange
        visible={modalVisible}
        hideModal={setmodalVisible}
        reset={() => {
          setAmountFrom('');
          setAmountTo('');
        }}
        navigation={navigation}
      />
    </View>
  );
};

export default Exchange;
