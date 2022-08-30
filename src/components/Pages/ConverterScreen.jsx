import React, {useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import ConverterContext from '../../context/ConverterContext'

import Container from '../Templates/Container'
import TextTemplate from '../Templates/TextTemplate'
import SearchBar from '../Molecules/SearchBar'
import VideoInfo from '../Molecules/VideoInfo'
import DownloadButton from '../Atoms/DownloadButton'


export default function ConverterScreen(){

	const {mediaInfo} = useContext(ConverterContext)
	return(
		<Container>
			<View style={{margin: 21, flex:1}}>
				<SearchBar/>
				{mediaInfo &&
					<>
						<VideoInfo/>
						<View style={{width: "100%", marginVertical: 10, alignItems: "center"}}>
							<DownloadButton/>
						</View>
					</>}

			</View>
		</Container>
	)
}
