import React,{useState} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import { Countdown } from './countdown';
import {spacing} from '../utils/size';
export const Timer = ({focusSubject}) =>{
    const [isStarted,setIsstarted] = useState(false);
    return  (
    
    <View styles = {styles.container}>
        <View style = {styles.countdown}>
            <Countdown isPaused={!isStarted} onProgress={()=>{}} onEnd={()=>{}}/>
        </View>
        <View style={{ height: 100, margin:100 }}>
            <Button title = "start" onPress = {()=>setIsstarted(true)} />
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
})
