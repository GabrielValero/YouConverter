import React, {useEffect} from 'react'
import {Image, Pressable, View, StyleSheet, Animated} from 'react-native'

import color from '../../config/colors.js'

export default function ButtonAnimated({styles, onClick, source}){
	
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
		onClick()
	}
	return(
		<Pressable onPress={onPress} style={styles.touchable}>
			<View style={styles.container}>
				<Animated.View style={[styles.button, {transform: [getRotationAnimation()]}]}>
					<Image source={source} style={styles.image}/>
				</Animated.View>	
			</View>
		</Pressable>
	)
}