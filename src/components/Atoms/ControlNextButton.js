import React,{useContext} from 'react'
import {Pressable, Image, StyleSheet} from 'react-native'

import useMusicPlayer from '../../hooks/useMusicPlayer'
import colors from '../../config/colors.js'

export default function ControlNextButton({big}){
	const {playNextSong} = useMusicPlayer()

	const styleButton = [big && styles.big]

	return(
		<Pressable onPress={playNextSong} style={styleButton}>
			<Image source={require('../../../assets/next-icon.png')} style={styles.icon}/>
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
	big:{
		width: 46,
		height: 46,
		marginLeft: 10, 
		backgroundColor: colors.whiteGray,
		borderRadius: 32,
		justifyContent: 'center',
		alignItems: 'center'
	}
})