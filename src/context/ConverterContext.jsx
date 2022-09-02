import React, {useState} from 'react'

const Converter = React.createContext('')

export function ConverterContext({children}){

  const [mediaInfo, setMediaInfo] = useState();
  const [downloadInfo, setDownloadInfo] = useState();

  const restartInfo = ()=>{
    setDownloadInfo(null)
    setMediaInfo(null)
  }
  return(
    <Converter.Provider value={{mediaInfo, setMediaInfo, downloadInfo, setDownloadInfo, restartInfo}}>
      {children}
    </Converter.Provider>
  )
}

export default Converter;
