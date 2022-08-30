import React, {useState} from 'react'

const Converter = React.createContext('')

export function ConverterContext({children}){

  const [mediaInfo, setMediaInfo] = useState();

  return(
    <Converter.Provider value={{mediaInfo, setMediaInfo}}>
      {children}
    </Converter.Provider>
  )
}

export default Converter;
