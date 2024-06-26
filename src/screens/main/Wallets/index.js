import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './WalletsStyles';
import {Avatar} from 'react-native-paper';
import {Badge} from 'react-native-paper';
import WallestIcon from 'assets/images/sidebarIcons/Wallet.svg';
import {useDispatch, useSelector} from 'react-redux';
import {getWalletName, getWallets} from 'redux/coins/coinsSelectors';
import {updateWalletName} from 'redux/coins/coinsSlice';
import {
  allWalletsSelector,
  currentWalletSelector,
  setCurrentWalletIndex,
} from 'redux/wallets/walletsSlice';

const Wallets = ({navigation}) => {
  const currentWalletName = useSelector(currentWalletSelector)?.walletName;
  const allWallets = useSelector(allWalletsSelector);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.walletSection}>
        <Text style={styles.title}>Multi-Coin Wallets</Text>
        <FlatList
          data={allWallets}
          keyExtractor={item => item.walletName}
          renderItem={({item, index}) => (
            <View style={styles.walletBox}>
              <TouchableOpacity
                style={styles.walletList}
                onPress={() => {
                  dispatch(setCurrentWalletIndex(index));
                  navigation.navigate('Home');
                }}>
                <View style={styles.avatarWrapper}>
                  <Avatar.Image
                    style={styles.avatarAvatar}
                    size={54}
                    source={require('assets/images/Mark.png')}
                  />
                  {item.walletName === currentWalletName && (
                    <Badge style={styles.badge}>&#10004;</Badge>
                  )}
                </View>

                <View style={styles.textContainer}>
                  <Text style={styles.mainText}>{item.walletName}</Text>
                  <Text style={styles.secondaryText}>Multi-Coin Wallet</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.boxBtn}
                onPress={() =>
                  navigation.navigate('CreateWallet', {
                    walletName: item.walletName,
                  })
                }>
                <Text style={styles.settingsBtn}>&#8942;</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Wallets;
