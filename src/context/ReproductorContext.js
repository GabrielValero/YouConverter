import React, {useState, useEffect} from 'react'
import { usePlaybackState } from 'react-native-track-player';

const ReproductorContext = React.createContext('')

export function ReproductorProvider({children}){

	const [trackList, setTrackList] = useState([])
	const [track, setTrack] = useState()
	const [isPlaying, setIsPlaying] = useState(false)

	const playbackState  = usePlaybackState()

	useEffect(()=>{
		console.log("state ", playbackState )
		playbackState === "paused" && setIsPlaying(false)
		playbackState === "playing" && setIsPlaying(true)
		playbackState === "idle" && setIsPlaying(false)
	},[playbackState])

	return(
		<ReproductorContext.Provider value={{trackList, setTrackList, track, setTrack, isPlaying, setIsPlaying}}>
			{children}
		</ReproductorContext.Provider>
		)
}

export default ReproductorContext