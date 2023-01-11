import React, {useContext, useEffect} from 'react'

import ConverterContext from '../context/ConverterContext'

import fetchYoutubeInfo from '../utils/fetchYoutubeInfo'
import searchYoutubeResults from '../utils/searchYoutubeResults'
import downloadSource from '../utils/downloadSource'


export default function useYoutube(){
  const { setYoutubeVideosList} = useContext(ConverterContext)

  useEffect(()=>{
    searchResultsByKey({key: "Song for daisy"})
  }, [])

  const getQueryResult = ({search})=>{
    if(search.includes('youtube.com/watch?v=') || search.includes('youtu.be/')){
      let temp; 
      if(search.includes('youtu.be/')) temp = search.slice(search.indexOf('.be/')+4);
      else if(search.includes('youtube.com/watch?v=') && search.includes('&')) temp = search.slice(search.indexOf('v=')+2, search.indexOf('&'));
      else temp = search.slice(search.indexOf('v=')+2);
      searchVideoById({id: temp})

    }else{
      searchResultsByKey({key: search})
    }
  }

//   const searchVideoById = async ({id})=>{
//     const response = await fetchYoutubeInfo({videoId:id});
//     setMediaInfo(response)
// 
//     const downloadUrl = await downloadSource({id: id})
//     setDownloadInfo(downloadUrl)
//   }

  const searchResultsByKey = async ({key})=>{
    const result = await searchYoutubeResults(key)
    setYoutubeVideosList(result)
  }
  return{
    getQueryResult
  }
}