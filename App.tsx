import React, {useEffect, useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import TrackPlayer, { Capability } from 'react-native-track-player';
import * as SplashScreen from 'expo-splash-screen';
import {setupPlayer} from './src/services'

import {ConverterProvider} from './src/context/ConverterContext'
import {ReproductorProvider} from './src/context/ReproductorContext'
import { SearchStack } from './src/Navigation/Stack/ConverterStack'
import { useHistoryStore } from './src/store/useHistoryStore';
import { useTrackStore } from './src/store/useTrackStore';
import useYoutube from './src/hooks/useYoutube';

SplashScreen.preventAutoHideAsync();

export default function App() {
	const getLastTrack = useHistoryStore((state)=>state.getLastTrack)
	const addTrack = useTrackStore(state=>state.addTrack)

  const init = async ()=>{
		const lastTrack = await getLastTrack()
		if(lastTrack) await addTrack(lastTrack)
	}

  useEffect(() => {
    (
      async ()=>{
        await setupPlayer();
        await init()
      }
    )()
  }, []);


  return (
    <ConverterProvider>
      <ReproductorProvider>
        <NavigationContainer>
          <SearchStack/>
          <StatusBar style="light" hidden={true}/>
        </NavigationContainer>
      </ReproductorProvider>
    </ConverterProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#112'
  },
});
