import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Focus} from './src/components/focus';

export default function App() {
  const [currentSubject,addCurrentSubject] = useState(null);
  return (
    <View style={styles.container}>
      <Focus addSubject = {addCurrentSubject} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
