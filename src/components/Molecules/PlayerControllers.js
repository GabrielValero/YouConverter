import React from 'react'
import {View, StyleSheet} from 'react-native'

import ControlPreviousButton from '../Atoms/ControlPreviousButton'
import ControlPlayButton from '../Atoms/ControlPlayButton'
import ControlNextButton from '../Atoms/ControlNextButton'
import ControlRepeatButton from '../Atoms/ControlRepeatButton'
import DownloadButton from '../Atoms/DownloadButton'

export default function PlayerControllers(){
	return(
		<View style={[styles.center, {width: "100%",justifyContent: 'space-around', heigbt: 90}]}>
			<ControlRepeatButton/>
			<View style={styles.center}>
				<ControlPreviousButton big/>
				<ControlPlayButton big/>
				<ControlNextButton big/>
			</View>
			<DownloadButton/>
		</View>
	)
}

const styles = StyleSheet.create({
	center:{
		flexDirection: 'row',
		alignItems: 'center',
	}
})