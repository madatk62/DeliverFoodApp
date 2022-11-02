import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTab from "./BottomTab";
import Intro from '../screens/introduction/Intro';
import SignIn2 from '../screens/account/SignIn';
const Stack = createNativeStackNavigator();
const AppStack = ()=>{
  const [isLogin,setIsLogin] = useState(true);
  return(
    <NavigationContainer>
     
        {
          isLogin? <BottomTab/>:<Stack.Navigator>
          <Stack.Screen name='Introduction' component={Intro} options={{headerShown:false}}/>
          <Stack.Screen name='SignIn' component={SignIn2}  options={{headerShown:false}} />
        </Stack.Navigator>
        }
      
    </NavigationContainer>
  )

}

export default AppStack;
