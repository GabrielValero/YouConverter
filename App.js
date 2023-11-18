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

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();
      setIsPlayerReady(isSetup);
      !isSetup && setup()
    }
    setup();
  }, []);


  return !isPlayerReady ? (
    <SafeAreaView style={styles.containerLoader}>
      <ActivityIndicator size="large" color="#bbb"/>
    </SafeAreaView>
  ) : (
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
