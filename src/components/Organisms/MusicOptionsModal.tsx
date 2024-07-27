import React, {useContext} from 'react'
import {View, StyleSheet, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native';


import { MaterialCommunityIcons, MaterialIcons, Ionicons  } from '@expo/vector-icons';

import TextTemplate from '../Templates/TextTemplate'
import colors from '../../config/colors'
import TrackPlayer from 'react-native-track-player';
import { RootStackNavigationProp } from '../../types';
import { useTrackStore } from '../../store/useTrackStore';
export default function MusicOptionsModal(){
	const resetPlayList = useTrackStore(state=>state.resetPlayList)
	
	const removeSong = useTrackStore(state=>state.removeSong)
	const navigation = useNavigation<RootStackNavigationProp>();

	const onReset = ()=>{
		resetPlayList()
		navigation.popToTop()
	}
	const onRemove = async()=>{
	    const index = await TrackPlayer.getActiveTrackIndex() as number
		console.log(index);
		
		index >= 0 && removeSong(index)
	}

	return(
        <View style={styles.container}>
            <View style={styles.title}>
                <TextTemplate title style={{marginLeft: 10}}>Opciones adicionales</TextTemplate>
            </View>
            <Pressable onPress={onReset} style={styles.option}>
                <MaterialCommunityIcons name="playlist-remove" size={24} color={`${colors.textColor}70`} />
                <TextTemplate style={{marginLeft: 10}}>Eliminar lista de Reproducción</TextTemplate>
            </Pressable>
            <Pressable onPress={onRemove} style={styles.option}>
				<MaterialIcons name="remove-circle-outline" size={24} color={`${colors.textColor}70`} />
                <TextTemplate style={{marginLeft: 10}}>Remover canción de la lista</TextTemplate>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
	container:{
		paddingHorizontal: 30,
		paddingBottom: 20,
		paddingTop: 5,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		marginTop: 'auto',
		backgroundColor: colors.backgroundApp,
	},
	title:{
		height: 80,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	option:{
		width: '100%',
		height: 60,
		alignItems: 'center',
		flexDirection: 'row',

	}
})