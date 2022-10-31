
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import SignIn from './src/screens/account/SignIn';
import Home from './src/screens/restaurant/Home';
import { Colors } from './src/themes';
import BottomTab from './src/navigation/BottomTab';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigation/AppStack';
const App: () => Node = () => {
 

  return (
   <AppStack />
   
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#ffffff",
    textShadowColor:Colors.black
  }
})