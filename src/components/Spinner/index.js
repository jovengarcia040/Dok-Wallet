import React from 'react';
import {View, ActivityIndicator, StyleSheet, Dimensions} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        style={{
          flex: 1,
          alignSelf: 'center',
        }}
        color="#F44D03"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth,
    height: screenHeight,
  },
});

export default Spinner;
