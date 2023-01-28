import React, {useEffect, useContext} from 'react'
import {View, StyleSheet} from 'react-native'
import {Slider} from '@miblanchard/react-native-slider';

import {useProgress} from 'react-native-track-player';
import ReproductorContext from '../../context/ReproductorContext'
import useMusicPlayer from '../../hooks/useMusicPlayer'
import TextTemplate from '../Templates/TextTemplate'
export default function ProgressBar(){
	const { position, buffered, duration } = useProgress()
	const {track} = useContext(ReproductorContext)
	const {seekTo} = useMusicPlayer()

	// useEffect(()=>{
	// 	console.log("duration: ", track.duration, " position: ", position, " buffered: ", buffered)
	// 	console.log("progress: ", position*100/track.duration, "% buffered: ", buffered*100/track.duration)
	// }, [position, buffered])

	return(
		<View style={styles.container}>
			<View style={styles.progressBarContainer}>
				<View style={[styles.bufferBar, styles.progressBar, {width: `${track?.duration ? buffered*100/track.duration : "0"}%`}]}></View>
				<Slider
					value={position}
					animateTransitions={true}
					minimumValue={0}
					maximumValue={track?.duration}
					trackClickable={true}
					containerStyle={styles.progressBar}
					maximumTrackTintColor={"transparent"}
					minimumTrackTintColor={"#DE5565"}
					minimumTrackStyle={styles.bar}
					thumbTintColor={"#DE5565"}
					onSlidingComplete={seekTo}
					trackStyle={styles.bar}
				/>
			</View>
			<View style={styles.timeContainer}>
				<TextTemplate small bold>
					{position ? `${parseInt(position/60)}:${parseInt(position%60)}` : "0:00"}
				</TextTemplate>
				<TextTemplate small bold>
					{track?.duration ? `${parseInt(track.duration/60)}:${parseInt(track.duration%60)}` : "0:00"}
				</TextTemplate>
			</View>
		</View>
	)
}
/*
		<View style={styles.container}>
			<View style={[styles.bufferBar, styles.bar, {width: `${buffered*100/track.duration}%`}]}></View>
			<View style={[styles.bar, styles.progressBar, {width: `${position*100/track.duration}%`}]}></View>
			*/

const styles = StyleSheet.create({
	container:{
		width: "100%",
		marginBottom: 10,
		alignItems: 'center'
	},
	timeContainer:{
		width: "93%",
		height: 20,
		marginTop: 10,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		position: "relative"
	},
	progressBarContainer:{
		width: "95%",
		height: 5,
		borderRadius: 30,
		position: 'relative',
		alignItems: 'center',
		backgroundColor: "#7A7A7A"
	},
	progressBar:{
		width: "100%",
		position: 'absolute',
		left: 0,
		height: 5,
		borderRadius: 30,
	},
	bar:{
		height: 5,
		borderRadius: 30,
	},
	bufferBar:{
		backgroundColor: '#BFBFBF'
	}
})