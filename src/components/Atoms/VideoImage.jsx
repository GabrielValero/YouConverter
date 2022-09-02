import React, {useContext} from 'react'
import {Image, View, Text, StyleSheet} from 'react-native'

import ConverterContext from '../../context/ConverterContext'

export default function VideoImage(){
  const {mediaInfo, downloadInfo} = useContext(ConverterContext)

  return(
    <View style={{width: "100%", height: 200}}>
      <Image source={{uri: mediaInfo.image}} style={styles.image}/>
      {downloadInfo?.min && 
        <View style={styles.duration}>
          <Text style={styles.text}>{`${downloadInfo.min} : ${downloadInfo.seg}`}</Text>
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  duration:{
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "rgba(74, 74, 74, 0.5)",
    position:'absolute',
    bottom: 5,
    right: 5,
  },
  image:{
    width: "100%",
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  text:{
    fontWeight: 'bold',
    color: "white"
  }
})
