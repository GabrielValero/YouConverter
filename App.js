import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import {ConverterContext} from './src/context/ConverterContext'
import { ConverterStack } from './src/Navigation/Stack/ConverterStack'

export default function App() {
  return (
    <ConverterContext>
      <NavigationContainer>
        <ConverterStack/>
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
