import {View, Text, ScrollView} from 'react-native';
import {WebView} from 'react-native-webview';
import LogoIcon from 'assets/images/icons/logoBlack.svg';
import styles from './PrivacyPolicyStyles';
import PrivacyPolicyComponent from 'components/PrivacyPolicyComponent';

const PrivacyPolicy = () => {
  /*============================== PDF file ↓↓↓↓↓==============================*/
  // let uri;

  // if (Platform.OS === "android") {
  //   uri =
  //     "https://docs.google.com/a/.Pdf/viewer?url=https://drive.google.com/u/0/uc?id=1Ate4jEbnn6WN1VM9K_qOYZA71uKW-UYY&export=download";
  // } else {
  //   uri = "https://drive.google.com/u/0/uc?id=1Ate4jEbnn6WN1VM9K_qOYZA71uKW-UYY&export=download";
  // }
  /*============================== PDF file ↑↑↑↑↑==============================*/

  return (
    <>
      <View style={styles.container}>
        <LogoIcon height={65} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>GDPR Compliant</Text>
        </View>
        <View style={styles.mainContainer}>
          {/*============================== PDF file ↓↓↓↓↓==============================*/}
          {/* <WebView
            style={styles.main}
            startInLoadingState={true}
            source={{
              uri,
            }}
            onShouldStartLoadWithRequest={(request) => {
              if (request.url !== uri) {
                Linking.openURL(request.url);
                return false;
              }
              return true;
            }}
          /> */}
          {/*============================== PDF file ↑↑↑↑↑==============================*/}

          {/*============================== HTML page in app ↓↓↓↓↓==============================*/}
          <ScrollView>
            <ScrollView horizontal={true}>
              <PrivacyPolicyComponent />
            </ScrollView>
          </ScrollView>
          {/*============================== HTML page in app ↑↑↑↑↑==============================*/}
        </View>
      </View>
    </>
  );
};

export default PrivacyPolicy;
