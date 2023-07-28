import React, {useContext} from 'react'
import {View, StyleSheet} from 'react-native'

import ConverterContext from '../../context/ConverterContext'

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Container from '../Templates/Container'
import SearchBar from '../Molecules/SearchBar'
import VideosList from '../Organisms/VideosList'
import MiniMusicController from '../Molecules/miniMusicController'
import PlayFullButton from '../Atoms/PlayAllButton'
import TextTemplate from '../Templates/TextTemplate'
import dimens from '../../config/dimens';
import colors from '../../config/colors';


export default function ConverterScreen(){

	return(
		<Container>
			<View style={{margin: 21, flex:1}}>
				<View style={styles.container}>
					<TextTemplate textBig toUpperCase>Descargar</TextTemplate>
					<MaterialCommunityIcons name="folder-download-outline" size={dimens.iconsSmall} color={colors.textColor} />
				</View>
				<SearchBar/>
				<PlayFullButton/>
				<TextTemplate textMedium style={styles.text}>Resultados:</TextTemplate>
				<VideosList/>
			</View>
			<MiniMusicController/>
		</Container>
	)
}

const styles = StyleSheet.create({
	container:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 29
	},
	text:{
		marginBottom: 14
	}
})