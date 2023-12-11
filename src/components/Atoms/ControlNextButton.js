import React,{useContext} from 'react'
import {Pressable, Image, StyleSheet} from 'react-native'

import { Ionicons } from '@expo/vector-icons';

import useMusicPlayer from '../../hooks/useMusicPlayer'
import colors from '../../config/colors.js'
import dimens from '../../config/dimens.js'

export default function ControlNextButton({big}){
	const {playNextSong} = useMusicPlayer()

	return(
		<Pressable onPress={playNextSong}>
			<Ionicons name="play-skip-forward-outline" size={dimens.iconsSmall} color={colors.textColor}/>
		</Pressable>
	)
}