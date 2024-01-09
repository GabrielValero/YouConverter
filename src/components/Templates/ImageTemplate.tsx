import React from 'react'
import {Image, ImageStyle, StyleProp, StyleSheet} from 'react-native'

type Props = {
  url: string
  style?: StyleProp<ImageStyle>
  coverWidth?: any
  coverHeight?: any
  cover?: any
}

export default function ImageTemplate({url, style, coverWidth, coverHeight, cover} : Props){
	const textStyles = [coverWidth && styles.coverWidth,coverHeight && styles.coverHeight, cover && styles.cover, style]

	return <Image source={{uri: url}} style={textStyles}/>
}

const styles = StyleSheet.create({
  coverWidth:{
    width: "100%",
  },
  coverHeight:{
    height: "100%",
  },
  cover:{
  	resizeMode: 'cover'
  }
})
