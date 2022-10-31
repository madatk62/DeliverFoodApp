import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Images,Colors } from '../../themes';
import Icon from "react-native-vector-icons/FontAwesome"
const RestaurantInfoCard = ({item})=>{

    return(
      <TouchableOpacity style={{flex:1, flexDirection:"row", width:"100%", padding:5}}>
        <Image source={item.imgSrc} 
          style={{
            borderRadius: 20,
            height:91,
            width:114
           }}/>
        <View style={{marginLeft:10, height:91}}>
          <Text style={{fontSize:16, marginBottom:5,fontWeight:"700",lineHeight: 24, color:Colors.black}}>{item.name}</Text>
          <Text style={{fontSize:14,fontWeight:"400",lineHeight: 20, color:"#3B3B3B"}}>3605 Parker Rd.</Text>
          <View style= {{flex: 1,flexDirection:"row", alignItems:"flex-end", justifyContent:"space-between"}}>
            <Icon name='star' style={{color: Colors.yellow}} size={15} />
            <Text>{item.rating} ({item.peopleRated})</Text>
            <Text>.</Text>
            <Text>{item.distance} km</Text>
          </View>
        </View>

      </TouchableOpacity>
    )
}
export default RestaurantInfoCard;