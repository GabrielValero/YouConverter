import {useState, useContext, useEffect} from 'react'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';

import ReproductorContext from '../context/ReproductorContext'
import downloadSource from '../utils/downloadSource'

export default function useMusicPlayer(){

	const {trackList, setTrackList, track, setTrack, isPlaying, setIsPlaying} = useContext(ReproductorContext)
	const [songIndex, setSongIndex] = useState()

	const setPlayList = async ({song})=>{
		const queue = await TrackPlayer.getQueue()

		console.log("comenzando")

		const songIsAdded = queue.some(e => e.title === song.title)
		if(!songIsAdded){
			const songUrl = await downloadSource(song.videoId)
			.catch(err=>{
				console.log(err)
			})

			song.url = songUrl.url
			console.log(song)
			setTrack(song)
			await TrackPlayer.add([song])
			await TrackPlayer.skip(queue.length)
			playSong()
		}
	}

	const playSong = async ()=>{
		const state = await TrackPlayer.getState();
		state === State.Playing ? (TrackPlayer.pause(), setIsPlaying(false)) 
			: (TrackPlayer.play(), setIsPlaying(true))
		console.log(state)

	}
	const playNextSong = async ()=>{
		await TrackPlayer.skipToNext();
		let trackIndex = await TrackPlayer.getCurrentTrack();
		let trackObject = await TrackPlayer.getTrack(trackIndex);
		console.log(`Title: ${trackObject.title}`);
		setTrack(trackObject)
	}
	const playPreviewSong = async ()=>{
		await TrackPlayer.skipToPrevious();
		let trackIndex = await TrackPlayer.getCurrentTrack();
		let trackObject = await TrackPlayer.getTrack(trackIndex);
		setTrack(trackObject)
		console.log(`Title: ${trackObject.title}`);
	}



	return{
		setPlayList,
		playSong,
		playNextSong,
		playPreviewSong
	}

}