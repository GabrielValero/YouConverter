import React, {useContext} from 'react'
import {View, StyleSheet, Image} from 'react-native'

import ReproductorContext from '../../context/ReproductorContext'
import ImageTemplate from '../Templates/ImageTemplate'
import TextTemplate from '../Templates/TextTemplate'

import ControlNextButton from '../Atoms/ControlNextButton'
import ControlPlayButton from '../Atoms/ControlPlayButton'
import ControlPreviousButton from '../Atoms/ControlPreviousButton'

export default function MiniMusicController(){

	const {track, isPlaying} = useContext(ReproductorContext)
	
	return track ? (
		<View style={[styles.row, styles.container]}>
				<ImageTemplate url={track.artwork} style={{borderRadius: 42, width: 42, height: 42}} cover />
				<View style={styles.text}>
					<TextTemplate noWrap title>
						{track.title}
					</TextTemplate>
				</View>
				<View style={styles.row}>
					<ControlPreviousButton/>
					<ControlPlayButton/>
					<ControlNextButton/>
				</View>
		</View>
	) : null
}

const styles = StyleSheet.create({
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
		width: 136,
		overflowX: 'hidden',
		justifyContent: 'center'
	},
	row:{
		flexDirection: 'row'
	},
	button:{
		width: 33,
		height: 33,
		resizeMode: 'contain',
		paddingHorizontal: 5,
		marginHorizontal: 10
	}
})