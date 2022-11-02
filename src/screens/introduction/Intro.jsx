import React from 'react'
import { View,Text,StatusBar,Image,StyleSheet, TouchableOpacity } from 'react-native'
import { Colors,Images } from '../../themes'
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';
const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: Images.images.intro.first,
    backgroundColor: Colors.white,
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: Images.images.intro.second,
    backgroundColor: Colors.white,
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\nLorem ipsum bla bla bla',
    image: Images.images.intro.third,
    backgroundColor: Colors.white,
  }
];
const _renderItem = ({ item }) => {
  return (

      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.backgroundColor,
          },
        ]}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
  );
}
const _onDone = () => {
  // User finished the introduction. Show real app through
  // navigation or simply by controlling state
  this.setState({ showRealApp: true });
}
_keyExtractor = (item: Item) => item.title;
const Intro = ({navigation})=>{
  return(
    <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={_keyExtractor}
          renderItem={_renderItem}
          data={slides}
          dotStyle= {{backgroundColor:Colors.gray70, width:10}}
          activeDotStyle = {{backgroundColor: Colors.primary,width:30}}
          showSkipButton = {true}
          showDoneButton = {true}
          renderDoneButton={_renderDoneButton(navigation)}
          renderNextButton={_renderNextButton}
          renderSkipButton={_renderSkipButton}
        />
      </View>
  )
}
const handlePressDoneButton =(navigation)=>{
  return ()=>{
    navigation.navigate("SignIn")
  }
}
_renderDoneButton = (navigation) => {
  return ()=>(
    <TouchableOpacity style={{backgroundColor: Colors.primary , height:50, width:50, borderRadius:20, alignItems:'center',justifyContent:'center'}}
      onPress={handlePressDoneButton(navigation)}
    > 
      <Icon name="md-checkmark" color="rgba(255, 255, 255, .9)" size={24} />
    </TouchableOpacity>
  );
};
const _renderSkipButton = ()=>{
  return(<View style={{ height:50, width:50, borderRadius:20, alignItems:'center',justifyContent:'center'}}>
    <Text>Skip</Text>
  </View>)
}
_renderNextButton = () => {
  return (
    <View style={{backgroundColor: Colors.primary , height:50, width:50, borderRadius:20, alignItems:'center',justifyContent:'center'}}>
      <Icon
        name="arrow-forward"
        color= {Colors.white}
        size={24}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: '#888888',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: '#3B3B3B',
    textAlign: 'center',
    fontWeight:"700"
  },
});
export default Intro