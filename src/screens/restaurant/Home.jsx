import React from 'react';
import {View,Text, TouchableOpacity,StatusBar, Image} from 'react-native';
import { Colors,Images } from '../../themes';
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
const Home = ()=>{
  return(
    <View style={{flex:1, backgroundColor:Colors.gray}}>
      <StatusBar 
        animated={true}
        barStyle = 'dark-content'
        hidden={false}
        backgroundColor= {Colors.white}
      >   
      </StatusBar>
      <View style={{backgroundColor:Colors.white}}>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <TouchableOpacity style={{flexDirection:"row", alignItems:"center"}}>
            <Ionicons name="location" color={Colors.primary} size={24} style={{marginRight:10, marginLeft:15}}/>
            <Text style ={{ color:Colors.black, marginRight:10}}>Choose an address</Text>
            <AntDesign name="right" color={Colors.black} size= {16} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight:20}}>
          <AntDesign name="search1" color={Colors.black} size= {24} />
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor:Colors.primary, minHeight:"30%", borderRadius:25, margin:15}}>
          <View style={{flex:1, flexDirection:"row", margin:10}}>
            <View style = {{flex:1, marginTop:30}}>
              <Text style ={{
                flex:1,
                color:Colors.white,
                alignSelf:"center",
                fontSize:30,
                textAlign:"left",
                fontFamily:"iCiel Cadena"
              }}>
                The Fastest In Delivery Food
              </Text>
              <TouchableOpacity style={{
                  alignSelf:"center",
                  justifyContent:"center",
                  borderRadius:20,
                  marginBottom:30,
                  marginRight:50,
                  height:40,
                  width:110,
                  backgroundColor:"#FF6A6A"}}>
                <Text style ={{
                  color:Colors.white,
                  fontSize:14,
                  textAlign:"center",
                  fontFamily:"iCiel Cadena",
                 
                }}>Order now</Text>
              </TouchableOpacity>
            </View>
           
            <Image 
              source={Images.images.human}
            />
          </View>
        </View>
      </View>
    </View>
  )
}
export default Home;