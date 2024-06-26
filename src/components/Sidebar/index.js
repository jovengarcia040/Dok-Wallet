import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';

import BuyCrypto from 'screens/main/BuyCrypto';
import ResetWallet from 'screens/main/ResetWallet';
import Settings from 'screens/main/Settings';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BackIcon from 'assets/images/sidebarIcons/Back.svg';
import QRCodeIcon from 'assets/images/sidebarIcons/QRCode.svg';
import LogoIcon from 'assets/images/sidebarIcons/LogoSingle.svg';
import BurgerMenuIcon from 'assets/images/sidebarIcons/BurgerMenu.svg';
import HomeIcon from 'assets/images/sidebarIcons/Home.svg';
import BuyCryptoIcon from 'assets/images/sidebarIcons/BuyCrypto.svg';
import SettingsIcon from 'assets/images/sidebarIcons/Settings.svg';
import InfoIcon from 'assets/images/sidebarIcons/Info.svg';
import ResetWalletIcon from 'assets/images/sidebarIcons/ResetWallet.svg';
import WallestIcon from 'assets/images/sidebarIcons/Wallet.svg';
import AddIcon from 'assets/images/sidebarIcons/Add.svg';
import ConvertIcon from 'assets/images/sidebarIcons/CryptoConvert.svg';
import Home from 'screens/main/Home';
import AppStyles from 'assets/AppStyles';
import Wallets from 'screens/main/Wallets';
import {useDispatch, useSelector} from 'react-redux';
import {getWalletName} from 'redux/coins/coinsSelectors';
import CreateWallet from 'screens/main/Wallets/CreateWallet';
import ModalReset from 'components/ModalReset';
import {useFocusEffect} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
import Exchange from 'screens/main/Exchange';
import DialogExchange from 'components/DialogExchange';
import LogOutIcon from 'assets/images/sidebarIcons/log-out.svg';
import AboutScreen from 'screens/main/About/AboutScreen';
import HomeScreen from 'screens/main/Home/HomeScreen';
import {useFloatingHeight} from 'service/dimensions';
import {loadingOn} from 'redux/auth/authSlice';
import {currentWalletSelector} from 'redux/wallets/walletsSlice';

const Drawer = createDrawerNavigator();

