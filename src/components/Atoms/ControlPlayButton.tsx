import React,{useContext} from 'react'
import {Pressable, Image, StyleSheet} from 'react-native'

import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';

import ReproductorContext from '../../context/ReproductorContext'

import colors from '../../config/colors'
import dimens from '../../config/dimens'
import { useTrackStore } from '../../store/useTrackStore';

type Prop = {
	big?: any
}

export default function ControlPlayButton({big}: Prop){
	const {playState} = useContext(ReproductorContext)
	const playAndPause = useTrackStore(state=>state.playAndPause)
	
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
			<AntDesign name="pause" size={24} color="black" />:
			<FontAwesome name="play" size={dimens.iconsSmall} color={colors.textColor} />}
			
		</Pressable>
		)
}

const styles = StyleSheet.create({
	button:{
		marginHorizontal: 15,
	}
})