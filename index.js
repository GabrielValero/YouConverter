import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import App from './App';
import TrackPlayer from 'react-native-track-player';
//import notifee, { EventType } from '@notifee/react-native';

import {PlaybackService} from './src/services';

// notifee.onBackgroundEvent(async ({ type, detail }) => {
//     const { notification, pressAction } = detail;

//     console.log(type);
// });

registerRootComponent(App);
TrackPlayer.registerPlaybackService(() => PlaybackService);