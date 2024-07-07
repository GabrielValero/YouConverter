import React, {useEffect} from 'react'
import {Image, Pressable, View, StyleSheet, Animated, StyleProp, ViewStyle} from 'react-native'

type Props = {
	styles: any
	onClick: () => void
	children: React.JSX.Element
	absolute?: any
}

export default function ButtonAnimated({styles, onClick, children, absolute}: Props){
	
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
		<Pressable onPress={onPress} style={absolute && styles!.touchable}>
			<Animated.View style={[styles.button, {transform: [getRotationAnimation()]}]}>
				{children}
			</Animated.View>
		</Pressable>
	)
}