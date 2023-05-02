import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import { fontSizes, spacing } from '../utils/size';
export const FocusHistory = ({history}) => {
    if(!history || !history.length) return null;
    const renderItem = ({item}) => <Text styles = {styles.item}> - {item}</Text>
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>
                Things we have focussed on
            </Text>
            <FlatList data = {history} renderItem={renderItem}/>
        </View>
    )
}
const styles = StyleSheet.create({
    title:{
        color:'black',
        fontSize: fontSizes.md,
    },
    item:{
        color:'black',
        fontSize:fontSizes.md,
        paddingTop:spacing.sm
    },
    container:{
        padding:spacing.md,
        flex:1,
    }
})