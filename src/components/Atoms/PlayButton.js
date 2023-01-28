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
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	container:{
		padding: 15,
	},
	touchable:{
		position: 'absolute',
		bottom: 0,
		right: 0,
	},
	image:{
		width: '70%',
		height: '70%'
	}
})