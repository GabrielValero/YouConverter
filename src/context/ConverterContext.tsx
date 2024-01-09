import React, {useState} from 'react'
import { TrackData } from '../types';

type Props = {
  children: React.ReactNode;
};

interface Context{
  youtubeVideosList: TrackData[]
  setYoutubeVideosList: React.Dispatch<React.SetStateAction<TrackData[]>>
  downloadInfo: String | undefined
  setDownloadInfo: React.Dispatch<String>
  restartInfo: () => void
  converterMessages: String[]
  setConverterMessages: React.Dispatch<React.SetStateAction<String[]>>
}
const initialContext: Context = {
  youtubeVideosList: [],
  setYoutubeVideosList: ():void => {},
  downloadInfo: "",
  setDownloadInfo: ():void => {},
  restartInfo: () => {},
  converterMessages: [],
  setConverterMessages: ():void => {}
};
const Converter = React.createContext<Context>(initialContext)


export function ConverterProvider({children}: Props): JSX.Element{

  const [downloadInfo, setDownloadInfo] = useState<String>();
  
  const [youtubeVideosList, setYoutubeVideosList] = useState<TrackData[]>([]) // resultados de busqueda
  const [converterMessages, setConverterMessages] = useState<String[]>([]) // por si la descargar resulta exitosa o con errores
  
  const restartInfo = ()=>{
    setDownloadInfo("")
  }
  
  return(
    <Converter.Provider value={{youtubeVideosList, setYoutubeVideosList, downloadInfo, setDownloadInfo, restartInfo, 
      converterMessages, setConverterMessages}}>
      {children}
    </Converter.Provider>
  )
}

export default Converter;
