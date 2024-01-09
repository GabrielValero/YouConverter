import React, {useState} from 'react'
import {View, Image, Pressable, StyleSheet} from 'react-native'
import {RepeatMode} from 'react-native-track-player'
import useMusicPlayer from '../../hooks/useMusicPlayer'
import Svg, { Path } from "react-native-svg"

import dimens from '../../config/dimens';
import colors from '../../config/colors';

export default function ControlRepeatButton({size = 40}){
	const {setRepeatMode} = useMusicPlayer()

	const [isRepeat, setRepeat] = useState(true)
	const repeatAllIcon = ()=> <Svg
			style={styles.center}
			width={size}
			height={size}
			viewBox={`-5 -4 30 30`}
			fill="none"
		>
			<Path
				fill={colors.textColor}
				d="m6.85 19 .85.85c.2.2.296.433.288.7a1.05 1.05 0 0 1-.288.7c-.2.2-.437.304-.712.313a.93.93 0 0 1-.713-.288L3.7 18.7a.883.883 0 0 1-.213-.325A1.067 1.067 0 0 1 3.426 18c0-.133.02-.258.063-.375a.894.894 0 0 1 .21-.325l2.576-2.575a.93.93 0 0 1 .713-.287c.275.009.513.113.712.312.183.2.28.433.288.7a.913.913 0 0 1-.288.7l-.85.85H17v-3c0-.283.096-.52.288-.712A.972.972 0 0 1 18 13c.283 0 .52.096.713.288.192.192.287.43.287.712v3c0 .55-.196 1.021-.587 1.413A1.921 1.921 0 0 1 17 19H6.85Zm10.3-12H7v3a.968.968 0 0 1-.288.713A.964.964 0 0 1 6 11a.965.965 0 0 1-.712-.288A.973.973 0 0 1 5 10V7c0-.55.196-1.02.588-1.412A1.93 1.93 0 0 1 7 5h10.15l-.85-.85a.918.918 0 0 1-.288-.7c.008-.267.104-.5.288-.7.2-.2.437-.304.712-.312a.936.936 0 0 1 .713.287L20.3 5.3c.1.1.17.208.213.325.042.117.063.242.062.375 0 .133-.02.258-.062.375a.866.866 0 0 1-.213.325l-2.575 2.575c-.2.2-.438.296-.712.288a1.02 1.02 0 0 1-.713-.313c-.184-.2-.28-.433-.288-.7a.914.914 0 0 1 .288-.7l.85-.85Z"
			/>
		</Svg>
	const repeatOneIcon = ()=> <Svg
			style={styles.center}
			width={size}
			height={size}
			viewBox={`-5 -4 30 30`}
			fill="none"
		>
			<Path
				fill={colors.textColor}
				d="M11.5 10.5h-.75a.726.726 0 0 1-.75-.75.726.726 0 0 1 .75-.75H12c.283 0 .52.096.713.288.192.192.288.43.287.712v4.25a.73.73 0 0 1-.75.75.726.726 0 0 1-.75-.75V10.5ZM6.85 19l.85.85c.2.2.296.433.288.7a1.05 1.05 0 0 1-.288.7c-.2.2-.437.304-.712.313a.93.93 0 0 1-.713-.288L3.7 18.7a.883.883 0 0 1-.213-.325A1.067 1.067 0 0 1 3.426 18c0-.133.02-.258.063-.375a.894.894 0 0 1 .21-.325l2.576-2.575a.93.93 0 0 1 .713-.287c.275.009.513.113.712.312.183.2.28.433.288.7a.913.913 0 0 1-.288.7l-.85.85H17v-3c0-.283.096-.52.288-.712A.972.972 0 0 1 18 13c.283 0 .52.096.713.288.192.192.287.43.287.712v3c0 .55-.196 1.021-.587 1.413A1.921 1.921 0 0 1 17 19H6.85Zm10.3-12H7v3a.968.968 0 0 1-.288.713A.964.964 0 0 1 6 11a.965.965 0 0 1-.712-.288A.973.973 0 0 1 5 10V7c0-.55.196-1.02.588-1.412A1.93 1.93 0 0 1 7 5h10.15l-.85-.85a.918.918 0 0 1-.288-.7c.008-.267.104-.5.288-.7.2-.2.437-.304.712-.312a.936.936 0 0 1 .713.287L20.3 5.3c.1.1.17.208.213.325.042.117.063.242.062.375 0 .133-.02.258-.062.375a.866.866 0 0 1-.213.325l-2.575 2.575c-.2.2-.438.296-.712.288a1.02 1.02 0 0 1-.713-.313c-.184-.2-.28-.433-.288-.7a.914.914 0 0 1 .288-.7l.85-.85Z"
			/>
		</Svg>

	const onPress = ()=>{
		setRepeat(!isRepeat)
	}

	return(
		<Pressable onPress={onPress} style={[styles.center, {width: size, height: size}]}>
			{isRepeat ? repeatAllIcon() : repeatOneIcon() }
		</Pressable>
	)
}

const styles = StyleSheet.create({
	center:{
		justifyContent: 'center',
		alignItems: 'center',
	},
})