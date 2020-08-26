import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Quad from './src/FlexBoxV2'

export default function App() {
  return (
    <View style={styles.container}>
      <Quad/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // alignItems: 'flex-start',
    padding: 20,
  },
});
