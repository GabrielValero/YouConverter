import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'

export interface TrackData {
    title: string
    artwork: string
    videoId?: string
    artist: string
    duration: number
    url?: string
}
//Type to Stack
export type RootStackParamList = {
    MusicPlayerStack: undefined
    SearchStack: undefined
    MusicOptionsModal: undefined
}

export type RootStackNavigationProp = NativeStackScreenProps<RootStackParamList>

export type MusicPlayerScreenProps = NativeStackScreenProps<
    RootStackParamList,
    'MusicPlayerStack'
>

export type MusicOptionsModalProps = NativeStackScreenProps<
    RootStackParamList,
    'MusicOptionsModal'
>

//Type to Bottom Tab
export type BottomTabParamList = {
    ConverterTab: undefined
}

export type ConverterTabProps = BottomTabScreenProps<
    BottomTabParamList,
    'ConverterTab'
>
