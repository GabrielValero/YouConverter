import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

import { SearchStack } from '../Stack/ConverterStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../../config/colors'
import { BottomTabParamList, ConverterTabProps } from '../../types';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function ConverterTab(){
  return(
    <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: colors.mainColor,
          tabBarInactiveTintColor: '#9BA0AE',
          tabBarShowLabel: false,
        })}>
          
      <Tab.Screen name="ConverterTab" component={SearchStack} options={{
        tabBarIcon: ({focused, color, size=30}) =>(
          <MaterialIcons name="file-download" size={size} color={color} focused={focused} />
        )
      }} />

    </Tab.Navigator>
  )
}

