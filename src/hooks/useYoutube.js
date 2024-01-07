import React, {useContext, useEffect} from 'react'
import * as SplashScreen from 'expo-splash-screen';
import ConverterContext from '../context/ConverterContext'


import getVideosList from '../utils/getVideosList'
import getUrlSong from '../utils/getUrlSong'


export default function useYoutube(){
	
	const {setConverterMessages,  setYoutubeVideosList} = useContext(ConverterContext)

	const init = async ()=>{
		await getByKey({key: "jt music"})
		await SplashScreen.hideAsync();
	}

	useEffect(()=>{
		init()
	}, [])

	const getQueryResult = ({search})=>{
		const isYoutubeLink = search.includes('youtube.com/watch?v=') || search.includes('youtu.be/')
		let temp; 

		if(isYoutubeLink){
			if(search.includes('youtu.be/')) temp = search.slice(search.indexOf('.be/')+4); // If url is mobile version.
			else if(search.includes('youtube.com/watch?v=') && search.includes('&')) temp = search.slice(search.indexOf('v=')+2, search.indexOf('&')); // If url is web version and include &.
			else temp = search.slice(search.indexOf('v=')+2); // if url is web version and don´t include &
			getVideoById({id: temp})

		}else{
			getByKey({key: search})
		}
	}

	const getVideoById = async ({id})=>{
		try{
			const downloadUrl = await getUrlSong({id: id})
			setDownloadInfo(downloadUrl)
		}catch(err){
			throw new Error(`Fallo al obtener el link de descarga. error: ${err.message}`)
		}
	}

	const getByKey = async ({key})=>{
		try{
			const result = await getVideosList(key)
			console.log(result);
			setYoutubeVideosList(result)
		}catch(err){
			throw new Error(`Fallo al obtener la lista de canciones. error: ${err.message}`)
		}
	} 

	return{getQueryResult}
}