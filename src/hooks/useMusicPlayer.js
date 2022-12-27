import {useState, useContext, useEffect} from 'react'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';

import ReproductorContext from '../context/ReproductorContext'

export default function useMusicPlayer(){

	const {trackList, setTrackList, track, setTrack, isPlaying, setIsPlaying} = useContext(ReproductorContext)
	const [songIndex, setSongIndex] = useState()

	const setPlayList = async ({song})=>{
		console.log("comenzando")
		await setTrackList(elem => elem.some(e => e.title === song.title) ? elem : elem.concat(song))
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