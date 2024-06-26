import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CardStyleInterpolators} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {useFloatingHeight} from 'service/dimensions';

const Stack = createStackNavigator();
import AppStyles from 'assets/AppStyles';
import {RegistrationScreen} from 'screens/auth/RegistrationScreen';
import {LoginScreen} from 'screens/auth/LoginScreen';
import {VerifyInfo} from 'components/VerifyInfo';
import {CarouselCards} from 'components/CarouselCards';
import {Learn} from 'components/VerifyInfo/Learn';
import {VerifyCreate} from 'components/VerifyCreate';
import {Verify} from 'components/Verify';
import Sidebar from 'components/Sidebar';
import Scanner from 'screens/main/Scanner';
import {TouchableOpacity} from 'react-native';
import Back from 'assets/images/sidebarIcons/Back.svg';
import ShareIcon from 'assets/images/icons/share.svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CreateWallet from 'screens/main/Wallets/CreateWallet';
import ManageCoins from 'screens/main/Home/ManageCoins';
// ////////////////////////reset////////////////////////////////////////
import ResetWallet from 'screens/main/ResetWallet';
import LearnReset from 'screens/main/ResetWallet/LearnReset';
import ImportWallet from 'screens/main/ResetWallet/ImportWallet';
// ////////////////////////send////////////////////////////////////////
import SendScreen from 'screens/main/Home/SendScreen';
import {getCurrentCoin} from 'redux/coins/coinsSelectors';
import SortTransactions from 'components/SortTransactions';
import RecieveFunds from 'screens/main/Home/RecieveFunds';
import SendFunds from 'screens/main/Home/SendFunds';
///////////////////////////////////////////////////////////////
// import CryptoInfo from 'screens/main/BuyCrypto/CryptoInfo';
// import CryptoOptions from 'screens/main/BuyCrypto/CryptoProviders';
import CryptoProviders from 'screens/main/BuyCrypto/CryptoProviders';
import CryptoCoinsList from 'screens/main/BuyCrypto/CryptoCoinsList';
import Settings from 'screens/main/Settings';
import LocalCurrency from 'screens/main/Settings/LocalCurrency';
import Notifications from 'screens/main/Settings/Notifications';
import Check from 'assets/images/settings/check.svg';
import ChangePassword from 'screens/auth/ChangePassword';
import {LogBox} from 'react-native';
import Temp from 'screens/temp/Temp';
import AboutScreen from 'screens/main/About/AboutScreen';
import AboutApp from 'screens/main/About/AboutApp';
import TermsConditions from 'screens/main/About/TermsConditions';
import PrivacyPolicy from 'screens/main/About/PrivacyPolicy';
import {logOutSuccess} from 'redux/auth/authSlice';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
  'Setting a timer for a long period of time',
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation',
  'ViewPropTypes will be removed',
  'AsyncStorage has been extracted from react-native',
  'EventEmitter.removeListener',
]);

