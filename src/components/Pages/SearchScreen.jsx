import React, {useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import ConverterContext from '../../context/ConverterContext'

import Container from '../Templates/Container'
import SearchBar from '../Molecules/SearchBar'

import VideosList from '../Organisms/VideosList'
import MiniMusicController from '../Molecules/miniMusicController'

export default function ConverterScreen(){

	const {mediaInfo} = useContext(ConverterContext)
	return(
		<Container>
			<View style={{margin: 21, flex:1}}>
				<SearchBar/>
				<VideosList/>
			</View>
				<MiniMusicController/>
		</Container>
	)
}
