import React from 'react'
import {View, StyleSheet} from 'react-native'

import DownloadButton from '../Atoms/DownloadButton'

export default function DownloadFormatsButtons(){
  return(
    <View style={styles.container}>
      <DownloadButton isVideo/>
      <DownloadButton/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: "100%",
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
})
