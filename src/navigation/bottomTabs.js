import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LogIn from '../screens/login/login';
import Home from '../screens/home/home';
import {Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {color} from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator initialRouteName="home">
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color="black" size={size} />
          ),
        }}
        name="home"
        component={LogIn}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="rocket-outline" color="black" size={size} />
          ),
        }}
        name="search"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="video" color="black" size={size} />
          ),
        }}
        name="save"
        component={LogIn}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="musical-notes-outline" color="black" size={size} />
          ),
        }}
        name="location"
        component={LogIn}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="newspaper-variant-outline"
              color="black"
              size={size}
            />
          ),
        }}
        name="abc"
        component={LogIn}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Fontisto name="shopping-store" color="black" size={size} />
          ),
        }}
        name="def"
        component={LogIn}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <SimpleLineIcons name="envelope" color="black" size={size} />
          ),
        }}
        name="chat"
        component={LogIn}
      />
    </Tab.Navigator>
  );
}
