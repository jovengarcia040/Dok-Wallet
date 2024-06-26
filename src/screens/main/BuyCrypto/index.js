import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import styles from './BuyCryptoStyles';
import {cards} from 'data/data';
import CryptoProviders from './CryptoProviders';

const BuyCrypto = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {cards.map((item, index) => (
          <TouchableOpacity
            style={styles.cardBox}
            key={index}
            onPress={() => navigation.navigate('CryptoProviders')}>
            <Image source={item.src} style={styles.cardItem} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default BuyCrypto;
