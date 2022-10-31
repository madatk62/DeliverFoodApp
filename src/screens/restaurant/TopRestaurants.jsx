import React, { useEffect,useState } from 'react';
import { View,StatusBar,Text, TouchableOpacity,Image, ScrollView,FlatList } from 'react-native';
import { Colors,Images } from '../../themes';
import Icon from 'react-native-vector-icons/FontAwesome';
import RestaurantInfoCard from '../../components/Card/RestaurantInfoCard';
const TopRestaurants = ()=>{
  const [restaurants,setRestaurants] = useState([{
    Id:1,
    imgSrc : Images.images.restaurent.longhorn,
    name: "LongHorn Steakhouse",
    rating: "5",
    peopleRated: 999,
    address: "3605 Parker Rd.",
    distance: 0.6
  },{
    Id:2,
    imgSrc : Images.images.restaurent.dave,
    name: "Famous Dave's",
    rating: "5",
    peopleRated: 999,
    address: "8558 Green Rd.",
    distance: 0.6
  },{
    Id:3,
    imgSrc : Images.images.restaurent.hardrock,
    name: "Hard Rock coffe",
    rating: "5",
    peopleRated: 999,
    address: "7290 EGreen Rd.",
    distance: 0.6
  },
  {
    Id:4,
    imgSrc : Images.images.restaurent.longhorn,
    name: "LongHorn Steakhouse",
    rating: "5",
    peopleRated: 999,
    address: "3605 Parker Rd.",
    distance: 0.6
  },{
    Id:5,
    imgSrc : Images.images.restaurent.dave,
    name: "Famous Dave's",
    rating: "5",
    peopleRated: 999,
    address: "8558 Green Rd.",
    distance: 0.6
  },{
    Id:6,
    imgSrc : Images.images.restaurent.hardrock,
    name: "Hard Rock coffe",
    rating: "5",
    peopleRated: 999,
    address: "7290 EGreen Rd.",
    distance: 0.6
  }
]);
  useEffect(()=>{
   
  },[])
  return(
    <View style={{flex:1}}>
      <StatusBar 
        animated={true}
        showHideTransition = 'slide'
        barStyle = 'light-content'
        hidden = {false}
        translucent = {true}
        backgroundColor = {Colors.primary}
      >   
      </StatusBar>
      <View style= {{maxHeight:"35%",backgroundColor: Colors.primary, height:"35%", borderRadius:20}}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={20} color="#ffffff" style= {{marginTop:50, marginLeft:20}} />
        </TouchableOpacity>
        <View style={{flex:1, flexDirection:"row", marginHorizontal:15}}>
          <Text style ={{
            flex:1,
            color:Colors.white,
            alignSelf:"center",
            fontSize:36,
            textAlign:"left",
            fontFamily:"iCiel Cadena"
           }}> TOP BEST RESAURANT</Text>
          <Image 
            source={Images.images.human}
          />
        </View>
      </View>
        <FlatList 
          data={restaurants}
          renderItem = {RestaurantInfoCard}
          keyExtractor = {restaurants.Id}
          style={{padding:5}}
        />

    </View>
    
 
  )
}
export default TopRestaurants;