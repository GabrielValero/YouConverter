import React, {useState} from 'react'

const Converter = React.createContext('')

export function ConverterProvider({children}){

  const [downloadInfo, setDownloadInfo] = useState();
  const [isGridList, setIsGridList] = useState(true) // para que la lista de las canciones aparezca en grid o en list
  const [youtubeVideosList, setYoutubeVideosList] = useState([]) // resultados de busqueda
  const [converterMessages, setConverterMessages] = useState([]) // por si la descargar resulta exitosa o con errores
  
  const restartInfo = ()=>{
    setDownloadInfo(null)
  }
  
  return(
    <Converter.Provider value={{youtubeVideosList, setYoutubeVideosList, downloadInfo, setDownloadInfo, restartInfo, converterMessages, 
      setConverterMessages, isGridList, setIsGridList}}>
      {children}
    </Converter.Provider>
  )
}

export default Converter;
