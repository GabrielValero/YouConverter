import React, {useContext} from 'react'
import {View, Image, StyleSheet, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import ImageTemplate from '../Templates/ImageTemplate'
import TextTemplate from '../Templates/TextTemplate'
import ReproductorContext from '../../context/ReproductorContext'
import TrackMenuButton from '../Atoms/TrackMenuButton'
import PlayListButton from '../Atoms/PlayListButton'

import { FontAwesome } from '@expo/vector-icons';

export default function TrackPlayerInfo(){
	const navigation = useNavigation()
	const {track} = useContext(ReproductorContext)

	const onPress= ()=> navigation.goBack()
	return(
		<View style={styles.container}>
			<View style={styles.iconContainer}>
				<Pressable onPress={onPress}>
					<FontAwesome name="angle-down" size={30} color="white" />
				</Pressable>
				<TrackMenuButton/>
			</View>
			<View style={{alignItems: 'center'}}>
				<View style={styles.imageContainer}>
					<ImageTemplate url={track?.artwork} style={{borderRadius: 30}} coverWidth coverHeight cover/>
				</View>
				<TextTemplate title bold noWrap style={styles.text}>
					{track?.title}
				</TextTemplate>
			</View>
			<View style={styles.iconContainer}>
				<PlayListButton styles={{marginLeft: 'auto'}}/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	text: {
		marginHorizontal: 35,
	},
	container:{
		position: 'relative',
		alignItems: 'center',
	},
	imageContainer:{
		width: "70%",
		height: 370,
		marginBottom: 30,
		alignItems: 'center',
		justifyContent: "center",
		flexDirection: 'row'

	},
	iconContainer:{
		width: "100%",
		height: 70,
		paddingHorizontal: 30,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',

	},
	background:{
		width: "100%",
		height: 270,
		backgroundColor: "#E56464",
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex:0
	}
})