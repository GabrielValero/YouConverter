import React, {useContext} from 'react'
import {View, StyleSheet} from 'react-native'

import ConverterContext from '../../context/ConverterContext'
import VideoImage from '../Atoms/VideoImage'
import TextTemplate from '../Templates/TextTemplate'

export default function VideoInfo(){
  const {mediaInfo} = useContext(ConverterContext)
  return(
    <View>
      <View style={{width:"100%", marginTop: 30, marginBottom: 10,}}>
        <VideoImage/>
      </View>
      <TextTemplate title>{mediaInfo.title}</TextTemplate>
      <TextTemplate small>{mediaInfo.channel}</TextTemplate>
    </View>
  )
}
