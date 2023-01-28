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
		marginTop: "auto",
		backgroundColor: "#161616",
		alignItems: "center",
		paddingBottom: 30,
		paddingHorizontal:  35,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30
	}
})