import React from 'react'
import {Pressable, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { SimpleLineIcons } from '@expo/vector-icons';

export default function TrackMenu(){
	const navigation = useNavigation();
	const moveTo = () => navigation.navigate('MusicOptions')

	return(
		<Pressable onPress={moveTo}>
			<SimpleLineIcons name="options-vertical" size={24} color="white" />
		</Pressable>
		)
}