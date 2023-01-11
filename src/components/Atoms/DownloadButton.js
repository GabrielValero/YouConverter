import React,{useContext, useState} from 'react'
import {Pressable, Image, StyleSheet} from 'react-native'

import useDownloadFile from '../../hooks/useDownloadFile'
import colors from '../../config/colors.js'
import ButtonAnimated from './ButtonAnimated'

export default function ControlRandomButton(){
	
	const [isReady, setIsReady] = useState(true)
	const {downloadMedia} = useDownloadFile()

	const onPress = ()=>{
		isReady && (setIsReady(false), downloadMedia())
		setTimeout(()=>{
			setIsReady(true)
		}, 3000)
	}

	const source = require('../../../assets/downloadIcon.png')

	return(
		<ButtonAnimated styles={styles} source={source} onClick={onPress}/>
	)
}

const styles = StyleSheet.create({
	image:{
		width: 30,
		height: 30,
		resizeMode: 'contain',
		paddingHorizontal: 5
	},
	button:{
		width: 44,
		height: 44,
		borderRadius: 32,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: "#2A2C39",
	}
})