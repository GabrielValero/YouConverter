import React, {useContext} from 'react'
import {View, StyleSheet, useWindowDimensions} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import ImageTemplate from '../Templates/ImageTemplate'
import ReproductorContext from '../../context/ReproductorContext'

import colors from '../../config/colors';

export default function TrackPlayerInfo(){
	
	const {track} = useContext(ReproductorContext)
	const {width} = useWindowDimensions();
	//

	const styleComponent = [styles.imageContainer, {width: width*0.8, height: width*0.8 }]
	return(
		<View style={styleComponent}>
			<View style={styles.outStrock}>
				<View style={styles.circle}>
				<ImageTemplate url={track?.artwork} style={styles.image} coverWidth coverHeight cover/>
				</View>
			</View>
			
		</View>	
	)
}

const styles = StyleSheet.create({
	imageContainer:{
		width: "70%",
		marginBottom: 30,
		alignItems: 'center',
		justifyContent: "center",
		flexDirection: 'row',
	},
	outStrock:{
		width: '100%',
		height: '100%',
		padding: 10,
		borderRadius: 10000,
		backgroundColor: 'transparent',
		borderWidth: 8,
		borderColor: colors.buttonColor,
		position: 'relative',
		overflow: 'hidden',
	},
	circle:{
		width: "100%",
		height: "100%",
		backgroundColor: '#fff',
		borderRadius: 10000,
		overflow: 'hidden',
	},
	image:{
		width: "100%",
		height: "100%",
		
	},
})