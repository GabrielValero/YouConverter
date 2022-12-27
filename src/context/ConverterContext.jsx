import React, {useState} from 'react'

const Converter = React.createContext('')

export function ConverterProvider({children}){

  const [mediaInfo, setMediaInfo] = useState();
  const [downloadInfo, setDownloadInfo] = useState();
  const [youtubeVideosList, setYoutubeVideosList] = useState([])

  const restartInfo = ()=>{
    setDownloadInfo(null)
    setMediaInfo(null)
  }
  return(
    <Converter.Provider value={{youtubeVideosList, setYoutubeVideosList,mediaInfo, setMediaInfo, downloadInfo, setDownloadInfo, restartInfo}}>
      {children}
    </Converter.Provider>
  )
}

export default Converter;
