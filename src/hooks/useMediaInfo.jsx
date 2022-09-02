import React, {useContext} from 'react'

import ConverterContext from '../context/ConverterContext'

import fetchYoutubeInfo from '../utils/fetchYoutubeInfo'
import fetchInstagramInfo from '../utils/fetchInstagramInfo'
import downloadSource from '../utils/downloadSource'

export default function useMediaInfo(){
  const {setMediaInfo, setDownloadInfo} = useContext(ConverterContext)

  // const getInstagramInfo = async ({url})=>{
  //
  //   const response = await fetchInstagramInfo({url: url.split('/?')[0] + '?__a=1'})
  //
  //   console.log(response);
  // }

  const getYoutubeVideoInfo = async ({id, part})=>{
     const response = await fetchYoutubeInfo({videoId:id, part});
     setMediaInfo(response)

     const downloadUrl = await downloadSource({id: id})
     setDownloadInfo(downloadUrl)
  }

  return{
    //getInstagramInfo,
    getYoutubeVideoInfo
  }
}
