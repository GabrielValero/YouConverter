import React from 'react'
import {Pressable, StyleSheet} from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TrackMenu({styles}){
	const onPress = ()=>{

	}
	return(
		<Pressable onPress={onPress} style={styles}>
			<MaterialCommunityIcons name="playlist-music-outline" size={30} color="white" />
		</Pressable>
		)
}