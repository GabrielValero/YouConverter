import React from 'react'
import { View, Pressable, StyleSheet } from 'react-native'
import ImageTemplate from '../Templates/ImageTemplate'
import TextTemplate from '../Templates/TextTemplate'

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

import PlayButton from '../Atoms/PlayButton'

import DownloadButton from '../Atoms/DownloadButton'
import { TrackData } from '../../types'
import formatTime from '../../utils/formatTime'

type Prop = {
    item: TrackData
}
export default function ListCard({ item }: Prop) {
    
    const title = item.title
    const artist = item.artist
    const duration = item.duration
    return (
        item && (
            <View
                style={[
                    styles.container,
                    { maxWidth: '100%', marginVertical: 15 },
                ]}
            >
                <View style={styles.containerImage}>
                    <ImageTemplate
                        url={item.artworkList!['default'].url}
                        style={styles.image}
                        cover
                        coverWidth
                        coverHeight
                    />
                </View>
                <View style={styles.containerText}>
                    <TextTemplate textMedium noWrap numberOfLines={2}>
                        {title}
                    </TextTemplate>
                    <TextTemplate
                        textSmall
                        noWrap
                    >{`Duración: ${formatTime(duration)}`}</TextTemplate>
                    <TextTemplate textSmall noWrap>
                        {artist}
                    </TextTemplate>
                </View>
                <View style={[styles.container]}>
                    <DownloadButton track={item} />
                    <PlayButton track={item} />
                </View>
            </View>
        )
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerImage: {
        width: 50,
        height: 50,
        marginRight: 14,
    },
    containerText: {
        width: '50%',
    },
    image: {
        borderRadius: 7,
    },
})
