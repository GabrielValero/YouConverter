import React from 'react'
import {Text, StyleSheet} from 'react-native'

export default function TextTemplate({children, styleProps, bold, title, small}){

  const textStyles = [styles.text, title && styles.title,bold && styles.bold, small && styles.small]

  return(
    <Text style={[textStyles, styleProps]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  text:{
    fontSize: 15,
    color: "#3A3A3A",
  },
  title:{
    fontWeight: 'bold',
    fontSize: 17,
  },
  bold:{
    fontWeight: 'bold',
  },
  small:{
    fontSize: 13,
  }
})
