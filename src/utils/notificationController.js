import notifee from '@notifee/react-native';

import { Ionicons } from '@expo/vector-icons';
import dimens from '../config/dimens';
import colors from '../config/colors';
import nextIcon from '../../assets/next-icon.png'
import previousIcon from '../../assets/previous-icon.png'
import playIcon from '../../assets/PlayVector.png'

export async function onDisplayNotification({title, artwork}){
    await notifee.requestPermission()
    
    const channelId = await notifee.createChannel({
    id: 'music',
    name: 'Music Player',
    });

    // Crear acciones para los botones
    const playPauseAction = {
        title: 'Play/Pause',
        //icon: require('../../assets/PlayVector.png'),
        pressAction: {
            id: 'play-pause',
        },
    };
    const nextAction = {
        title: 'Next',
        icons: 'next_icon',
        pressAction: {
            id: 'next',
        },
    };
    const previousAction = {
        title: 'Previous',
        //icon: require('../../assets/previous-icon.png'),
        pressAction: {
            id: 'previous',
        },
    };

    // Mostrar la notificación
    await notifee.displayNotification({
        title: title,
        body: 'Control your music from here!',
        android: {
            channelId,
            actions: [nextAction, playPauseAction, previousAction],
        },
    });
}