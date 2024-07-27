import {create} from 'zustand';
import { TrackData } from '../types';
import TrackPlayer, { RepeatMode, State, Track, useActiveTrack } from 'react-native-track-player';
import showToast from '../utils/showToast';
import getUrlSong from '../utils/getUrlSong';
import checkIfTrackIsAdded from '../utils/checkIfItemIsAdded';

interface TrackState{
    track: TrackData | undefined
    setTrack: (track: TrackData | undefined)=> void
    trackList: TrackData[]
    setTrackList: (valueList: TrackData[])=> void
    addTrack: (track: TrackData)=> void
    getQueue: ()=> void
    isPlaying: ()=> Promise<boolean>

    playAndPause: ()=> void
    playNextSong: ()=> void
    playPreviousSong: ()=> void
    seekTo: (value: Array<number>)=> void
    setRepeatMode: (RepeatMode: RepeatMode)=> void
    removeSong: (trackIndex: number)=> void
    resetPlayList: ()=> void
}

export const useTrackStore = create<TrackState>()((set, get)=>({

    track: undefined, 
    setTrack: async (track: TrackData | undefined)=> set((state) => ({track})),
    trackList: [],
    setTrackList: async(valueList: TrackData[])=> set((state) => ({trackList: valueList })),
	addTrack: async (track: TrackData)=>{ // new track added to the trackList
		console.log("addTrack", track);
		
		if(track){
			const trackList = await TrackPlayer.getQueue()
			const trackIsAdded = checkIfTrackIsAdded(trackList as TrackData[], track)
			if(!trackIsAdded){
				track.url = await getUrlSong(track.videoId!) // get youtube video url converted to mp3
				
				await TrackPlayer.add([track as Track]) // valid if track is added, if true then add track to queue.
				showToast("Se añadió")
			}
		}
	},
	getQueue: async ()=>{
		await TrackPlayer.getQueue()
	},
	isPlaying: async ()=>{ // return true if is playing any track
		const state = await TrackPlayer.getPlaybackState();
		return state.state === State.Playing
	},
	playAndPause: async ()=>{
        const {isPlaying} = get()
		await isPlaying() ? TrackPlayer.pause() : TrackPlayer.play()
	},
	playNextSong: async ()=>{
		await TrackPlayer.skipToNext()
	},
	playPreviousSong: async ()=>{
		await TrackPlayer.skipToPrevious()
	},
	seekTo: async (value: Array<number>)=>{
		await TrackPlayer.seekTo(value[0])
	},
	setRepeatMode: async (RepeatMode: RepeatMode)=>{
		await TrackPlayer.setRepeatMode(RepeatMode)
	},
	removeSong: async(trackIndex: number)=>{
        const {resetPlayList} = get()
		const trackElements = (await TrackPlayer.getQueue()).length
		if(trackElements > 1){
			
			await TrackPlayer.remove([trackIndex])
			showToast("Se eliminó")

		} else resetPlayList()
	},
	resetPlayList: async()=>{
		const {setTrack} = get()
        await TrackPlayer.reset()
		setTrack(undefined)
		showToast("Vaciaste la lista")
	}
}))