import React from 'react'
import {Text, StyleSheet} from 'react-native'
import colors from '../../config/colors'

export default function TextTemplate({children, noWrap, style, bold, title, small}){

  const textStyles = [styles.text, title && styles.title,bold && styles.bold, small && styles.small, style]

  return noWrap ? (
    <Text numberOfLines={1} style={textStyles}>{children}</Text>
  ) : <Text style={textStyles}>{children}</Text>
}

const styles = StyleSheet.create({
  text:{
    fontSize: 17,
    color: colors.textColor,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 20,
  },
  bold:{
    fontWeight: 'bold',
  },
  small:{
    fontSize: 13,
  }
})
