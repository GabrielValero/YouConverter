import React, {useState, useEffect} from 'react'
import TrackPlayer,{ usePlaybackState, Capability, RepeatMode, useTrackPlayerEvents, Event } from 'react-native-track-player';

import downloadSource from '../utils/downloadSource'

const ReproductorContext = React.createContext('')

async function setup() { // inicializa el track player
  await TrackPlayer.setupPlayer()
  await TrackPlayer.updateOptions({
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,
      Capability.SeekTo,
    ],
    compactCapabilities: [Capability.Play, Capability.Pause],
  })
  
}

export function ReproductorProvider({children}){

	const [trackList, setTrackList] = useState([]) // La lista de reproduccion
	const [track, setTrack] = useState(null) // El track que se esta reproduciendo
	const [playState, setPlayState] = useState("paused") // Es true si se esta reproduciendo algo

	const playbackState  = usePlaybackState()
	const events = [
	  Event.PlaybackState,
	  Event.PlaybackError,
	  Event.PlaybackTrackChanged
	];

	useTrackPlayerEvents(events, async (e)=>{
		console.log("event", e)
		
		// if(e.state === "idle"){
		// 	await TrackPlayer.reset()
		// 	setTrackList([])
		// 	setTrack(null)
		// }
		
		setPlayState(e.state)
	});

	const processTracks = async ()=>{
		console.log("Esta pasando por aqui creo");
		let songQueue = await TrackPlayer.getQueue()
		const processingList = trackList.filter(a=> !songQueue.some(b=> b.title === a.title) && a) // obtiene solo los tracks de trackList que no esten en Queue para añadirlos despues
		processingList.length > 0 && processingList
			.forEach(async (element, index) => { // Obtiene el link de descarga de las canciones
				if(!element.url){
					let songUrl = await downloadSource(element.videoId)
						.catch(err=>{
							console.log(err)
							//"You have exceeded the rate limit per minute for your plan, BASIC, by the API provider"
						})
					element.url = songUrl.url
					setTrack(element)
					await TrackPlayer.add([element])
					await TrackPlayer.skip(songQueue.length) // si la track list es mayor a uno entonces salta a la ultima cancion
					await TrackPlayer.play()
				}
			})
	}

	useEffect(()=>{
		(async ()=>{ // si no esta inicializado track player mostrara un error y luego se inicializara, al menos es la idea
			try{
				const getCurrentQueue = await TrackPlayer.getQueue()
				setTrackList(getCurrentQueue)
				let trackIndex = await TrackPlayer.getCurrentTrack();
				let trackObject = await TrackPlayer.getTrack(trackIndex);
				setTrack(trackObject)
			}catch{
				await setup()
				await TrackPlayer.reset()
			}
		})()
		
	},[])



	return(
		<ReproductorContext.Provider value={{trackList, setTrackList, track, setTrack, playState, setPlayState}}>
			{children}
		</ReproductorContext.Provider>
		)
}

export default ReproductorContext