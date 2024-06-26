import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        backgroundColor: 'rgb(255, 255, 255)',
      },
      android: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
      },
    }),
    // overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.22,
    shadowRadius: 5,
    elevation: 5,
  },
  cardText: {fontSize: 16, color: 'black'},
});
export default styles;
