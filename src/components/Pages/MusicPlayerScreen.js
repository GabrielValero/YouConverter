import React, {useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import ReproductorContext from '../../context/ReproductorContext'

import Container from '../Templates/Container'
import TextTemplate from '../Templates/TextTemplate'
import MusicController from '../Organisms/MusicController'
import TrackPlayerInfo from '../Molecules/TrackPlayerInfo'

export default function MusicPlayerScreen(){

	const {track} = useContext(ReproductorContext)
	return(
		<Container>
			<TrackPlayerInfo/>
			<MusicController/>
		</Container>
	)
}
