import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppContainer from "./src/sys/AppContainer";

AppRegistry.registerComponent(appName, () => AppContainer);
