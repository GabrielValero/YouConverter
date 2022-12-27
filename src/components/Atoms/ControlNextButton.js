import React,{useContext} from 'react'
import {Pressable, Image, StyleSheet} from 'react-native'

import useMusicPlayer from '../../hooks/useMusicPlayer'

export default function ControlNextButton(){
	const {playNextSong} = useMusicPlayer()

	return(
		<Pressable onPress={playNextSong}>
			<Image source={require('../../../assets/next-icon.png')} style={styles.button}/>
		</Pressable>
		)
}

const styles = StyleSheet.create({
	button:{
		width: 33,
		height: 33,
		resizeMode: 'contain',
		paddingHorizontal: 5,
		marginHorizontal: 10
	}
})