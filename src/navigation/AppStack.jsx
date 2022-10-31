import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTab from "./BottomTab";
import Intro from '../screens/introduction/Intro';
const Stack = createNativeStackNavigator();
const AppStack = ()=>{
  const [isLogin,setIsLogin] = useState(false);
  return(
    <NavigationContainer>
     
        {
          isLogin? <BottomTab/>:<Stack.Navigator>
          <Stack.Screen name='Introduction' component={Intro} options={{headerShown:false}}/>
        </Stack.Navigator>
        }
      
    </NavigationContainer>
  )

}

export default AppStack;
