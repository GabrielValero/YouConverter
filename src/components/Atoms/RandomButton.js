import React, { useState } from 'react' 
import Svg, { Path } from "react-native-svg"

import { FontAwesome5 } from '@expo/vector-icons';
import dimens from '../../config/dimens';
import colors from '../../config/colors';
import { Pressable, StyleSheet } from 'react-native';

export default function RandomButton({size = 40}){
    const [isActive, setActive] = useState(false)
    const onPress = ()=>{
        setActive(!isActive)
        console.info("Se esta presionando");
    }

    return(
        <Pressable onPress={onPress} style={[styles.center, { width: size, height: size}]}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox={`-5 -4 30 30`}
                fill="none"
            >
                <Path
                    fill={`${colors.textColor}${isActive ? "" : "50"}`}
                    fillRule="evenodd"
                    d="M4 17a1 1 0 0 1 0-2h2l3-3-3-3H4a1.001 1.001 0 0 1 0-2h3l4 4 4-4h2V5l4 3.001L17 11V9h-1l-3 3 3 3h1v-2l4 3-4 3v-2h-2l-4-4-4 4H4Z"
                    clipRule="evenodd"
                />
            </Svg>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    center: {
		justifyContent: 'center',
		alignItems: 'center',
	},
})