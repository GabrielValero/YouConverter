import {useState, useContext, useEffect} from 'react'

import TrackPlayer, { State, usePlaybackState, useTrackPlayerEvents, Event, useActiveTrack } from 'react-native-track-player';
import { useNavigation } from '@react-navigation/native';

import ReproductorContext from '../context/ReproductorContext'

import isNotAdded from '../utils/isNotAdded'
import getUrlSong from '../utils/getUrlSong'
import showToast from '../utils/showToast';

export default function useMusicPlayer(){
	const navigation = useNavigation()
	const {setPlayState, setTrack } = useContext(ReproductorContext)

	const events = [
		Event.PlaybackState,
		Event.PlaybackError,
		Event.PlaybackActiveTrackChanged
	];

	useTrackPlayerEvents(events, async (e)=>{
		if(e.type == "playback-active-track-changed"){
			
			setTrack(e.track)
			console.info("track", e);
		}else if(e.type == "playback-state"){
			setPlayState(e.state)
			if(e.state == State.None) resetPlayList()
			if(e.state == State.Error) await TrackPlayer.play()
		}
	});

	const addSong = async ({song})=>{ // new song added to the trackList
		const trackList = await TrackPlayer.getQueue()
		if(isNotAdded(trackList, song)){
			song.url = await getUrlSong(song.videoId) // get youtube video url converted to mp3
			
			await TrackPlayer.add([song]) // valid if song is added, if true then add song to queue.
		}
		showToast("Se añadió")
	}
	const getQueue = async ()=>{
		await TrackPlayer.getQueue()
	}
	
	const isPlaying = async ()=>{ // return true if is playing any song
		const state = await TrackPlayer.getPlaybackState();
		return state === State.Playing
	}
	const playAndPause = async ()=>{
		const {state} = await TrackPlayer.getPlaybackState();
		state === State.Playing ? TrackPlayer.pause() : TrackPlayer.play()
	}
	const playNextSong = async ()=>{
		await TrackPlayer.skipToNext()
	}
	const playPreviousSong = async ()=>{
		await TrackPlayer.skipToPrevious()
	}
	const seekTo = async (value)=>{
		await TrackPlayer.seekTo(value[0])
	}
	const setRepeatMode = async (index)=>{
		await TrackPlayer.setRepeatMode(index)
		const repeatMode = await TrackPlayer.getRepeatMode()
		console.log(repeatMode)
	}
	const removeSong = async(trackIndex)=>{
		const trackElements = (await TrackPlayer.getQueue()).length
		if(trackElements > 1){
			
			await TrackPlayer.remove([trackIndex])
			showToast("Se eliminó")

		} else resetPlayList()
	}
	const resetPlayList = async()=>{
		await TrackPlayer.reset()
		setTrack(null)
		showToast("Lista vacía")
	}
	return{
		addSong,
		playAndPause,
		playNextSong,
		playPreviousSong,
		seekTo,
		setRepeatMode,
		resetPlayList,
		getQueue,
		removeSong
	}

}