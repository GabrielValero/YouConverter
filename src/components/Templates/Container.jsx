import React from 'react'
import {View, StyleSheet} from 'react-native'

export default function Container({children, styleProps}){
  return(
    <View style={[styles.container, styleProps]}>{children}</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2C39",
  }
})
