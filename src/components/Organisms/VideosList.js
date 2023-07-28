import React, {useContext} from 'react'
import {View, FlatList} from 'react-native'

import GridCard from '../Molecules/GridCard'
import ListCard from '../Molecules/ListCard'

import ConverterContext from '../../context/ConverterContext.jsx' 
import Separator from '../Atoms/Separator'

export default function VideosList(){
	const {youtubeVideosList, isGridList} = useContext(ConverterContext)

	return youtubeVideosList && isGridList ? (
		<FlatList
			key={1}
	        data={youtubeVideosList}
	        numColumns={2}
	        renderItem={GridCard}
	        keyExtractor={item => `1${item.videoId}`}
	        contentContainerStyle={{paddingBottom: 70}}
	        columnWrapperStyle={{ flex: 1, justifyContent: "space-around", marginVertical: 10 }}
	        showsVerticalScrollIndicator={false}
  			showsHorizontalScrollIndicator={false}
	      />
	) : (
		<FlatList
			key={2}
			data={youtubeVideosList}
			numColumns={1}
			renderItem={ListCard}
			keyExtractor={item => `2${item.videoId}`}
			contentContainerStyle={{paddingBottom: 70}}
			ItemSeparatorComponent={Separator}
			showsVerticalScrollIndicator={false}
			showsHorizontalScrollIndicator={false}
		/>
	)
}