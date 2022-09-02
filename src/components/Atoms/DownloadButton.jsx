import React, {useContext} from 'react'
import {View, Pressable, StyleSheet} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import ConverterContext from '../../context/ConverterContext'
import useDownloadFile from '../../hooks/useDownloadFile'
import TextTemplate from '../Templates/TextTemplate'
import colors from '../../config/colors'

export default function DownloadButton({isVideo}){
  const {downloadMedia} = useDownloadFile()

  const {mediaInfo, downloadInfo} = useContext(ConverterContext)

  const onPress = ()=>{
    downloadMedia({isVideoDownloading: isVideo})
  }

  return downloadInfo?.video ? (
    <Pressable onPress={onPress} style={[styles.button, styles.buttonActive]}>
      {isVideo ? <Entypo name="video" size={20} color={colors.mainColor} style={{paddingRight: 15}}/>
        : <Fontisto name="music-note" size={20} color={colors.mainColor} style={{paddingRight: 15}}/>}
      <TextTemplate bold style={styles.textActive}>{isVideo ? downloadInfo.video.contentLength : downloadInfo.audio.contentLength} Mb</TextTemplate>
    </Pressable>
  )
  : (<View style={styles.button}>
    {isVideo ? <Entypo name="video" size={20} color={colors.inactiveTextColor} style={{paddingRight: 15}}/>
      : <Fontisto name="music-note" size={20} color={colors.inactiveTextColor} style={{paddingRight: 15}}/>}
    <TextTemplate bold style={styles.text}>? Mb</TextTemplate>
    </View>)
}

const styles = StyleSheet.create({
  button:{
    width: "45%",
    backgroundColor: colors.inactiveButtonColor,
    paddingVertical: 15,
    marginVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
  },
  text: {
    color: colors.inactiveTextColor
  },
  textActive: {
    color: colors.mainColor
  },
  buttonActive: {
    backgroundColor: colors.buttonColor,
  }
})
