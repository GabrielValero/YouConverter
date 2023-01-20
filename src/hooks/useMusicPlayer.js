import {useState, useContext, useEffect} from 'react'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';

import ReproductorContext from '../context/ReproductorContext'
import getContentDuration from '../utils/getContentDuration'

export default function useMusicPlayer(){

	const {trackList, setTrackList, track, setTrack} = useContext(ReproductorContext)
	const [songIndex, setSongIndex] = useState()

	const setPlayList = async ({song})=>{
		console.log("comenzando")
		const duration = await getContentDuration(song.videoId)
		song.duration = duration
		await setTrackList(elem => elem.some(e => e.title === song.title) ? elem : elem.concat(song))
	}

	const playSong = async ()=>{
		const state = await TrackPlayer.getState();
		state === State.Playing ? TrackPlayer.pause() : TrackPlayer.play()

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

	const seekTo = async (value)=>{
		await TrackPlayer.seekTo(value[0])
	}
	const setRepeatMode = async (index)=>{
		await TrackPlayer.setRepeatMode(index)
		const repeatMode = await TrackPlayer.getRepeatMode()
		console.log(repeatMode)
	}

	return{
		setPlayList,
		playSong,
		playNextSong,
		playPreviewSong,
		seekTo,
		setRepeatMode
	}

}