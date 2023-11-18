import React, { useContext } from 'react'

import Container from '../Templates/Container'
import MusicController from '../Organisms/MusicController'
import TrackPlayerInfo from '../Molecules/TrackPlayerInfo'
import { ImageBackground, StyleSheet, View, useWindowDimensions, Pressable } from 'react-native'
import ImageTemplate from '../Templates/ImageTemplate'

import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import dimens from '../../config/dimens'
import colors from '../../config/colors'
import ReproductorContext from '../../context/ReproductorContext'

export default function MusicPlayerScreen({navigation}){
	const {height, width} = useWindowDimensions();
	const {track} = useContext(ReproductorContext)
	const stylesComponents = [styles.container, {height: height}]
	
	const onPress= ()=> navigation.goBack()
	
	return(
		<Container>
			<View style={stylesComponents}>
				<ImageBackground source={{uri: track.artwork}} blurRadius={10} style={styles.background}/>
				<View style={styles.topBar}>
					<Pressable onPress={onPress} style={styles.button}><Entypo name="chevron-small-down" size={dimens.iconsSmall} color={colors.textColor} /></Pressable>
					<SimpleLineIcons name="options-vertical" size={20} color={colors.textColor} />
				</View>
				<TrackPlayerInfo/>
				<MusicController/>
			</View>
		</Container>
	)
}

const styles = StyleSheet.create({
	container:{
		paddingTop: 15,
		position: 'relative',
		justifyContent: 'space-between',
		alignItems: "center"
	},
	button:{
		padding: 7,
	},
	topBar:{
		width: "100%",
		paddingHorizontal: 21,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	background:{
		width: 1000,
		height: 1000,
		blurRadius: 1.3,
		position: 'absolute',
		top: 0,
		opacity: 0.5,
	}
})