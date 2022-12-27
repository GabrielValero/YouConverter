import React, {useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import TrackPlayer, { Capability } from 'react-native-track-player';

import {ConverterProvider} from './src/context/ConverterContext'
import {ReproductorProvider} from './src/context/ReproductorContext'
import { SearchStack } from './src/Navigation/Stack/ConverterStack'

async function setup() {
  await TrackPlayer.setupPlayer()
  await TrackPlayer.updateOptions({
    stopWithApp: true,
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,
      Capability.SeekTo,
    ],
    compactCapabilities: [Capability.Play, Capability.Pause],
  })

}

export default function App() {
  
  useEffect(() => {
    setup()
  }, [])

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
});
