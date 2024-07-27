import React, {useContext} from 'react'
import {View, StyleSheet} from 'react-native'
import {Slider} from '@miblanchard/react-native-slider';

import {useProgress} from 'react-native-track-player';
import TextTemplate from '../Templates/TextTemplate'
import colors from '../../config/colors';
import formatTime from '../../utils/formatTime';
import { useTrackStore } from '../../store/useTrackStore';

export default function ProgressBar(){
	const { position, buffered } = useProgress()
	const track = useTrackStore(state=>state.track)
	const seekTo = useTrackStore(state=>state.seekTo)

	const trackPosition = formatTime(position);
	const trackDuration = formatTime(track!.duration);
	
	return(
		<View style={styles.container}>
			<View style={styles.progressBarContainer}>
				{track?.duration && (<>
					<View style={[styles.bufferBar, styles.progressBar, {width: `${track?.duration ? buffered*100/track.duration : "0"}%`}]}/>
					<Slider
						value={position}
						animateTransitions={true}
						minimumValue={0}
						maximumValue={track?.duration}
						containerStyle={styles.progressBar}
						maximumTrackTintColor={"transparent"}
						minimumTrackTintColor={colors.mainColor}
						minimumTrackStyle={styles.bar}
						thumbTintColor={"#fff"}
						onSlidingComplete={seekTo}
					/>
				</>)}
			</View>
			<View style={styles.timeContainer}>
				<TextTemplate small bold>
					{trackPosition}
				</TextTemplate>
				<TextTemplate small bold>
					{trackDuration}
				</TextTemplate>
			</View>
		</View>
	)
}

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
		backgroundColor: 'rgba(187, 242, 216, 0.30);'
	}
})