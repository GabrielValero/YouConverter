import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { TrackData } from '../types'

type HistoryType = string[]

interface HistoryState {
    storeNewSearch: (keySearch: string) => void
    getLastSearch: () => Promise<string | null>
    storeLastTrack: (track: TrackData) => void
    getLastTrack: () => Promise<TrackData | null>
}

export const useHistoryStore = create<HistoryState>()((set) => ({
    storeNewSearch: async (keySearch: string) => {
        const elementList = await AsyncStorage.getItem('history')
        let newList: HistoryType = []
        if (elementList) {
            newList = JSON.parse(elementList)
        }
        try {
            const isSearchAdded = newList.includes(keySearch)
            if (!isSearchAdded) {
                newList?.unshift(keySearch)
                newList = newList.splice(0, 5)
                AsyncStorage.setItem('history', JSON.stringify(newList))
            }
        } catch (error) {
            console.log(error)
            AsyncStorage.setItem('history', JSON.stringify(newList))
        }
    },
    getLastSearch: async () => {
        const fetchLastSearch = await AsyncStorage.getItem('history')
        const lastSearchList = fetchLastSearch
            ? JSON.parse(fetchLastSearch)
            : null
        console.log('lastSearchList ', lastSearchList)

        const lastSearch: string | null = lastSearchList
            ? lastSearchList[0]
            : null
        return lastSearch
    },
    storeLastTrack: async (track: TrackData) => {
        try {
            await AsyncStorage.setItem('lastTrackPlayed', JSON.stringify(track))
        } catch (error) {
            console.log(error)
            await AsyncStorage.setItem('lastTrackPlayed', JSON.stringify(track))
        }
    },
    getLastTrack: async () => {
        const fetchLastTrack = await AsyncStorage.getItem('lastTrackPlayed')
        const lastTrack = fetchLastTrack
            ? (JSON.parse(fetchLastTrack) as TrackData)
            : null
        return lastTrack
    },
}))