export default function Sidebar({navigation, route}) {
  const userWalletName = useSelector(currentWalletSelector)?.walletName;
  const [modal, setModal] = useState(false);
  const [modalList, setModalList] = useState('');
  const [dialogVisible, setDialogVisible] = useState(false);
  const floatingHeight = useFloatingHeight();
  const dispatch = useDispatch();

  useEffect(() => {
    setDialogVisible(route?.params?.showDialog || false);
  }, [route.params]);

  useEffect(() => {
    if (modal === false) {
      navigation.dispatch(DrawerActions.closeDrawer());
    }
    if (modal === true) {
      navigation.dispatch(DrawerActions.openDrawer());
    }
  }, [modal, navigation]);

  function CustomDrawerContent(props) {
    return (
      <>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
            icon={({focused}) => (
              <ResetWalletIcon
                fill={focused ? '#FF4500' : '#989898'}
                style={{marginVertical: -4}}
              />
            )}
            label={() => (
              <Text
                style={{
                  color: '#989898',
                  fontFamily: 'Roboto-Regular',
                  fontSize: 16,
                  marginVertical: -4,
                }}>
                Reset Wallet
              </Text>
            )}
            // label="Reset Wallet"

            onPress={() => {
              setModalList('Reset Wallet');
              setModal(true);
            }}
          />
          <DrawerItem
            icon={({focused}) => (
              <LogOutIcon
                // fill={focused ? '#FF4500' : 'white'}
                style={{marginVertical: -4, marginLeft: -4}}
                // stroke={focused ? '#FF4500' : '#666261'}
              />
            )}
            label={() => (
              <Text
                style={{
                  color: '#989898',
                  fontFamily: 'Roboto-Regular',
                  fontSize: 16,
                  marginVertical: -4,
                  marginLeft: -2,
                }}>
                Logout
              </Text>
            )}
            onPress={() => {
              setModalList('Logout');
              setModal(true);
            }}
          />
        </DrawerContentScrollView>
      </>
    );
  }

  return (
    <>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        drawerHideStatusBarOnOpen={true}
        screenOptions={{
          drawerActiveBackgroundColor: 'transparent',
          headerStyle: {
            height: floatingHeight > 400 ? 120 : 80,
            borderBottomColor: '#B7B7B7',
            borderBottomWidth: 1,
          },
          drawerStyle: {
            paddingTop: 45,
            paddingLeft: 20,
          },
          drawerItemStyle: {
            marginBottom: -2,
          },
          drawerActiveTintColor: '#FF4500',
          drawerInactiveTintColor: '#989898',
          // sceneContainerStyle: { backgroundColor: "#ff0000" },
          drawerLabelStyle: {
            fontFamily: 'Roboto-Regular',
            fontSize: 16,
          },
        }}
        initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation}) => ({
            // headerStyle: { display: "flex", alignItems: "center", justifyContent: "space-between" },
            headerTitleAlign: 'center',
            drawerLabel: 'Home',
            headerRight: () => (
              <TouchableOpacity
                style={{padding: 20}}
                activeOpacity={1}
                onPress={() => navigation.navigate('Scanner', {page: 'Home'})}>
                <QRCodeIcon fill={AppStyles.colour.background} />
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity
                style={{padding: 15}}
                activeOpacity={1}
                onPress={() => {
                  console.log('--------------');
                  navigation.toggleDrawer();
                }}>
                <BurgerMenuIcon />
              </TouchableOpacity>
            ),
            headerTitle: () => {
              return (
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <LogoIcon width={40} />
                  <Text style={{fontSize: 16}}>{userWalletName}</Text>
                </View>
              );
            },
            drawerIcon: ({focused}) => (
              <HomeIcon fill={focused ? '#FF4500' : '#989898'} />
            ),
          })}
        />

        <Drawer.Screen
          name="BuyCrypto"
          component={BuyCrypto}
          options={({navigation}) => ({
            title: 'Buy Crypto',
            headerLeft: () => (
              <TouchableOpacity
                style={{padding: 11}}
                onPress={() => navigation.navigate('Home')}>
                <BackIcon />
              </TouchableOpacity>
            ),
            headerTitleAlign: 'center',
            drawerIcon: ({focused}) => (
              <BuyCryptoIcon fill={focused ? '#FF4500' : '#989898'} />
            ),
          })}
        />

        <Drawer.Screen
          name="Exchange"
          component={Exchange}
          options={({navigation}) => ({
            headerLeft: () => (
              <TouchableOpacity
                style={{padding: 11}}
                onPress={() => navigation.navigate('Home')}>
                <BackIcon />
              </TouchableOpacity>
            ),
            headerTitleAlign: 'center',
            drawerIcon: ({focused}) => (
              <ConvertIcon fill={focused ? '#FF4500' : '#989898'} />
            ),
          })}
        />

        <Drawer.Screen
          name="Wallets"
          component={Wallets}
          options={({navigation}) => ({
            headerLeft: () => (
              <TouchableOpacity
                style={{padding: 11}}
                onPress={() => navigation.navigate('Home')}>
                <BackIcon />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{padding: 15}}
                activeOpacity={0.5}
                onPress={() => {
                  dispatch(loadingOn());
                  setTimeout(() => {
                    navigation.push('VerifyInfo', {
                      nextRoute: 'CreateWallet',
                    });
                  }, 200);
                }}>
                <AddIcon
                  stroke={AppStyles.colour.font}
                  style={{width: 20, height: 20}}
                />
              </TouchableOpacity>
            ),
            headerTitleAlign: 'center',
            drawerIcon: ({focused}) => (
              <WallestIcon fill={focused ? '#FF4500' : '#989898'} />
            ),
          })}
        />

        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                style={{padding: 11}}
                onPress={() => navigation.navigate('Home')}>
                <BackIcon />
              </TouchableOpacity>
            ),
            drawerIcon: ({focused}) => (
              <InfoIcon fill={focused ? '#FF4500' : '#989898'} />
            ),
          }}
        />

        {/* /////////////////Reset//////////////////////// */}
        {/* <Drawer.Screen
          name="Reset Wallet"
          component={ResetWallet}
          options={({navigation}) => ({
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                style={{padding: 11}}
                onPress={() => navigation.navigate('Home')}>
                <BackIcon />
              </TouchableOpacity>
            ),
            drawerIcon: ({focused}) => (
              <TouchableOpacity onPress={focused && setModal(true)}>
                <ResetWalletIcon fill={focused ? '#FF4500' : '#989898'} />
              </TouchableOpacity>
            ),
          })}
        /> */}

        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                style={{padding: 11}}
                onPress={() => navigation.navigate('Home')}>
                <BackIcon />
              </TouchableOpacity>
            ),
            drawerIcon: ({focused}) => (
              <SettingsIcon fill={focused ? '#FF4500' : '#989898'} />
            ),
          }}
        />
      </Drawer.Navigator>
      <ModalReset
        visible={modal}
        hideModal={setModal}
        navigation={navigation}
        page={modalList}
      />
      <DialogExchange
        visible={dialogVisible}
        hideDialog={setDialogVisible}
        data={
          route?.params?.dialog || {
            firstLine: '',
            secondLine: '',
          }
        }
      />
    </>
  );
}
