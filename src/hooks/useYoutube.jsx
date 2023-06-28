import React, {useContext, useEffect} from 'react'

import ConverterContext from '../context/ConverterContext'


import getVideosList from '../utils/getVideosList'
import downloadSource from '../utils/downloadSource'


export default function useYoutube(){
	
	const {setConverterMessages,  setYoutubeVideosList} = useContext(ConverterContext)

	useEffect(()=>{
		searchByKey({key: "jt music"})
	}, [])

	const getQueryResult = ({search})=>{
		const isYoutubeLink = search.includes('youtube.com/watch?v=') || search.includes('youtu.be/')
		let temp; 

		if(isYoutubeLink){
			if(search.includes('youtu.be/')) temp = search.slice(search.indexOf('.be/')+4); // If url is mobile version.
			else if(search.includes('youtube.com/watch?v=') && search.includes('&')) temp = search.slice(search.indexOf('v=')+2, search.indexOf('&')); // If url is web version and include &.
			else temp = search.slice(search.indexOf('v=')+2); // if url is web version and don´t include &
			searchVideoById({id: temp})

		}else{
			searchByKey({key: search})
		}
	}

	const searchVideoById = async ({id})=>{
		try{
			const downloadUrl = await downloadSource({id: id})
			setDownloadInfo(downloadUrl)
		}catch(err){
			throw new Error(`Fallo al obtener el link de descarga. error: ${err.message}`)
		}
	}

	const searchByKey = async ({key})=>{
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