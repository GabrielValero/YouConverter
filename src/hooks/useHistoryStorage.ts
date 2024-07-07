import AsyncStorage from "@react-native-async-storage/async-storage";
import { Track } from "react-native-track-player";
import { TrackData } from "../types";

type HistoryType = string[]

export default function useHistoryStorage(){
    
    const storeNewSearch = async (keySearch: string)=>{
        const elementList = await AsyncStorage.getItem("history")
        let newList: HistoryType = []
        
        if(elementList){
            newList = JSON.parse(elementList)
        }
        newList?.unshift(keySearch)
        try {
            AsyncStorage.setItem("history",JSON.stringify(newList))
            console.log(`Historial de busqueda:`);
            console.log(newList);
        } catch (error) {
            console.log(error);
            AsyncStorage.setItem("history",JSON.stringify(newList))
        }
    }
    const getLastSearch = async()=>{
        const lastSearch = await AsyncStorage.getItem("history")
        
        return lastSearch ? (JSON.parse(lastSearch))[0] : null 
    }
    const storeLastTrack = async(track: TrackData)=>{
        console.log("Este es el ultimo track",track);
        
        try {
            await AsyncStorage.setItem("lastTrackPlayed", JSON.stringify(track))
        } catch (error) {
            console.log(error);
            await AsyncStorage.setItem("lastTrackPlayed", JSON.stringify(track))
        }
    }
    const getLastTrack = async()=>{
        const lastTrack = AsyncStorage.getItem("lastTrackPlayed")
        console.log(lastTrack);
        return lastTrack
    }
    
    return{
        storeNewSearch,
        getLastSearch,
        storeLastTrack,
        getLastTrack
    }
}