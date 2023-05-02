import React from 'react';
import {View,StyleSheet,Button} from 'react-native';

export const Timing = ({ onChangeTime}) => {
    return (
        <>
            <View style = {styles.timing}>
                <Button title = "10" onPress = {()=> onChangeTime(10)} />
            </View>
            <View style = {styles.timing}>
                <Button title = "15" onPress = {()=> onChangeTime(15)} />
            </View>
            <View style = {styles.timing}>
                <Button title = "20" onPress = {()=> onChangeTime(20)} />
            </View>
        </>
        
        
        
    )
}
const styles = StyleSheet.create({
    timing:{
        flex:1,
        alignItems:'center',
    }
})