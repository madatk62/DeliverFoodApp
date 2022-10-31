import React from 'react'
import { Colors } from '../themes'
import {View, TextInput, Text} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
const MyTextInput = ({
  showEye,
  labelContent,
  placeholder, 
  inputType,
  secureTextEntry = false,
  style = {}
}) => {
  return(<View style ={{flexDirection:"column", ...style}}>
    <Text style ={{color: Colors.black , fontSize: 14, paddingBottom: 5}}>{labelContent}</Text>
    <TextInput
      style = {{ borderRadius:20, backgroundColor: Colors.grey, paddingLeft: 15 }}
      placeholder= {placeholder}
      secureTextEntry = {secureTextEntry}
    />
   {showEye && <FontAwesome name="eye" size={20} />}
  </View>)
}
export { MyTextInput}