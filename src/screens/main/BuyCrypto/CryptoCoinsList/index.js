import React from 'react';
import {View, Linking, Platform} from 'react-native';
import styles from './CryptoCoinsListStyles';
import {WebView} from 'react-native-webview';

const CryptoCoinsList = ({route}) => {
  const uri = route.params?.sourceProvider;

  const htmlContent = `
  <html>
  <head>
    <script>
      window.simplexAsyncFunction = function () {
          Simplex.init({public_key: 'pk_test_b2b2642e-9f59-47fb-b392-fd828c797c70'})
      };
    </script>
    <script src="https://cdn.test-simplexcc.com/sdk/v1/js/sdk.js" async></script>
  </head>

  <body>
    <form id="simplex-form">
        <div id="checkout-element">
        </div>
    </form>
    <script src='https://iframe.sandbox.test-simplexcc.com/form-sdk.js' type="text/javascript"></script>
    <script>
        window.simplex.createForm();
    </script>
  </body>
  </html>
`;

  if (Platform.OS === 'android') {
    return (
      <View style={styles.mainContainer}>
        <WebView
          style={styles.main}
          originWhitelist={[
            'http://*',
            'https://*',
            'about:srcdoc',
            'data:',
            'blob:',
            'filesystem:',
          ]}
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
    );
  } else if (Platform.OS === 'ios') {
    return (
      <View style={styles.mainContainer}>
        {uri === 'https://buy.chainbits.com/' ? (
          <WebView
            style={styles.main}
            source={{html: htmlContent}}
            originWhitelist={['*']}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            // onError={error => console.error('WebView error:', error)}
            // onLoadEnd={() => console.log('WebView load ended')}
            // onLoadStart={() => console.log('WebView load start')}
          />
        ) : (
          <WebView
            style={styles.main}
            originWhitelist={[
              'http://*',
              'https://*',
              'about:srcdoc',
              'data:',
              'blob:',
              'filesystem:',
            ]}
            source={{uri}}
            onShouldStartLoadWithRequest={request => {
              if (request.url !== uri) {
                Linking.openURL(request.url);
                return false;
              }
              return true;
            }}
          />
        )}
      </View>
    );
  }
};

export default CryptoCoinsList;
