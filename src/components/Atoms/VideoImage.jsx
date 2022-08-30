import React, {useContext} from 'react'
import {Image, View} from 'react-native'

import ConverterContext from '../../context/ConverterContext'

export default function VideoImage(){
  const {mediaInfo} = useContext(ConverterContext)

  return(
    <Image source={{uri: mediaInfo.image}} style={{width: "100%", height: 200, resizeMode: 'cover', borderRadius: 10,}}/>
  )
}
