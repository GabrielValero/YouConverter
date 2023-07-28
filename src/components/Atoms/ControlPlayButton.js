import React,{useContext} from 'react'
import {Pressable, Image, StyleSheet} from 'react-native'

import { Ionicons } from '@expo/vector-icons';

import ReproductorContext from '../../context/ReproductorContext'
import useMusicPlayer from '../../hooks/useMusicPlayer'

import colors from '../../config/colors'
import dimens from '../../config/dimens'

export default function ControlPlayButton({big}){
	const {playAndPause} = useMusicPlayer()
	const {playState} = useContext(ReproductorContext)

	
	return big ? (
		<Pressable onPress={playAndPause} style={styles.button}>
			{playState === "playing" ?
			<Ionicons name="pause-circle" size={dimens.iconsBig} color={colors.mainColor} />:
			<Ionicons name="play-circle" size={dimens.iconsBig} color={colors.mainColor} />}
		</Pressable>
		) 
	
	:
	(
		<Pressable onPress={playAndPause} style={{margin: 15}}>
			{playState === "playing" ?
			<Ionicons name="ios-pause" size={dimens.iconsSmall} color={colors.textColor} />:
			<Ionicons name="ios-play" size={dimens.iconsSmall} color={colors.textColor} />}
		</Pressable>
		)
}

const styles = StyleSheet.create({
	button:{
		marginHorizontal: 15,
	}
})