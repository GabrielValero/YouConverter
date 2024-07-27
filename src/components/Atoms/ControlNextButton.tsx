import React,{useContext} from 'react'
import {Pressable, Image, StyleSheet} from 'react-native'

import { Ionicons } from '@expo/vector-icons';

import colors from '../../config/colors'
import dimens from '../../config/dimens'
import { useTrackStore } from '../../store/useTrackStore';

type Prop = {
	big?: any
}

export default function ControlNextButton({big}: Prop){
	const playNextSong = useTrackStore(state=>state.playNextSong)

	return(
		<Pressable onPress={playNextSong}>
			<Ionicons name="play-skip-forward-outline" size={dimens.iconsSmall} color={colors.textColor}/>
		</Pressable>
	)
}