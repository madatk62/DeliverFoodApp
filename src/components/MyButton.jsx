import React from 'react'

import { Button,Text,View, TouchableOpacity } from 'react-native'
import {Colors} from "../themes"
const MyButton = ({textContent = "", styles = { }, onPressFunc = ()=>{}}) =>{
  return(

    <TouchableOpacity style = {{
     
      borderRadius:20, 
      justifyContent:"center",
      alignItems:"center",
      marginTop:10,
      backgroundColor:"#3AC5C9",
      height:46,
      marginHorizontal:15,
      ...styles
      }} 
      onPress = {onPressFunc}
      >
      <Text style ={{color: Colors.white, fontSize:16, fontWeight:"700"}}>{textContent}</Text>
    </TouchableOpacity>

  )
}
export default MyButton