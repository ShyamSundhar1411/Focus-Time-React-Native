import React,{useState} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {TextInput} from 'react-native-paper';

export const Focus = (addSubject) => {
  const [subject,setSubject] = useState(null);
  return (
  <View style = {styles.container}>
    <View style = {styles.inputContainer} >
      <TextInput onChangeText = {setSubject} label = "What would you like to focus on ?" />
      
        <View style={{ height: 100, marginTop: 10 }}>
            <Button title="Add" color="#2E8B57" onPress = {()=>addSubject(subject)} />
        </View>
    </View>
    
    
  </View>)
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  inputContainer:{
    flex:0.5,
    padding: 25,

  }
})