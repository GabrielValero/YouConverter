import React, {useState, useEffect} from 'react'
import TrackPlayer,{ usePlaybackState, Capability, RepeatMode, useTrackPlayerEvents, Event } from 'react-native-track-player';

import downloadSource from '../utils/downloadSource'

const ReproductorContext = React.createContext('')

export function ReproductorProvider({children}){

	const [trackList, setTrackList] = useState([]) // La lista de reproduccion
	const [track, setTrack] = useState(null) // El track que se esta reproduciendo
	const [songIndex, setSongIndex] = useState(-1)
	const [playState, setPlayState] = useState("paused") // Es true si se esta reproduciendo algo

	const playbackState  = usePlaybackState()
	

	// useEffect(()=>{
	// 	(async ()=>{ // si no esta inicializado track player mostrara un error y luego se inicializara, al menos es la idea
	// 		await setup()
			
	// 		// try{
	// 		// 	const getCurrentQueue = await TrackPlayer.getQueue()
	// 		// 	setTrackList(getCurrentQueue)
	// 		// 	let trackIndex = await TrackPlayer.getCurrentTrack();
	// 		// 	let trackObject = await TrackPlayer.getTrack(trackIndex);
	// 		// 	setTrack(trackObject)
	// 		// }catch{
	// 		// 	await setup()
	// 		// 	await TrackPlayer.reset()
	// 		// }
	// 	})()
		
	// },[])



	return(
		<ReproductorContext.Provider value={{trackList, setTrackList, track, setTrack, playState, setPlayState, songIndex, setSongIndex}}>
			{children}
		</ReproductorContext.Provider>
		)
}

export default ReproductorContext