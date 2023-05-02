import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { fontSizes } from '../utils/size';
export const FocusHistory = () => {
    // if(!history || !history.length) return null;
    return (
        <View>
            <Text style = {styles.title}>
                Things we have focussed on
            </Text>
            
        </View>
    )
}
const styles = StyleSheet.create({
    title:{
        color:'white',
        fontSize: fontSizes.lg,
        textAlign:'center'
    }
})