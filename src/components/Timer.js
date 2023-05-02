import React,{useState} from 'react';
import {View,Text,StyleSheet,Button,Vibration} from 'react-native';
import { Countdown } from './countdown';
import {Timing} from './Timing';
import {useKeepAwake} from 'expo-keep-awake';
import {spacing} from '../utils/size';
import { ProgressBar,Colors } from 'react-native-paper';

const ONE_SECONDS_IN_MS = 1000;
const PATTERN = [
    1*ONE_SECONDS_IN_MS,
    1*ONE_SECONDS_IN_MS,
    1*ONE_SECONDS_IN_MS,
    1*ONE_SECONDS_IN_MS,
    1*ONE_SECONDS_IN_MS,
]
export const Timer = ({focusSubject,clearSubject,onTimerEnd}) =>{
    useKeepAwake();
    const [isStarted,setIsstarted] = useState(false);
    const [progress,setProgress] = useState(1);
    const [minutes,setMinutes] = useState(0.1);
    const onEnd = (reset) =>{
        Vibration.vibrate(PATTERN);
        setIsstarted(false);
        setMinutes(0.1);
        setProgress(1);
        reset();
        onTimerEnd(focusSubject);
    }
    return  (
    
    <View styles = {styles.container}>
        <View style = {styles.countdown}>
            <Countdown minutes = {minutes} isPaused={!isStarted} onProgress={setProgress} onEnd={onEnd}/>
            
        </View>
        <View style = {{paddingTop:spacing.sm}}>
            <Text style = {styles.title}>Focusing on</Text>
            <Text style = {styles.task}>{focusSubject}</Text>
        </View>
        <View style = {{paddingTop:spacing.sm}}>
            <ProgressBar 
            progress={progress}
            style = {{height:10}}/>
        </View>
        <View style = {{height:50,margin:50,flexDirection:'row'}}>
            <Timing onChangeTime={setMinutes} />
        </View>
        <View style={{ height: 50, margin:50 }}>
            {!isStarted ? <Button title = "Start" onPress = {()=>setIsstarted(true)} /> : 
            <Button title = "Pause" onPress = {()=>setIsstarted(false)} />
            }
        </View>
        <View style = {{flexDirection:'row',justifyContent:'center'}}>
            <Button title = "Clear Subject"  onPress = {clearSubject} />
        </View>
        
    </View>
)
    }
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        
    },
    countdown:{
        justifyContent:'center',
        paddingLeft:75,
    },
    title:{
        color:'black',
        fontWeight:'bold',
        textAlign:'center',
    },
    task:{
        color:'black',
        fontWeight:'normal',
        textAlign:'center',
    }
})
