import React from 'react'
import {View, StyleSheet} from 'react-native'

import PlayerControllers from '../Molecules/PlayerControllers'
import ProgressBar from '../Molecules/ProgressBar'

export default function MusicController(){

	return(
		<View style={styles.container}>
			<ProgressBar/>
			<PlayerControllers/>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		paddingTop: 40,
		width: "100%",
		position: 'absolute',
		bottom: 0,
		backgroundColor: "#161616",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 14,
		paddingHorizontal:  35,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30
	}
})