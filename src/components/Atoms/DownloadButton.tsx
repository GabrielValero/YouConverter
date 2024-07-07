import React,{useContext, useState} from 'react'
import {Pressable, Image, StyleSheet} from 'react-native'

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import useDownloadFile from '../../hooks/useDownloadFile'
import ButtonAnimated from './ButtonAnimated'
import colors from '../../config/colors'
import dimens from '../../config/dimens';
import { TrackData } from '../../types';

export default function DownloadButton({item} :{item: TrackData}){
	
	const {downloadTrack} = useDownloadFile()

	const onPress = ()=>{
		console.log("DB ",item);
		downloadTrack(item)
	}

	const source = require('../../../assets/downloadIcon.png')

	return(
		<ButtonAnimated styles={styles} onClick={onPress}>
			<MaterialCommunityIcons name="download" size={dimens.iconsSmall} color={colors.buttonColor} style={{marginRight: 10}}/>
		</ButtonAnimated>
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