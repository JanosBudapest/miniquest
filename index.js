import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Setup from "./src/sys/Setup";

AppRegistry.registerComponent(appName, () => Setup);
