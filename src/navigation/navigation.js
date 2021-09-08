/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import { createDrawerNavigator }  from '@react-navigation/drawer';
import BottomTabs from './bottomTabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../utils/constant';
import LogIn from '../screens/login/login';
import Home from '../screens/home/home';
import Register from '../screens/register/register';
import Profile from '../screens/profile/profile';
import DrawerNavigation from './drawer';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.primaryColor}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="home">
          <Stack.Screen name="home" component={BottomTabs} />

          <Stack.Screen name="profile" component={Profile} />

          
          
       
        </Stack.Navigator>
        
        
      </NavigationContainer>
    </View>
  );
};

const DrawerFunction = ()=>{
  return <Drawer.Navigator>
    <Drawer.Screen name="profile" component={Profile} />
  </Drawer.Navigator>
}


export default AppNavigator;
