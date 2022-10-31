import React from 'react'
import { View,Text,StatusBar } from 'react-native'
import { Colors } from '../../themes'
const Intro = (props)=>{
  return(
    <View>
       <StatusBar 
        animated={true}
        barStyle = 'dark-content'
        hidden={false}
        backgroundColor= {Colors.white}
      >   
      </StatusBar>
      <Text>
        intro
      </Text>
    </View>
  )
}
export default Intro