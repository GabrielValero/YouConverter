import React from 'react'
import {View, Image, StyleSheet} from 'react-native'

import PlayButton from '../Atoms/PlayButton'
import ImageTemplate from '../Templates/ImageTemplate'

export default function CardVideo({item}){
	return(
			<View style={styles.card}>
				<ImageTemplate url={item.artwork} style={{borderRadius: 28}} coverWidth coverHeight cover />
				<PlayButton song={item} absolute/>
			</View>
		)
}

const styles = StyleSheet.create({
	card:{
		width: '45%',
		height: 200,
		position:'relative'
	},
})