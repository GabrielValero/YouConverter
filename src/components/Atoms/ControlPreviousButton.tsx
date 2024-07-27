import React,{useContext} from 'react'
import {Pressable, Image, StyleSheet} from 'react-native'

import { Ionicons } from '@expo/vector-icons';

import colors from '../../config/colors'
import dimens from '../../config/dimens'
import { useTrackStore } from '../../store/useTrackStore';

export default function ControlPreviousButton({big}: {big:any}){
	const playPreviousSong = useTrackStore(state=>state.playPreviousSong)

	return(
		<Pressable onPress={playPreviousSong}>
			<Ionicons name="play-skip-back-outline" size={dimens.iconsSmall} color={colors.textColor}/>
		</Pressable>
		)
}