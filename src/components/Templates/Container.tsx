import React from 'react'
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native'

type Props = {
  children: React.ReactNode
  styleProps?: StyleProp<ViewStyle>
}

export default function Container({children, styleProps} : Props){
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
