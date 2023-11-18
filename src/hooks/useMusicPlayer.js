import {useState, useContext, useEffect} from 'react'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
import { useNavigation } from '@react-navigation/native';

import ReproductorContext from '../context/ReproductorContext'

import isNotAdded from '../utils/isNotAdded'
import downloadSource from '../utils/downloadSource'
//import { onDisplayNotification } from '../utils/notificationController';

export default function useMusicPlayer(){

	const {trackList, setTrackList, track, setTrack, setPlayState, songIndex, setSongIndex } = useContext(ReproductorContext)
	const navigation = useNavigation();

	const addSong = async ({song})=>{ // new song added to the trackList
		console.log("comenzando", song)
		isNotAdded(trackList, song) && setTrackList([...trackList, song])
		trackList.length <= 0 && (
			setSongIndex(0),
			changeTrack({song})
		)
	}
	const changeTrack = async ({song})=>{
		TrackPlayer.pause()

		setTrack(song)
		
		song.url = await downloadSource(song.videoId)
		//console.log("Por aqui va menol ", song);
		
		await TrackPlayer.reset()
		await TrackPlayer.add([song])
		
		//onDisplayNotification(song)

		await TrackPlayer.play()
		


		setPlayState("playing")
	}
	const isPlaying = async ()=>{ // return true if is playing any song
		const state = await TrackPlayer.getState();
		return state === State.Playing
	}
	const playAndPause = async ()=>{
		const state = await TrackPlayer.getState();
		state === State.Playing ? TrackPlayer.pause() : TrackPlayer.play()
	}
	const playNextSong = async ()=>{
		if(songIndex < trackList.length-1 ){
			setSongIndex(songIndex+1)
			changeTrack({song : trackList[songIndex+1]})
		}
	}
	const playPreviewSong = async ()=>{
		if(songIndex > 0 ){
			setSongIndex(songIndex-1)
			changeTrack({song : trackList[songIndex-1]})
		}
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
		playAndPause,
		playNextSong,
		playPreviewSong,
		seekTo,
		setRepeatMode,
		resetPlayList,
	}

}