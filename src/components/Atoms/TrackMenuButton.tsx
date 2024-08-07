import React from 'react'
import {Pressable, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { SimpleLineIcons } from '@expo/vector-icons';
import { RootStackNavigationProp } from '../../types';

export default function TrackMenu(){
	const navigation = useNavigation<RootStackNavigationProp>();
	const moveTo = () => navigation.navigate('MusicOptions')

	return(
		<Pressable onPress={moveTo}>
			<SimpleLineIcons name="options-vertical" size={24} color="white" />
		</Pressable>
		)
}