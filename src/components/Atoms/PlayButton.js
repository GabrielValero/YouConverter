import React from 'react'
import {Image, Pressable, View, StyleSheet} from 'react-native'

import color from '../../config/colors.js'

import useMusicPlayer from '../../hooks/useMusicPlayer'

export default function PlayButton({song}){

	const {setPlayList} = useMusicPlayer()

	const onPress = ()=>{
		setPlayList({song})
	}

	return(
		<Pressable onPress={onPress}>
			<View style={styles.button}>
				<Image source={require('../../../assets/PlayVector.png')} style={styles.image}/>
			</View>	
		</Pressable>
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