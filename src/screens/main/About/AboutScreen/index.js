import {View, Text, TouchableOpacity} from 'react-native';
import styles from './AboutScreenStyles';
import {aboutList} from 'data/aboutList';
import KeyboardArrow from 'assets/images/icons/keyboard-arrow-right.svg';

const AboutScreen = ({navigation}) => {
  return (
    <View style={styles.section}>
      {aboutList.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.list}
          onPress={() => navigation.navigate(item.page)}>
          <View style={styles.box}>
            <View style={styles.iconBox}>{item.icon}</View>
            <Text style={styles.title}>{item.page}</Text>
          </View>
          <KeyboardArrow height="30" width="30" style={styles.arrow} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default AboutScreen;
