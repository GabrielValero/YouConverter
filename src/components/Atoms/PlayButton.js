import React from 'react'
import {Pressable, StyleSheet} from 'react-native'

import { Ionicons } from '@expo/vector-icons';

import color from '../../config/colors.js'
import dimen from '../../config/dimens.js'

import useMusicPlayer from '../../hooks/useMusicPlayer'
import ButtonAnimated from "./ButtonAnimated"

export default function PlayButton({song, absolute}){


	const {addSong} = useMusicPlayer()

	const onPress = ()=>{
		addSong({song})
	}

	return(
		<ButtonAnimated styles={styles} onClick={onPress} absolute={absolute}>
			<Ionicons name="ios-play-circle" size={dimen.iconsMedium} color={color.mainColor} />
		</ButtonAnimated>
	)
}

const styles = StyleSheet.create({
	button:{
		margin: 5,
		justifyContent: 'center',
		alignItems: 'center'
	},
	touchable:{
		position: 'absolute',
		bottom: 0,
		right: 0,
	}
})