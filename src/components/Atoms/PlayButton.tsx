import React from 'react'
import {Pressable, StyleSheet} from 'react-native'

import { Ionicons } from '@expo/vector-icons';

import color from '../../config/colors'
import dimen from '../../config/dimens'

import useMusicPlayer from '../../hooks/useMusicPlayer'
import ButtonAnimated from "./ButtonAnimated"
import { TrackData } from '../../types';


type Props = {
	track: TrackData
	absolute?: any
}

export default function PlayButton({track, absolute}: Props){


	const {addTrack} = useMusicPlayer()

	const onPress = ()=>{
		addTrack({track})
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