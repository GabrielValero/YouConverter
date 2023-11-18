import React from 'react'
import {Text, StyleSheet} from 'react-native'
import colors from '../../config/colors'

export default function TextTemplate({children, numberOfLines, noWrap, style, textSmall, textMedium, textBig, title, bold, small, pageTitle, toUpperCase}){

  const textStyles = [styles.text, pageTitle && styles.pageTitle, title && styles.title, textSmall && styles.textSmall,
    textMedium && styles.textMedium, textBig && styles.textBig, bold && styles.bold, small && styles.small, toUpperCase && styles.toUpperCase, style]

  return noWrap ? (
    <Text numberOfLines={numberOfLines ? numberOfLines : 1} style={textStyles}>{children}</Text>
  ) : <Text style={textStyles}>{children}</Text>
}

const styles = StyleSheet.create({
  textSmall:{
    fontSize: 10,
    fontWeight: '400'
  },
  text:{
    fontSize: 17,
    color: colors.textColor,
    
  },
  textMedium:{
    fontSize: 15,
    fontWeight: '500'
  },
  textSemiBig:{
    fontSize: 20,
  },
  textBig:{
    fontSize: 29,
    fontWeight: 'bold'
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
  },
  toUpperCase:{
    textTransform: 'uppercase'
  }
})
