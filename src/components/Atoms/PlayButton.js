import React from 'react'
import {Image, Pressable, View, StyleSheet, Animated} from 'react-native'

import color from '../../config/colors.js'

import useMusicPlayer from '../../hooks/useMusicPlayer'

export default function PlayButton({song}){


	const {setPlayList} = useMusicPlayer()

	
	const rotateAnim = React.useRef(new Animated.Value(0)).current

	const getRotationAnimation = ()=>{
		const rotate = rotateAnim.interpolate({
			inputRange: [0, 1],
			outputRange: ["0deg", "360deg"]
		});
		return {rotate}
	}
	const timingAnimation = () => {
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }).start()
    }
	const onPress = ()=>{
		timingAnimation()
		setPlayList({song})
	}

	return(
		<Pressable onPress={onPress}>
			<Animated.View style={[styles.button, {transform: [getRotationAnimation()]}]}>
				<Image source={require('../../../assets/PlayVector.png')} style={styles.image}/>
			</Animated.View>	
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