const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export const useRoute = isAuth => {
  // console.log('isAuth:', isAuth);
  const currentCoin = useSelector(getCurrentCoin);
  const floatingHeight = useFloatingHeight();

  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        {!isAuth && (
          <>
            <Stack.Screen name="CarouselCards" component={CarouselCards} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
        )}
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Group>
      {/* Modal screens */}
      {/* {!hasWallet && ( */}
      <Stack.Group>
        <Stack.Screen
          name="VerifyInfo"
          component={VerifyInfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Learn"
          component={Learn}
          options={({navigation}) => ({
            headerStyle: {
              height: floatingHeight > 400 ? 120 : 80,
              borderBottomColor: '#B7B7B7',
              borderBottomWidth: 1,
            },
            headerTitleAlign: 'center',
            title: 'Learn more',
            headerLeft: () => (
              <TouchableOpacity
                style={{padding: 11}}
                onPress={() => navigation.goBack()}>
                <Back />
              </TouchableOpacity>
            ),
            cardStyleInterpolator: forFade,
          })}
        />
        {/* ////////////////////////////////////////////////// */}
        <Stack.Screen
          name="VerifyCreate"
          component={VerifyCreate}
          options={({navigation}) => ({
            title: 'Create',
            headerStyle: {
              height: floatingHeight > 400 ? 120 : 80,
              borderBottomColor: '#B7B7B7',
              borderBottomWidth: 1,
            },

            headerLeft: () => (
              <TouchableOpacity
                style={{padding: 11}}
                onPress={() => {
                  const routes = navigation.getState().routes?.length;
                  // console.log('routes:', routes);
                  if (routes === 3) {
                    navigation.pop();
                  }
                  navigation.goBack();
                }}>
                <Back />
              </TouchableOpacity>
            ),
            headerTitleAlign: 'center',
            cardStyleInterpolator: forFade,
          })}
        />
        <Stack.Screen
          name="Verify"
          component={Verify}
          options={({navigation}) => ({
            headerStyle: {
              height: floatingHeight > 400 ? 120 : 80,
              borderBottomColor: '#B7B7B7',
              borderBottomWidth: 1,
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{padding: 11}}
                onPress={() => navigation.goBack()}>
                <Back />
              </TouchableOpacity>
            ),
            headerTitleAlign: 'center',
            cardStyleInterpolator: forFade,
          })}
        />
      </Stack.Group>
      {/* )} */}
      {/* ///////////////////It is used/////////////////////////////////////////// */}
      {/* <Stack.Screen
        name="Temp"
        component={Temp}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Sidebar"
        component={Sidebar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateWallet"
        component={CreateWallet}
        options={({navigation}) => ({
          headerStyle: {
            height: floatingHeight > 400 ? 120 : 80,
            borderBottomColor: '#B7B7B7',
            borderBottomWidth: 1,
          },
          headerTitleAlign: 'center',
          title: 'Create Wallet',
          headerLeft: () => (
            <TouchableOpacity
              style={{padding: 11}}
              onPress={() => navigation.goBack()}>
              <Back />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{padding: 10}}>
              <MaterialCommunityIcons name="delete" color="black" size={24} />
            </TouchableOpacity>
          ),
          cardStyleInterpolator: forFade,
        })}
      />
      <Stack.Group>
        <Stack.Screen
          name="About App"
          component={AboutApp}
          options={({navigation}) => ({
            headerStyle: {
              height: floatingHeight > 400 ? 120 : 80,
              borderBottomColor: '#B7B7B7',
              borderBottomWidth: 1,
            },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                style={{padding: 11}}
                onPress={() => navigation.goBack()}>
                <Back />
              </TouchableOpacity>
            ),
            cardStyleInterpolator: forFade,
          })}
        />
        <Stack.Screen
          name="Terms & Conditions"
          component={TermsConditions}
          options={({navigation}) => ({
            headerStyle: {
              height: floatingHeight > 400 ? 120 : 80,
              borderBottomColor: '#B7B7B7',
              borderBottomWidth: 1,
            },
            title: 'Terms of Use',
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                style={{padding: 11}}
                onPress={() => navigation.goBack()}>
                <Back />
              </TouchableOpacity>
            ),
            cardStyleInterpolator: forFade,
          })}
        />
        <Stack.Screen
          name="Privacy Policy"
          component={PrivacyPolicy}
          options={({navigation}) => ({
            headerStyle: {
              height: floatingHeight > 400 ? 120 : 80,
              borderBottomColor: '#B7B7B7',
              borderBottomWidth: 1,
            },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                style={{padding: 11}}
                onPress={() => navigation.goBack()}>
                <Back />
              </TouchableOpacity>
            ),
            cardStyleInterpolator: forFade,
          })}
        />
      </Stack.Group>
      {/* ///////////////////////////////not needed now///////////////////////////////////// */}
      {/* <Stack.Screen
        name="CryptoInfo"
        component={CryptoInfo}
        options={({navigation}) => ({
          title: 'Buy Crypto',
          headerStyle: {
            height: floatingHeight > 400 ? 120 :80,
            borderBottomColor: '#B7B7B7',
            borderBottomWidth: 1,
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              style={{padding: 11}}
              onPress={() => navigation.goBack()}>
              <Back />
            </TouchableOpacity>
          ),
          cardStyleInterpolator: forFade,
        })}
      />  */}
      {/* <Stack.Screen
        name="CryptoOptions"
        component={CryptoOptions}
        options={({navigation}) => ({
          title: 'Buy Crypto',
          headerStyle: {
          height: floatingHeight > 400 ? 120 :80,
            borderBottomColor: '#B7B7B7',
            borderBottomWidth: 1,
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              style={{padding: 11}}
              onPress={() => navigation.goBack()}>
              <Back />
            </TouchableOpacity>
          ),
          cardStyleInterpolator: forFade,
        })}
      />  */}
      {/* ///////////////////////////////not needed now///////////////////////////////////// */}
      <Stack.Screen
        name="CryptoProviders"
        component={CryptoProviders}
        options={({navigation}) => ({
          title: 'Buy Crypto',
          headerStyle: {
            height: floatingHeight > 400 ? 120 : 80,
            borderBottomColor: '#B7B7B7',
            borderBottomWidth: 1,
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              style={{padding: 11}}
              onPress={() => navigation.goBack()}>
              <Back />
            </TouchableOpacity>
          ),
          cardStyleInterpolator: forFade,
        })}
      />
      <Stack.Group>
        <Stack.Screen
          name="LocalCurrency"
          component={LocalCurrency}
          options={({navigation}) => ({
            title: 'Local Currency',
            headerStyle: {
              height: floatingHeight > 400 ? 120 : 80,
              borderBottomColor: '#B7B7B7',
              borderBottomWidth: 1,
            },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                style={{padding: 11}}
                onPress={() => navigation.goBack()}>
                <Back />
              </TouchableOpacity>
            ),
            cardStyleInterpolator: forFade,
          })}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={({navigation}) => ({
            title: 'Push Notifications',
            headerStyle: {
              height: floatingHeight > 400 ? 120 : 80,
              borderBottomColor: '#B7B7B7',
              borderBottomWidth: 1,
            },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                style={{padding: 10}}
                onPress={() => navigation.goBack()}>
                <Back />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{padding: 10}}
                onPress={() => navigation.navigate('Home')}>
                <Check width="25" height="25" color="black" />
              </TouchableOpacity>
            ),
            cardStyleInterpolator: forFade,
          })}
        />

        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={({navigation}) => ({
            title: 'Change Password',
            headerStyle: {
              height: floatingHeight > 400 ? 120 : 80,
              borderBottomColor: '#B7B7B7',
              borderBottomWidth: 1,
            },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                style={{padding: 10}}
                onPress={() => navigation.goBack()}>
                <Back />
              </TouchableOpacity>
            ),
            cardStyleInterpolator: forFade,
          })}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="CryptoCoinsList" component={CryptoCoinsList} />
      </Stack.Group>
      <Stack.Screen
        name="ManageCoins"
        component={ManageCoins}
        options={({navigation}) => ({
          headerStyle: {
            height: floatingHeight > 400 ? 120 : 80,
            borderBottomColor: '#B7B7B7',
            borderBottomWidth: 1,
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              style={{padding: 11}}
              onPress={() => navigation.goBack()}>
              <Back />
            </TouchableOpacity>
          ),
          cardStyleInterpolator: forFade,
        })}
      />
      {/* /////////////send////////////////////////////////////////// */}
      <Stack.Group>
        <Stack.Screen
          name="SendScreen"
          component={SendScreen}
          options={({navigation}) => ({
            headerStyle: {
              height: floatingHeight > 400 ? 120 : 80,
              borderBottomColor: '#B7B7B7',
              borderBottomWidth: 1,
            },
            headerTitleAlign: 'center',
            title: currentCoin.page,
            headerLeft: () => (
              <TouchableOpacity
                style={{padding: 11}}
                onPress={() => navigation.goBack()}>
                <Back />
              </TouchableOpacity>
            ),
            cardStyleInterpolator: forFade,
          })}
        />

        <Stack.Screen
          name="SendFunds"
          component={SendFunds}
          options={({navigation}) => ({
            headerStyle: {
              height: floatingHeight > 400 ? 120 : 80,
              borderBottomColor: '#B7B7B7',
              borderBottomWidth: 1,
            },
            headerTitleAlign: 'center',
            title: 'Send Funds',
            headerLeft: () => (
              <TouchableOpacity
                style={{padding: 11}}
                onPress={() => navigation.goBack()}>
                <Back />
              </TouchableOpacity>
            ),
            cardStyleInterpolator: forFade,
          })}
        />

        <Stack.Screen
          name="RecieveFunds"
          component={RecieveFunds}
          options={({route, navigation}) => ({
            headerStyle: {
              height: floatingHeight > 400 ? 120 : 80,
              borderBottomColor: '#B7B7B7',
              borderBottomWidth: 1,
            },
            title: 'Recieve Funds',
            headerTitleAlign: 'center',
            headerBackImage: () => <Back />,
            cardStyleInterpolator: forFade,
            headerRight: () => (
              <TouchableOpacity
                style={{padding: 10}}
                onPress={() => route.params.shareQR()}>
                <ShareIcon
                  width={24}
                  height={24}
                  fill={AppStyles.colour.background}
                />
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity
                style={{padding: 11}}
                onPress={() => navigation.goBack()}>
                <Back />
              </TouchableOpacity>
            ),
            // cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          })}
        />
        {/* <Stack.Screen
          name="Transactions"
          component={Transactions}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="SortTransactions"
          component={SortTransactions}
          options={{headerShown: false}}
        />
      </Stack.Group>
      {/* /////////////reset////////////////////////////////////////// */}
      <Stack.Group>
        <Stack.Screen
          name="ResetWallet"
          component={ResetWallet}
          // options={{ headerShown: false }}
          options={({navigation}) => ({
            headerStyle: {
              height: floatingHeight > 400 ? 120 : 80,
              // borderBottomColor: "#B7B7B7",
              // borderBottomWidth: 1,
            },
            headerTitleStyle: {
              fontFamily: 'Roboto-Regular',
              fontWeight: 'bold',
              fontSize: 16,
            },
            title: 'DOK WALLET',
            headerTitleAlign: 'center',
            // headerLeft: () => {
            //   return null;
            // },
            headerLeft: () => (
              <TouchableOpacity
                style={{padding: 11}}
                onPress={() => navigation.navigate('Home')}>
                <Back />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="LearnReset"
          component={LearnReset}
          options={({navigation}) => ({
            headerStyle: {
              height: floatingHeight > 400 ? 120 : 80,
              borderBottomColor: '#B7B7B7',
              borderBottomWidth: 1,
            },
            title: 'What is a seed phrase?',
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                style={{padding: 11}}
                onPress={() => navigation.navigate('ResetWallet')}>
                <Back />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ImportWallet"
          component={ImportWallet}
          options={({navigation}) => ({
            headerStyle: {
              height: floatingHeight > 400 ? 120 : 80,
              borderBottomColor: '#B7B7B7',
              borderBottomWidth: 1,
            },
            title: 'Import',
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                style={{padding: 11}}
                onPress={() => navigation.navigate('ResetWallet')}>
                <Back />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Group>
      <Stack.Screen
        name="Scanner"
        component={Scanner}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          title: 'Point at QR Code to Scan',
          headerLeft: () => (
            <TouchableOpacity
              style={{padding: 11}}
              onPress={() => navigation.goBack()}>
              <Back />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};
