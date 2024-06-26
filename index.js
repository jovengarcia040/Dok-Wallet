/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as coinswallet} from './app.json';

AppRegistry.registerComponent(coinswallet, () => App);

if (Platform.OS === 'web') {
  const rootTag =
    document.getElementById('root') || document.getElementById('coinswallet');
  AppRegistry.runApplication('coinswallet', {rootTag});
}
