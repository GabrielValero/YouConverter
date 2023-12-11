import React from 'react'
import {View, Pressable,  StyleSheet} from 'react-native'
import ImageTemplate from '../Templates/ImageTemplate'
import TextTemplate from '../Templates/TextTemplate'

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import PlayButton from '../Atoms/PlayButton';

import DownloadButton from '../Atoms/DownloadButton';

export default function ListCard({item}){
    
    const title = item.title
    const artist = item.artist
    return item && (
        <View style={[styles.container, {maxWidth: "100%", marginVertical:20}]}>
            <View style={styles.containerImage}>
                <ImageTemplate url={item.artwork} style={styles.image} cover coverWidth coverHeight/>
            </View>
            <View style={styles.containerText}>
                <TextTemplate textMedium noWrap numberOfLines={2}>{title}</TextTemplate>
                <TextTemplate textSmall noWrap>{artist}</TextTemplate>
            </View>
            <View style={[styles.container]}>
                <DownloadButton item={item}/>
                <PlayButton song={item}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerImage:{
        width: 50,
        height: 50,
        marginRight: 14
    },
    containerText:{
        width: "50%"
    },
    image:{
        borderRadius: 7
    }
})