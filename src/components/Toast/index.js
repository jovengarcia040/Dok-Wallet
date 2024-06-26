import {Text, View} from 'react-native';
import styles from './ToastStyles';

const Toast = ({message}) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardText}>{message}</Text>
    </View>
  );
};

export default Toast;
