import React, {useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import ConverterContext from '../../context/ConverterContext'

import Container from '../Templates/Container'
import TextTemplate from '../Templates/TextTemplate'
import SearchBar from '../Molecules/SearchBar'
import VideoInfo from '../Molecules/VideoInfo'
import DownloadIntructions from '../Molecules/DownloadIntructions'
import DownloadFormatsButtons from '../Molecules/DownloadFormatsButtons'
import VideosList from '../Organisms/VideosList'
import MiniMusicController from '../Molecules/miniMusicController.js'

export default function ConverterScreen(){

	const {mediaInfo} = useContext(ConverterContext)
	return(
		<Container>
			<View style={{margin: 21, flex:1}}>
				<SearchBar/>
				{/* {mediaInfo ? */}
				{/* 	<> */}
				{/* 		<VideoInfo/> */}
				{/* 		<View style={{width: "100%", marginVertical: 25}}> */}
				{/* 			<DownloadFormatsButtons/> */}
				{/* 		</View> */}
				{/* 	</> */}
				{/* 	: <View style={{width: "100%", height: "100%", alignItems: "center", justifyContent: "center"}}><DownloadIntructions/></View> */}
				{/* } */}

				<VideosList/>
			</View>
				<MiniMusicController/>
		</Container>
	)
}
