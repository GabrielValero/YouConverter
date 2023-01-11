import React, {useContext} from 'react'
import {View, Image, StyleSheet, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import ImageTemplate from '../Templates/ImageTemplate'
import TextTemplate from '../Templates/TextTemplate'
import ReproductorContext from '../../context/ReproductorContext'

export default function TrackPlayerInfo(){
	const navigation = useNavigation()
	const {track} = useContext(ReproductorContext)

	const onPress= ()=> navigation.goBack()
	return(
		<View style={styles.container}>
			<View style={styles.background}></View>
			<Pressable onPress={onPress} style={styles.iconContainer}>
				<Image source={require('../../../assets/downButton.png')} style={styles.icon}/>
			</Pressable>
			<View style={{alignItems: 'center'}}>
				<View style={styles.imageContainer}>
					<ImageTemplate url={track.artwork} style={{borderRadius: 30}} coverWidth coverHeight cover/>
				</View>
				<TextTemplate title bold noWrap style={styles.text}>
					{track.title}
				</TextTemplate>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	text: {
		marginHorizontal: 35,
	},
	container:{
		width: '100%',
		height: "80%",
		paddingVertical: 50,
		position: 'relative',
		justifyContent: 'space-around',
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
	icon: {
		width: 37,
		height: 37,
		resizeMode: 'contain',
	},
	iconContainer:{
		top: 33,
		left: 20,
		position: 'absolute'
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