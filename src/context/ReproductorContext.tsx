import React, {useState, useEffect, useContext} from 'react'
import TrackPlayer,{ State, usePlaybackState, Capability, RepeatMode, useTrackPlayerEvents, Event, useActiveTrack } from 'react-native-track-player';
import * as SplashScreen from 'expo-splash-screen';

import { TrackData } from '../types';
import { useHistoryStore } from '../store/useHistoryStore';
import { useTrackStore } from '../store/useTrackStore';
import useYoutube from '../hooks/useYoutube';

type Props = {
	children: React.ReactNode;
};
interface Context{
	playState: string
	setPlayState: React.Dispatch<React.SetStateAction<string>>
  }
const initialContext: Context = {
playState: "",
setPlayState: ():void =>{}
};
const ReproductorContext = React.createContext<Context>(initialContext)

export function ReproductorProvider({children}: Props){

	const [playState, setPlayState] = useState("paused") // Es true si se esta reproduciendo algo

	const {fetchVideosList} = useYoutube()

	const storeLastTrack = useHistoryStore((state)=>state.storeLastTrack)
	const getLastTrack = useHistoryStore((state)=>state.getLastTrack)
	const setTrack = useTrackStore(state=>state.setTrack)
	const addTrack = useTrackStore(state=>state.addTrack)
	const getLastSearch = useHistoryStore(state=> state.getLastSearch)
	const events = [
		Event.PlaybackState,
		Event.PlaybackError,
		Event.PlaybackActiveTrackChanged
	];

	useTrackPlayerEvents(events, async (e)=>{
		
		
		if(e.type == "playback-active-track-changed"){
			setTrack(e.track as TrackData);
			console.log("Cambio la pista ya ");
			
			await storeLastTrack(e.track as TrackData)
		}else if(e.type == "playback-state"){
			setPlayState(e.state)
			if(e.state == State.Error) await TrackPlayer.play()
		}
	});

	const init = async ()=>{
		const lastTrack = await getLastTrack()
		if(lastTrack) await addTrack(lastTrack)

		const lastSearch = await getLastSearch()
		
		
		if(lastSearch && lastSearch != ''){
			await fetchVideosList({key: lastSearch})
		}else await fetchVideosList({key: "Imagine Dragons"})
		await SplashScreen.hideAsync();
	}

	useEffect(()=>{
		init()
	},[])

	return(
		<ReproductorContext.Provider value={{playState, setPlayState}}>
			{children}
		</ReproductorContext.Provider>
	)
}

export default ReproductorContext