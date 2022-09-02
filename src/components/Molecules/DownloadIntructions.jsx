import React from 'react'
import {View, StyleSheet} from 'react-native'
import TextTemplate from '../Templates/TextTemplate'

import colors from '../../config/colors'

export default function DownloadIntructions(){
  return(
    <View style={{width: "60%"}}>
      <TextTemplate title style={styles.title}>Pasos</TextTemplate>
      <TextTemplate>1- Pega el link</TextTemplate>
      <TextTemplate>2- Selecciona el formato</TextTemplate>
      <TextTemplate title style={styles.changeColor}>3- Descarga</TextTemplate>
    </View>
  )
}

const styles = StyleSheet.create({
  title:{
    textAlign: 'center',
    color: colors.mainColor,
    marginBottom: 15,
  },
  changeColor:{
    color: colors.mainColor
  }

})
