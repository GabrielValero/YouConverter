import {useState, useContext, useEffect} from 'react'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
import { useNavigation } from '@react-navigation/native';

import ReproductorContext from '../context/ReproductorContext'

import isNotAdded from '../utils/isNotAdded'

export default function useMusicPlayer(){

	const {trackList, setTrackList, track, setTrack} = useContext(ReproductorContext)
	const [songIndex, setSongIndex] = useState()
	const navigation = useNavigation();

	const addSong = async ({song})=>{
		console.log("comenzando", song)
		isNotAdded(trackList, song) ? (
			setTrackList([...trackList, song]),
			await TrackPlayer.add([song])
			) : null
		const tmp = await TrackPlayer.getQueue()
		console.log(tmp)
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
	const resetPlayList = async()=>{
		await TrackPlayer.reset()
		setTrackList([])
		setTrack(null)
	}
	return{
		addSong,
		playSong,
		playNextSong,
		playPreviewSong,
		seekTo,
		setRepeatMode,
		resetPlayList,
	}

}