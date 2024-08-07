import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import MusicPlayerScreen from '../../components/Pages/MusicPlayerScreen'
import SearchScreen from '../../components/Pages/SearchScreen'
import DownLoadScreen from '../../components/Pages/DownLoadScreen'
import HistoryScreen from '../../components/Pages/HistoryScreen'
import MusicOptionsModalScreen from '../../components/Pages/MusicOptionsModalScreen'
import { RootStackParamList } from '../../types';

const RootStack = createStackNavigator<RootStackParamList>()


export function SearchStack(){
	return(
		<>
			<RootStack.Navigator>
		    	<RootStack.Group>
		    		<RootStack.Screen name="SearchStack" component={SearchScreen}  options={{headerShown:false}} />
		    	</RootStack.Group>
		    	<RootStack.Group screenOptions={{ presentation: 'modal' }}>
		    		<RootStack.Screen name="MusicPlayerStack" component={MusicPlayerScreen}  options={{headerShown:false}} />
		    	</RootStack.Group>
		    	<RootStack.Group screenOptions={{ presentation: 'transparentModal' }}>
		    		<RootStack.Screen name="MusicOptionsModal" component={MusicOptionsModalScreen}  options={{headerShown:false}} />
		    	</RootStack.Group>
		    </RootStack.Navigator>
		</>
	)
}

// 
// export function DownLoadStack(){
// 	return(
// 		<>
// 			<Stack.Navigator>
// 	      <Stack.Screen name="DownLoadStack" component={DownLoadScreen} options={{headerShown:false}} />
// 	    </Stack.Navigator>
// 		</>
// 	)
// }
// 
// export function HistoryStack(){
// 	return(
// 		<>
// 			<Stack.Navigator>
// 				<Stack.Screen name="HistoryStack" component={HistoryScreen} options={{headerShown:false}} />
// 			</Stack.Navigator>
// 		</>
// 	)
// }
