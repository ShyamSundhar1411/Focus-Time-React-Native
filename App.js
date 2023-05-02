import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Focus} from './src/components/focus';
import { Countdown } from './src/components/countdown';
import { FocusHistory } from './src/components/focushistory';
import {Timer} from  './src/components/Timer';

export default function App() {
  const [currentSubject,setCurrentSubject] = useState(null);
  const [history,setHistory] = useState([]);
  return (
    <View style={styles.container}>
      {!currentSubject ?
      <>
        <Focus addSubject = {setCurrentSubject} />
        <FocusHistory history={history}/>
        
      </>
      :
      (
        <Timer focusSubject = {currentSubject}
        onTimerEnd={(subject)=>{
          setHistory([...history,subject]);
        }}
        clearSubject={()=>{setCurrentSubject(null)}} />
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
