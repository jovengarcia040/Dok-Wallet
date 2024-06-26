import {View, Text, Linking} from 'react-native';
import {WebView} from 'react-native-webview';
import LogoIcon from 'assets/images/icons/logoBlack.svg';
import styles from './TermsConditionsStyles';

const TermsConditions = () => {
  const uri = 'https://dokwallet.com/terms.html';

  return (
    <>
      <View style={styles.container}>
        <LogoIcon height={65} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Terms of Use</Text>
        </View>
        <View style={styles.mainContainer}>
          <WebView
            style={styles.main}
            source={{uri}}
            onShouldStartLoadWithRequest={request => {
              if (request.url !== uri) {
                Linking.openURL(request.url);
                return false;
              }
              return true;
            }}
          />
        </View>
      </View>
    </>
  );
};

export default TermsConditions;
