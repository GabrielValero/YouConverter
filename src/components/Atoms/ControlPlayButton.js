import React,{useContext} from 'react'
import {Pressable, Image, StyleSheet} from 'react-native'

import ReproductorContext from '../../context/ReproductorContext'
import useMusicPlayer from '../../hooks/useMusicPlayer'

export default function ControlPlayButton(){
	const {playSong} = useMusicPlayer()
	const {isPlaying} = useContext(ReproductorContext)

	return(
		<Pressable onPress={playSong}>
			{isPlaying ?
			<Image source={require('../../../assets/pause-icon.png')} style={styles.button}/>:
			<Image source={require('../../../assets/PlayVector.png')} style={styles.button}/>}
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