import React, { useContext } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

import ConverterContext from '../../context/ConverterContext'

import { Ionicons } from '@expo/vector-icons';

import TextTemplate from '../Templates/TextTemplate'

import dimens from '../../config/dimens'
import colors from '../../config/colors'

export default function PlayFullButton(){
    const {isGridList, setIsGridList} = useContext(ConverterContext)

    const onGrid = ()=> setIsGridList(true)
    const onList = ()=> setIsGridList(false)
    return(
        <View style={[styles.container, {justifyContent: 'space-between', marginVertical: 14}]}>
            <View style={[styles.container, styles.playAllButton]}>
                <Ionicons name="play-circle" size={dimens.iconsSmall} color={colors.textColor}/>
                <TextTemplate bold style={styles.text}>reproducir todo</TextTemplate>
            </View>
            <View style={styles.container}>
                <Pressable onPress={onGrid}>
                    <Ionicons name="ios-grid-outline" size={dimens.iconsSmall} color={isGridList ? colors.mainColor : colors.buttonColor} style={{marginRight:24}}/>
                </Pressable>
                <Pressable onPress={onList}>
                    <Ionicons name="ios-list-sharp" size={dimens.iconsSmall} color={!isGridList ? colors.mainColor : colors.buttonColor} />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flexDirection: 'row'
    },
    text:{
        textTransform: 'uppercase',
        fontSize: 13,
        marginLeft: 8
    },
    playAllButton:{
        backgroundColor: colors.buttonColor,
        paddingHorizontal:3,
        paddingRight:10,
        borderRadius: 90
    }
})