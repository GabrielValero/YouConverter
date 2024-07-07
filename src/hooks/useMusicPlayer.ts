import {useState, useContext, useEffect} from 'react'

import TrackPlayer, { State, usePlaybackState, useTrackPlayerEvents, Event, useActiveTrack, Track, RepeatMode } from 'react-native-track-player';
import { useNavigation } from '@react-navigation/native';

import ReproductorContext from '../context/ReproductorContext'

import isNotAdded from '../utils/isNotAdded'
import getUrlSong from '../utils/getUrlSong'
import showToast from '../utils/showToast';
import { TrackData } from '../types';
import useHistoryStorage from './useHistoryStorage';

export default function useMusicPlayer(){
	const navigation = useNavigation()
	const {setPlayState, setTrack } = useContext(ReproductorContext)
	const {storeLastTrack} = useHistoryStorage()

	const events = [
		Event.PlaybackState,
		Event.PlaybackError,
		Event.PlaybackActiveTrackChanged
	];

	useTrackPlayerEvents(events, async (e)=>{
		if(e.type == "playback-active-track-changed"){
			setTrack(e.track as TrackData);
			await storeLastTrack(e.track as TrackData)
		}else if(e.type == "playback-state"){
			setPlayState(e.state)
			if(e.state == State.None) resetPlayList()
			if(e.state == State.Error) await TrackPlayer.play()
		}
	});

	const addTrack = async ({track}: {track: TrackData})=>{ // new track added to the trackList
		console.log(track);
		
		const trackList = await TrackPlayer.getQueue()
		if(isNotAdded(trackList as TrackData[], track)){
			track.url = await getUrlSong(track.videoId!) // get youtube video url converted to mp3
			
			await TrackPlayer.add([track as Track]) // valid if track is added, if true then add track to queue.
		}
		showToast("Se añadió")
	}
	const getQueue = async ()=>{
		await TrackPlayer.getQueue()
	}
	
	const isPlaying = async ()=>{ // return true if is playing any track
		const state = await TrackPlayer.getPlaybackState();
		return state.state === State.Playing
	}
	const playAndPause = async ()=>{
		await isPlaying() ? TrackPlayer.pause() : TrackPlayer.play()
	}
	const playNextSong = async ()=>{
		await TrackPlayer.skipToNext()
	}
	const playPreviousSong = async ()=>{
		await TrackPlayer.skipToPrevious()
	}
	const seekTo = async (value: Array<number>)=>{
		await TrackPlayer.seekTo(value[0])
	}
	const setRepeatMode = async (RepeatMode: RepeatMode)=>{
		await TrackPlayer.setRepeatMode(RepeatMode)
	}
	const removeSong = async(trackIndex: number)=>{
		const trackElements = (await TrackPlayer.getQueue()).length
		if(trackElements > 1){
			
			await TrackPlayer.remove([trackIndex])
			showToast("Se eliminó")

		} else resetPlayList()
	}
	const resetPlayList = async()=>{
		await TrackPlayer.reset()
		setTrack(undefined)
		showToast("Vaciaste la lista")
	}
	return{
		addTrack,
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