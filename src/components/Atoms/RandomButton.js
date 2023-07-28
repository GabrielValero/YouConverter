import React, { useState } from 'react'

import { FontAwesome5 } from '@expo/vector-icons';
import dimens from '../../config/dimens';
import colors from '../../config/colors';
import { Pressable } from 'react-native';

export default function RandomButton(){
    const [isActive, setIsActive] = useState(false)
    const onPress = ()=>{
        setIsActive(!isActive)
    }

    return(
        <Pressable onPress={onPress}>
            <FontAwesome5 name="random" size={dimens.iconsSmall} color={isActive ? colors.mainColor : colors.buttonColor} />
        </Pressable>
    )
}