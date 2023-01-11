import React from 'react'
import {StyleSheet} from 'react-native'

import color from '../../config/colors.js'

import useMusicPlayer from '../../hooks/useMusicPlayer'
import ButtonAnimated from "./ButtonAnimated"

export default function PlayButton({song}){


	const {setPlayList} = useMusicPlayer()

	const onPress = ()=>{
		setPlayList({song})
	}
	const source = require('../../../assets/PlayVector.png')

	return(
		<ButtonAnimated styles={styles} onClick={onPress} source={source}/>
	)
}

const styles = StyleSheet.create({
	button:{
		width: 44,
		height: 44,
		borderRadius: 44,
		backgroundColor: color.pastelRed,
		position: 'absolute',
		bottom: 10,
		right: 10,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	image:{
		width: '70%',
		height: '70%'
	}
})