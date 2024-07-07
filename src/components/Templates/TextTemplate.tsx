import React from 'react'
import {Text, StyleSheet, StyleProp, ViewStyle} from 'react-native'
import colors from '../../config/colors'

type Props = {
  children: React.JSX.Element | string
  numberOfLines?: number
  noWrap?: any
  style?: StyleProp<ViewStyle>
  textSmall?: any
  textMedium?: any
  textBig?: any
  title?: any
  bold?: any
  small?: any
  toUpperCase?: any
}

export default function TextTemplate({children, numberOfLines, noWrap, style, textSmall, textMedium, textBig, title, bold, small, toUpperCase}: Props){

  const textStyles = [styles.text, title && styles.title, textSmall && styles.textSmall,
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
