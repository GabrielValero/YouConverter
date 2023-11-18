import React, {useState} from 'react'
import {View, Image, Pressable, StyleSheet} from 'react-native'
import {RepeatMode} from 'react-native-track-player'
import useMusicPlayer from '../../hooks/useMusicPlayer'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';
import dimens from '../../config/dimens';

export default function ControlRepeatButton(){
	const {setRepeatMode} = useMusicPlayer()

	const [index, setIndex] = useState(0)

	const images = [
		<MaterialCommunityIcons name="repeat-off" size={dimens.iconsSmall} color={colors.buttonColor} />,
		<MaterialCommunityIcons name="repeat" size={dimens.iconsSmall} color={colors.buttonColor} />,
		<MaterialCommunityIcons name="repeat-once" size={dimens.iconsSmall} color={colors.buttonColor} />
	]

	const onPress = ()=>{
		if(index === 0){
			setRepeatMode(RepeatMode.Track)
			setIndex(n=> n+1)
		}else if(index === 1){
			setRepeatMode(RepeatMode.Queue)
			setIndex(n=> n+1)
		}else{
			setIndex(n=> n-n)
			setRepeatMode(RepeatMode.Off)
		}
	}

	return(
		<Pressable onPress={onPress} style={styles.button}>
			{images[index]}
		</Pressable>
	)
}

const styles = StyleSheet.create({
	icon:{
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
		alignItems: 'center'
	},
})