import React, {useState, useEffect} from 'react'
import TrackPlayer,{ usePlaybackState, Capability } from 'react-native-track-player';

import downloadSource from '../utils/downloadSource'

const ReproductorContext = React.createContext('')

async function setup() {
  await TrackPlayer.setupPlayer()
  await TrackPlayer.updateOptions({
    stopWithApp: false,
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

	const [trackList, setTrackList] = useState([])
	const [track, setTrack] = useState()
	const [isPlaying, setIsPlaying] = useState(false)

	const playbackState  = usePlaybackState()

	const processTracks = async ()=>{
		let songQueue = await TrackPlayer.getQueue()
		console.log(songQueue)
		const processingList = trackList.filter(a=> !songQueue.some(b=> b.title === a.title) && a)
		console.log(processingList)
		processingList.length > 0 && processingList
			.forEach(async (element, index) => {
				console.log("Titulo de la cancion procesada", element.title, index)
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
		(async ()=>{
			try{
				const getCurrentQueue = await TrackPlayer.getQueue()
				setTrackList(getCurrentQueue)
				const getCurrentTrack = await TrackPlayer.getCurrentTrack()
				console.log(getCurrentTrack)
				setTrack(getCurrentTrack)
			}catch{
				await setup()
				await TrackPlayer.reset()
			}
		})()
		
	},[])

	useEffect(()=>{
		console.log("state ", playbackState )
		playbackState === "paused" && setIsPlaying(false)
		playbackState === "playing" && setIsPlaying(true)
		playbackState === "idle" && setIsPlaying(false)
	},[playbackState])

	useEffect(()=>{
		trackList.length > 0 && processTracks()
	},[trackList])


	return(
		<ReproductorContext.Provider value={{trackList, setTrackList, track, setTrack, isPlaying, setIsPlaying}}>
			{children}
		</ReproductorContext.Provider>
		)
}

export default ReproductorContext