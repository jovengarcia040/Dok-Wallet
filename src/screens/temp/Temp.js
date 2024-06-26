import {TouchableOpacity} from 'react-native';
import Back from 'assets/images/sidebarIcons/Back.svg';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from 'screens/main/Home/HomeScreen';
import TempScreen from './TempScreen';
import Exchange from 'screens/main/Exchange';
import BuyCrypto from 'screens/main/BuyCrypto';
import ChangePassword from 'screens/auth/ChangePassword';
import Settings from 'screens/main/Settings';

const Stack = createStackNavigator();

const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const Temp = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 80,
          borderBottomColor: '#B7B7B7',
          borderBottomWidth: 1,
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="TempScreen"
        component={TempScreen}
        options={({navigation}) => ({
          headerStyle: {
            height: 80,
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
        name="HomeScreen"
        component={HomeScreen}
        options={({navigation}) => ({
          headerStyle: {
            height: 80,
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
        name="Exchange"
        component={Exchange}
        options={({navigation}) => ({
          headerStyle: {
            height: 80,
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
        name="BuyCrypto "
        component={BuyCrypto}
        options={({navigation}) => ({
          headerStyle: {
            height: 80,
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
        name="ChangePassword"
        component={ChangePassword}
        options={({navigation}) => ({
          headerStyle: {
            height: 80,
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
        name="Settings"
        component={Settings}
        options={({navigation}) => ({
          headerStyle: {
            height: 80,
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
    </Stack.Navigator>
  );
};

export default Temp;
