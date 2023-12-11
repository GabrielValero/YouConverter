import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import App from './App';
import TrackPlayer from 'react-native-track-player';

import {PlaybackService} from './src/services';


registerRootComponent(App);
TrackPlayer.registerPlaybackService(() => PlaybackService);