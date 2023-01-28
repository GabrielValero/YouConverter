import React from 'react'
import {View, StyleSheet, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import TextTemplate from '../Templates/TextTemplate'
import colors from '../../config/colors'
import useMusicPlayer from '../../hooks/useMusicPlayer'
export default function MusicoptionsModal(){
	const {resetPlayList} = useMusicPlayer()
	const navigation = useNavigation();

	const reset = ()=>{
		resetPlayList()
		navigation.popToTop()
	}
	return(
			<View style={styles.container}>
				<View style={styles.title}>
					<TextTemplate title style={{marginLeft: 10}}>Opciones adicionales</TextTemplate>
				</View>
				<Pressable onPress={reset} style={styles.option}>
					<MaterialCommunityIcons name="playlist-remove" size={24} color="white" />
					<TextTemplate bold style={{marginLeft: 10}}>Eliminar lista de Reproducción</TextTemplate>
				</Pressable>
			</View>
		)
}

const styles = StyleSheet.create({
	container:{
		paddingHorizontal: 30,
		paddingBottom: 20,
		paddingTop: 5,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		marginTop: 'auto',
		backgroundColor: colors.backgroundApp,
	},
	title:{
		height: 80,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	option:{
		width: '100%',
		height: 60,
		alignItems: 'center',
		flexDirection: 'row',

	}
})