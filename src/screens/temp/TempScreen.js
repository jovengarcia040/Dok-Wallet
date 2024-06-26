import {Text, TouchableOpacity, View} from 'react-native';

const TempScreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        style={{padding: 11}}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text>HomeScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{padding: 11}}
        onPress={() => navigation.navigate('Exchange')}>
        <Text>Exchange</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{padding: 11}}
        onPress={() => navigation.navigate('CryptoProviders')}>
        <Text>CryptoProviders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{padding: 11}}
        onPress={() => navigation.navigate('ChangePassword')}>
        <Text>ChangePassword</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{padding: 11}}
        onPress={() => navigation.navigate('Settings')}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TempScreen;
