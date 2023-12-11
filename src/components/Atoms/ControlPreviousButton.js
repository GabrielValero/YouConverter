import React,{useContext} from 'react'
import {Pressable, Image, StyleSheet} from 'react-native'

import { Ionicons } from '@expo/vector-icons';

import useMusicPlayer from '../../hooks/useMusicPlayer'

import colors from '../../config/colors.js'
import dimens from '../../config/dimens.js'

export default function ControlPreviousButton({big}){
	const {playPreviousSong} = useMusicPlayer()


	return(
		<Pressable onPress={playPreviousSong}>
			<Ionicons name="play-skip-back-outline" size={dimens.iconsSmall} color={colors.textColor}/>
		</Pressable>
		)
}