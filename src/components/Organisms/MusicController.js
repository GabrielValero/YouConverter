import React, { useContext } from 'react'
import {View, StyleSheet} from 'react-native'

import PlayerControllers from '../Molecules/PlayerControllers'
import ProgressBar from '../Molecules/ProgressBar'
import TextTemplate from '../Templates/TextTemplate'
import ReproductorContext from '../../context/ReproductorContext'


export default function MusicController(){
	const {track} = useContext(ReproductorContext)
	return(
		<View style={styles.container}>
			<TextTemplate textSemiBig bold noWrap numberOfLines={2} style={styles.text}>{track.title}</TextTemplate>
			<ProgressBar/>
			<PlayerControllers/>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		width: "100%",
		alignItems: "center",
		position: 'relative',
		paddingBottom: 30,
		paddingHorizontal:  35,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30
	},
	text:{
		marginBottom: 40
	},
	
})