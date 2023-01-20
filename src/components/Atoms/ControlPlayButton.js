import React,{useContext} from 'react'
import {Pressable, Image, StyleSheet} from 'react-native'

import ReproductorContext from '../../context/ReproductorContext'
import useMusicPlayer from '../../hooks/useMusicPlayer'

export default function ControlPlayButton({big}){
	const {playSong} = useMusicPlayer()
	const {playState} = useContext(ReproductorContext)

	const styleButton = [big && styles.big]

	return(
		<Pressable onPress={playSong} style={styleButton}>
			{playState === "playing" ?
			<Image source={require('../../../assets/pause-icon.png')} style={styles.icon}/>:
			<Image source={require('../../../assets/PlayVector.png')} style={styles.icon}/>}
		</Pressable>
		)
}

const styles = StyleSheet.create({
	icon:{
		width: 44,
		height: 44,
		resizeMode: 'contain',
		paddingHorizontal: 5
	},
	big:{
		width: 62,
		height: 62,
		backgroundColor: "#D04646",
		borderRadius: 32,
		justifyContent: 'center',
		alignItems: 'center'
	}
})