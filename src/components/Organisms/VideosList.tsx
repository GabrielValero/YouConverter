import React, {useContext} from 'react'
import {View, FlatList} from 'react-native'

import GridCard from '../Molecules/TrackCard'
import ListCard from '../Molecules/ListCard'

import ConverterContext from '../../context/ConverterContext' 
import Separator from '../Atoms/Separator'
import EmptyItem from '../Atoms/EmptyResults'

export default function VideosList(){
	const {youtubeVideosList} = useContext(ConverterContext)

	return youtubeVideosList && (
		<FlatList
			key={1}
			data={youtubeVideosList}
			numColumns={1}
			renderItem={ListCard}
			keyExtractor={item => `2${item.videoId}`}
			contentContainerStyle={{paddingBottom: 70}}
			ItemSeparatorComponent={Separator}
			showsVerticalScrollIndicator={false}
			ListEmptyComponent={EmptyItem}
			showsHorizontalScrollIndicator={false}
		/>
	)
}