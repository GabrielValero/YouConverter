import React, {useContext, useEffect} from 'react'
import * as SplashScreen from 'expo-splash-screen';
import ConverterContext from '../context/ConverterContext'


import getVideosList from '../utils/getVideosList'
import getUrlSong from '../utils/getUrlSong'
import useHistoryStorage from './useHistoryStorage';

export default function useYoutube(){
	
	const {setYoutubeVideosList} = useContext(ConverterContext)
	const {storeNewSearch, getLastSearch} = useHistoryStorage()
	
	const init = async ()=>{
		const lastSearch = await getLastSearch()
		
		if(lastSearch && lastSearch != ''){
			await fetchVideosList({key: lastSearch})
		}else await fetchVideosList({key: "Imagine Dragons"})
		await SplashScreen.hideAsync();
	}

	useEffect(()=>{
		init()
	}, [])

	const getQueryResult = ({search}: {search: string}) => {
		const isYoutubeLink = search.includes('youtube.com/watch?v=') || search.includes('youtu.be/')
		let temp; 

		if(isYoutubeLink){
			if(search.includes('youtu.be/')) temp = search.slice(search.indexOf('.be/')+4); // If url is mobile version.
			else if(search.includes('youtube.com/watch?v=') && search.includes('&')) temp = search.slice(search.indexOf('v=')+2, search.indexOf('&')); // If url is web version and include &.
			else temp = search.slice(search.indexOf('v=')+2); // if url is web version and don´t include &

		}else{
			fetchVideosList({key: search})
			
		}
	}

	const fetchVideosList = async ({key}: {key: string})=>{
		storeNewSearch(key)
		try{
			const result = await getVideosList(key)
			console.log(result);
			setYoutubeVideosList(result)
		}catch(err: any){
			throw new Error(`Fallo al obtener la lista de canciones. error: ${err.message}`)
		}
	} 

	return{getQueryResult}
}