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
    track: TrackData
}
export default function ListCard({ track }: Prop) {
    const title = track.title
    const artist = track.artist
    const duration = track.duration
    return (
        track && (
            <View
                style={[
                    styles.container,
                    { maxWidth: '100%', marginVertical: 15 },
                ]}
            >
                <View style={styles.containerImage}>
                    <ImageTemplate
                        url={track.artwork}
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
                    <DownloadButton track={track} />
                    <PlayButton track={track} />
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
