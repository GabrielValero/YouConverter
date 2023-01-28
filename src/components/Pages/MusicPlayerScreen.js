import React from 'react'

import Container from '../Templates/Container'
import MusicController from '../Organisms/MusicController'
import TrackPlayerInfo from '../Molecules/TrackPlayerInfo'

export default function MusicPlayerScreen(){
	return(
		<Container>
			<TrackPlayerInfo/>
			<MusicController/>
		</Container>
	)
}
