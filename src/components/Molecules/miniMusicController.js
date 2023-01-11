import React, {useContext} from 'react'
import {View, StyleSheet, Image, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import ReproductorContext from '../../context/ReproductorContext'
import ImageTemplate from '../Templates/ImageTemplate'
import TextTemplate from '../Templates/TextTemplate'

import ControlNextButton from '../Atoms/ControlNextButton'
import ControlPlayButton from '../Atoms/ControlPlayButton'
import ControlPreviousButton from '../Atoms/ControlPreviousButton'

export default function MiniMusicController(){

	const {track, isPlaying} = useContext(ReproductorContext)
	const navigation = useNavigation();
	const moveTo = () => navigation.navigate('MusicPlayerStack')
	return track ? (
		<View style={[styles.row, styles.container]}>
			<Pressable onPress={moveTo} style={[styles.row, styles.infoContainer]}>
				<ImageTemplate url={track.artwork} style={{borderRadius: 42, width: 42, height: 42}} cover />
				<View style={styles.text}>
					<TextTemplate noWrap title>
						{track.title}
					</TextTemplate>
				</View>
			</Pressable>
			<View style={[styles.row, styles.controllerContainer]}>
				<ControlPlayButton />
				<ControlNextButton />
			</View>
		</View>
	) : null
}

const styles = StyleSheet.create({
	infoContainer:{
		width: "70%",
		justifyContent: 'space-between'
	},
	container:{
		width: "100%",
		height: 70,
		paddingLeft: 15,
		position:"absolute",
		bottom: 0,
		backgroundColor: "#161616", 
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	text: {
		width: 200,
		overflowX: 'hidden',
		justifyContent: 'center'
	},
	row:{
		flexDirection: 'row',
		alignItems: 'center'
	},
	button:{
		width: 33,
		height: 33,
		resizeMode: 'contain',
		paddingHorizontal: 5,
		marginHorizontal: 10
	},
	controllerContainer:{
		marginRight: 20,
		width: "23%",
		justifyContent: 'space-between',
	}
})