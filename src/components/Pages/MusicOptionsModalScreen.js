import React from 'react'
import {View, StyleSheet, Text, Pressable} from 'react-native'

import MusicOptionsModal from '../Organisms/MusicOptionsModal'


export default function MusicOptionsModalScreen({navigation }){
	return(
		<View style={styles.modal}>
			<Pressable onPress={()=> navigation.goBack()} style={styles.transparent}></Pressable>
			<MusicOptionsModal/>
		</View>
		)
}

const styles = StyleSheet.create({
	modal:{
		flex: 1,
		position: 'relative'
	},
	transparent:{
		opacity: 0.5,
		width: "100%",
		height: "100%",
		backgroundColor: 'black',
		position: 'absolute',
		top: 0,
	}
})