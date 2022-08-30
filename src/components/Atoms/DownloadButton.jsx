import React from 'react'
import {View, Pressable, StyleSheet} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import { Octicons } from '@expo/vector-icons';
import useDownloadFile from '../../hooks/useDownloadFile'

export default function DownloadButton(){
  const {downloadImage} = useDownloadFile()
  return(
    <Pressable onPress={downloadImage}>
      <LinearGradient
        colors={['#5DED45', '#1DDDEA']}
        style={styles.button}>
        <Octicons name="download" size={24} color="white" />
      </LinearGradient>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button:{
    width: 50,
    height: 50,
    borderRadius: 100,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
