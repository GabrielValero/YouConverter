import React from 'react'
import { View } from 'react-native'

export default function Separator(){
    return(
        <View style={{width:'100%', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{ backgroundColor: "rgba(62,230,150,0.2)", height: 2, width: '70%' }} />
        </View>
    )
}