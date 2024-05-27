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
        } catch (error) {
            console.log(error);
            AsyncStorage.setItem("history",JSON.stringify(newList))
        }
    }
    const getLastSearch = async()=>{
        const lastSearch = (await AsyncStorage.getItem("history") as string)[0]
        return lastSearch
    }
    const storeLastTrack = async(track: TrackData)=>{
        try {
            await AsyncStorage.setItem("lastTrack", JSON.stringify(track))
        } catch (error) {
            console.log(error);
            await AsyncStorage.setItem("lastTrack", JSON.stringify(track))
        }
    }
    const getLastTrack = async()=>{
        const lastTrack = AsyncStorage.getItem("lastTrack")
        return lastTrack
    }
    
    return{
        storeNewSearch,
        getLastSearch,
        storeLastTrack,
        getLastTrack
    }
}