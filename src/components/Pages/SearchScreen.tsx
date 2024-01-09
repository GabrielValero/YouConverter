import React from 'react'
import {View, StyleSheet} from 'react-native'

import Container from '../Templates/Container'
import SearchBar from '../Molecules/SearchBar'
import VideosList from '../Organisms/VideosList'
import MiniMusicController from '../Molecules/miniMusicController'


export default function ConverterScreen(){

	return(
		<Container>
			<View style={{marginHorizontal: 21,  marginTop: 21, flex:1}}>
				<SearchBar/>
				<VideosList/>
			</View>
			<MiniMusicController/>
		</Container>
	)
}

const styles = StyleSheet.create({
	container:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 29
	},
	text:{
		marginBottom: 14
	}
})