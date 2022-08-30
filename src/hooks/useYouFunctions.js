import React, {useContext} from 'react'
import ConverterContext from '../context/ConverterContext'

import fetchVideoInfo from '../utils/fetchVideoInfo'

export default function useYouFunctions(){
  const {setVideo} = useContext(ConverterContext)

  const getVideoInfo = async ({id,part})=>{
     const response = await fetchVideoInfo({videoId:id, part});

     setVideo(response)
     console.log(response);
  }

  return  {
    getVideoInfo
  }
}
