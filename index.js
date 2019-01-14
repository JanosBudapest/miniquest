/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppContainer from "../miniquest/src/AppContainer";

AppRegistry.registerComponent(appName, () => AppContainer);
