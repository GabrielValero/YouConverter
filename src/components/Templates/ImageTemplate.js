import React from 'react'
import {Image, StyleSheet} from 'react-native'

export default function ImageTemplate({url, style, coverWidth, coverHeight, cover}){
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
