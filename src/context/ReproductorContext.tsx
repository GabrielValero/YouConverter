import React, {useState, useEffect} from 'react'
import TrackPlayer,{ usePlaybackState, Capability, RepeatMode, useTrackPlayerEvents, Event, useActiveTrack } from 'react-native-track-player';

import getUrlSong from '../utils/getUrlSong'
import { TrackData } from '../types';

type Props = {
	children: React.ReactNode;
};
interface Context{
	trackList: TrackData[] | undefined
	setTrackList: React.Dispatch<React.SetStateAction<TrackData[] | undefined>>
	track: TrackData | undefined
	setTrack: React.Dispatch<React.SetStateAction<TrackData | undefined>>
	playState: string
	setPlayState: React.Dispatch<React.SetStateAction<string>>
  }
  const initialContext: Context = {
	trackList: undefined,
	setTrackList: ():void =>{},
	track: undefined,
	setTrack: ():void =>{},
	playState: "",
	setPlayState: ():void =>{}
  };
const ReproductorContext = React.createContext<Context>(initialContext)

export function ReproductorProvider({children}: Props){

	const initialTrack: TrackData | undefined = useActiveTrack() as TrackData | undefined
	
	const [trackList, setTrackList] = useState<TrackData[]>() // La lista de reproduccion //////////////
	const [track, setTrack] = useState<TrackData | undefined>(initialTrack) // El track que se esta reproduciendo
	const [playState, setPlayState] = useState("paused") // Es true si se esta reproduciendo algo

	return(
		<ReproductorContext.Provider value={{trackList, setTrackList, track, setTrack, playState, setPlayState}}>
			{children}
		</ReproductorContext.Provider>
	)
}

export default ReproductorContext