import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Focus} from './src/components/focus';
import { Countdown } from './src/components/countdown';
import {Timer} from  './src/components/Timer';

export default function App() {
  const [currentSubject,addCurrentSubject] = useState(null);
  return (
    <View style={styles.container}>
      {!currentSubject ?<Focus addSubject = {addCurrentSubject} />:
      (
        <Timer focusSubject = {currentSubject}
        onTimerEnd={()=>{}}
        clearSubject={()=>{}} />
      )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
