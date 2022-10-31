import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import { Colors } from '../themes';
import Home from '../screens/restaurant/Home';
import TopRestaurants from "../screens/restaurant/TopRestaurants";

var tab = createBottomTabNavigator();
const BottomTab = ()=>{
return(
  <tab.Navigator
  screenOptions={{headerShown:false}}
  style ={{borderRadius:20}}
  >
    <tab.Screen  name ="Home" 
    component={Home} 
    options={{
      headerShown: false,
      tabBarLabel: 'Home',
      tabBarBadge: null,
      tabBarIcon: ({focused, tintColor, size}) => (
        <View>
          <Icon
            name="home"
            size={22}
            color={focused ? Colors.primary : '#757E83'}
            solid={focused ? true : false}
          />
        </View>
      ),
    }}
    />
    <tab.Screen 
    name ="TopRestaurants" 
    component={TopRestaurants}
    options={{
      tabBarShowLabel:false,
      headerShown: false,
      tabBarBadge: null,
      tabBarIcon: ({focused, tintColor, size}) => (
        <View>
          <Icon
            name={focused?"heart":"heart-o"}
            size={22}
            color={focused ? Colors.primary : '#757E83'}
            solid={focused ? true : false}
          />
        </View>
      ),
    }}
    />
    
  </tab.Navigator>
)
} 
export default  BottomTab;