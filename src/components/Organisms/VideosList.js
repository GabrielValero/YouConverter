import React, {useContext} from 'react'
import {View, FlatList} from 'react-native'

import CardVideo from '../Molecules/CardVideo'

import ConverterContext from '../../context/ConverterContext.jsx' 

export default function VideosList(){
	const {youtubeVideosList} = useContext(ConverterContext)
	return youtubeVideosList && (
		<FlatList
	        data={youtubeVideosList}
	        numColumns={2}
	        renderItem={CardVideo}
	        keyExtractor={item => item.videoId}
	        contentContainerStyle={{paddingVertical: 20}}
	        columnWrapperStyle={{ flex: 1, justifyContent: "space-around", marginVertical: 10 }}
	        showsVerticalScrollIndicator={false}
  			showsHorizontalScrollIndicator={false}
	      />
	)
}