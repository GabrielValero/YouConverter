import React, {useContext} from 'react'

import ConverterContext from '../context/ConverterContext'

import fetchYoutubeInfo from '../utils/fetchYoutubeInfo'
import fetchInstagramInfo from '../utils/fetchInstagramInfo'

export default function useMediaInfo(){
  const {setMediaInfo} = useContext(ConverterContext)

  // const getInstagramInfo = async ({url})=>{
  //
  //   const response = await fetchInstagramInfo({url: url.split('/?')[0] + '?__a=1'})
  //
  //   console.log(response);
  // }

  const getYoutubeVideoInfo = async ({id,part})=>{
     const response = await fetchYoutubeInfo({videoId:id, part});

     setMediaInfo(response)
     console.log(response);
  }

  return{
    //getInstagramInfo,
    getYoutubeVideoInfo
  }
}
