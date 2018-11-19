/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

navigator.geolocation.requestAuthorization();

AppRegistry.registerComponent(appName, () => App);
