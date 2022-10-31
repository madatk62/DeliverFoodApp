import React from 'react';
import { image,View,Text, TouchableOpacity, ScrollView } from 'react-native'
import { MyButton,MyTextInput, MyButtonSecondary } from '../../components';
import { Images } from '../../themes';
const SignIn2 = (props) => {

  return(
    <View style={{flex:1}}>
       <Text style= {{
          fontSize: 45, 
          color:"black",
          fontWeight:"700",
          justifyContent:"center",
          fontFamily:"Helvetica Neue",
          paddingLeft: 15,
          paddingRight: 150,
          height:"30%"
          }}>
            Welcome Back.
        </Text>
      
        <MyTextInput showEye={false} placeholder = "Email" labelContent="Email" style={{ margin:10}}/>
        <MyTextInput showEye={false} placeholder = "Password" labelContent="Password" style={{ margin:10}}  />
        <MyButton textContent='Sign in' />
        <View style={{flex:1, flexDirection:"row", marginTop:10}}>
          <View style={{flex:1, backgroundColor:"black", marginHorizontal:10, height:1, marginTop:10}}></View>
          <Text style={{flex:1,}}>Or continue with</Text>
          <View style={{flex:1, backgroundColor:"black", marginHorizontal:10, height:1, marginTop:10}}></View>
        </View>
        <View>
        <MyButtonSecondary title={'Continue with Google'} image={Images.icons.google} onPress={() => {}} />
          <MyButtonSecondary
            title={'Continue with Apple'}
            image={Images.icons.apple}
            contentStyle={{marginTop: 16}}
            onPress={() => {}}
          />
        </View>  
        <View style={{
          flex:1,
          flexDirection:"row",
          justifyContent:"center",
          alignItems:"flex-end",
          bottom:5
        }}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity><Text style={{color:"blue"}}>Register now</Text></TouchableOpacity>
        </View>
    </View>
  );
} 
export default SignIn2;

