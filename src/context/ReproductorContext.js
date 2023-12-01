import React, {useState, useEffect} from 'react'
import TrackPlayer,{ usePlaybackState, Capability, RepeatMode, useTrackPlayerEvents, Event, useActiveTrack } from 'react-native-track-player';

import downloadSource from '../utils/downloadSource'

const ReproductorContext = React.createContext('')

export function ReproductorProvider({children}){

	const [trackList, setTrackList] = useState() // La lista de reproduccion //////////////
	const [track, setTrack] = useState(useActiveTrack()) // El track que se esta reproduciendo
	const [playState, setPlayState] = useState("paused") // Es true si se esta reproduciendo algo

	return(
		<ReproductorContext.Provider value={{trackList, setTrackList, track, setTrack, playState, setPlayState}}>
			{children}
		</ReproductorContext.Provider>
	)
}

export default ReproductorContext