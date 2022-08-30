import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import {ConverterContext} from './src/context/ConverterContext'
import ConverterTab from './src/Navigation/Tab/ConverterTab'

export default function App() {
  return (
    <ConverterContext>
      <NavigationContainer>
        <ConverterTab/>
        <StatusBar style="light" hidden={true}/>
      </NavigationContainer>
    </ConverterContext>

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
