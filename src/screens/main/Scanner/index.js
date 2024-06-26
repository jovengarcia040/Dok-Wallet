import {Text, TouchableOpacity, Dimensions, View} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import * as Animatable from 'react-native-animatable';
import styles from './ScannerStyles';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

console.disableYellowBox = true;

const Scanner = ({navigation, route}) => {
  // console.log('route on scanner', route);
  const onSuccess = ({data}) => {
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err),
    // );
    // route.params.setAddressToSetInput(data);
    navigation.navigate({
      name: route.params.page,
      params: {showModal: true, data},
    });
  };

  const makeSlideOutTranslation = (translationType, fromValue) => {
    return {
      from: {
        [translationType]: SCREEN_WIDTH * -0.18,
      },
      to: {
        [translationType]: fromValue,
      },
    };
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
      // flashMode={RNCamera.Constants.FlashMode.torch}
      showMarker={true}
      cameraStyle={{height: SCREEN_HEIGHT * 0.711}}
      bottomViewStyle={styles.bottomStyle}
      topViewStyle={styles.bottomStyle}
      //   bottomContent={
      //     <View style={styles.btnContainer}>
      //       <TouchableOpacity
      //         onPress={() => {
      //           navigation.navigate('Home', {showModal: false});
      //         }}>
      //         <Text style={styles.btn}>CANCEL</Text>
      //       </TouchableOpacity>
      //     </View>
      //   }
      customMarker={
        <View style={styles.rectangleContainer}>
          <View style={styles.topOverlay} />
          <View style={{flexDirection: 'row'}}>
            <View style={styles.leftAndRightOverlay} />

            <View style={styles.rectangle}>
              <Animatable.View
                style={styles.scanBar}
                direction="alternate-reverse"
                iterationCount="infinite"
                duration={1700}
                easing="linear"
                animation={makeSlideOutTranslation(
                  'translateY',
                  SCREEN_WIDTH * 0.2,
                )}
              />
            </View>
            <View style={styles.leftAndRightOverlay} />
          </View>
          <View style={styles.bottomOverlay} />
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(route.params.page, {showModal: false});
              }}>
              <Text style={styles.btn}>CANCEL</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
    />
  );
};

export default Scanner;
