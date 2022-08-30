import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ConverterScreen from '../../components/Pages/ConverterScreen'
import DownLoadScreen from '../../components/Pages/DownLoadScreen'
import HistoryScreen from '../../components/Pages/HistoryScreen'

const Stack  = createNativeStackNavigator()

export function ConverterStack(){
	return(
		<>
			<Stack.Navigator>
        <Stack.Screen name="ConverterStack" component={ConverterScreen}  options={{headerShown:false}} />
      </Stack.Navigator>
		</>
	)
}

export function DownLoadStack(){
	return(
		<>
			<Stack.Navigator>
	      <Stack.Screen name="DownLoadStack" component={DownLoadScreen} options={{headerShown:false}} />
	    </Stack.Navigator>
		</>
	)
}

export function HistoryStack(){
	return(
		<>
			<Stack.Navigator>
        <Stack.Screen name="HistoryStack" component={HistoryScreen} options={{headerShown:false}} />
      </Stack.Navigator>
		</>
	)
}
