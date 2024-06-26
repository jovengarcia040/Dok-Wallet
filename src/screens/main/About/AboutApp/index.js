import {View, Text} from 'react-native';
import styles from './AboutAppStyles';

const AboutApp = () => {
  return (
    <>
      <View style={styles.section}>
        <Text style={styles.title}>Change Log:</Text>
        <Text style={styles.list}>Version: v1.0.0 (10002)</Text>
        <Text style={styles.list}>Release Date: Sept 11, 2020</Text>
        <Text style={styles.list}>Features:</Text>
        <Text style={styles.item}>- Initial version</Text>
      </View>
    </>
  );
};

export default AboutApp;
