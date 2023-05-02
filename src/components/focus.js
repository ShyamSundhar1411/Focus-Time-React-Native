import React,{useState} from 'react';
import {View,Text,StyleSheet,Button,FlatList} from 'react-native';
import {TextInput} from 'react-native-paper';
import {spacing} from '../utils/size';

export const Focus = ({addSubject}) => {
  const [subject,setSubject] = useState(null);
  return (
  <View style = {styles.container}>
    <View style = {styles.inputContainer} >
      <TextInput styles = {styles.textInput} onChangeText = {setSubject} label = "What would you like to focus on ?" />
      
        <View style={{ height: 50, marginTop: 10 }}>
            <Button title="Add" color="#2E8B57" onPress = {()=>addSubject(subject)} />
        </View>
    </View>
  </View>)
}
const styles = StyleSheet.create({
  container:{
  },
  inputContainer:{
    padding: spacing.lg,
  },
  textInput:{
    marginRight:spacing.sm
  }
})