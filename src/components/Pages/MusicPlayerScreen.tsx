import React, { useContext } from 'react'
import TrackPlayer, { useActiveTrack } from 'react-native-track-player';

import Container from '../Templates/Container'
import MusicController from '../Organisms/MusicController'
import TrackPlayerInfo from '../Molecules/TrackPlayerImg'
import { ImageBackground, StyleSheet, View, useWindowDimensions, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import dimens from '../../config/dimens'
import colors from '../../config/colors'
import { MusicPlayerScreenProps } from '../../types';
import { useTrackStore } from '../../store/useTrackStore';


export default function MusicPlayerScreen({navigation}: MusicPlayerScreenProps){
	const {height} = useWindowDimensions();
	const stylesComponents = [styles.container, {height: height}]
	const track = useTrackStore(state=>state.track)
	const goBack= ()=> navigation.goBack()
	const goModal= ()=> navigation.navigate("MusicOptionsModal")
	if(!track){
		navigation.navigate("SearchStack")
	}else return (
		<Container>
			<View style={stylesComponents}>
				<ImageBackground source={{uri: track.artwork}} blurRadius={10} style={styles.background}/>
				<View style={styles.topBar}>
					<Pressable onPress={goBack} style={styles.button}>
						<Entypo name="chevron-small-down" size={dimens.iconsSmall} color={colors.textColor} />
					</Pressable>
					<Pressable onPress={goModal} >
						<SimpleLineIcons name="options-vertical" size={20} color={colors.textColor} />
					</Pressable>
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
		alignItems: 'center',
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