import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LogIn from '../screens/login/login';
import Home from '../screens/home/home';
import Register from '../screens/register/register';
import Contact from '../screens/contact/contact';
import TrainingPlans from '../screens/trainingPlans/training';
import Shop from '../screens/shop';
import News from '../screens/news/news';
import Dashboard from '../screens/dashboard/dashboard';
import UserHome from '../screens/userHome/userhome';
import {Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {color} from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNavigation from './drawer';
const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const [auth, setAuth] = useState(true);
  useEffect(async () => {
    console.log('hello');
    try {
      let userName = await AsyncStorage.getItem('nutzername');
      let afterParsing = JSON.parse(userName);
      if (afterParsing) {
        setAuth(true);
      } else {
        setAuth(false);
      }
      console.log('async--> ', afterParsing);
    } catch (e) {
      console.log('error--> ', e.message);
    }
  }, [auth]);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: '',
      }}
      tabBarOptions={{
        style: {
          backgroundColor: '#313d49',
          paddingTop:10,
          height:90
        },
      }}
      initialRouteName="home">
      {auth ? (
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size,focused}) => (
              <Ionicons name="home-outline" color={focused?"red":"#FFFF"} size={30} />
            ),
          }}
          name="home"
          component={UserHome}
        />
      ) : (
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size,focused}) => (
              <Ionicons name="home-outline" color={focused?"red":"#FFFF"} size={30} />
            ),
          }}
          name="home"
          component={LogIn}
        />
      )}
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size,focused}) => (
            <Ionicons name="rocket-outline" color={focused?"red":"#FFFF"} size={30} />
          ),
        }}
        name="search"
        component={TrainingPlans}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size,focused}) => (
            <Feather name="video" color={focused?"red":"#FFFF"} size={30} />
          ),
        }}
        name="save"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size,focused}) => (
            <Ionicons name="musical-notes-outline" color={focused?"red":"#FFFF"} size={30} />
          ),
        }}
        name="music"
        component={Dashboard}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size,focused}) => (
            <MaterialCommunityIcons
              name="newspaper-variant-outline"
              color={focused?"red":"#FFFF"}
              size={30}
            />
          ),
        }}
        name="abc"
        component={News}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size,focused}) => (
            <Fontisto name="shopping-store" color={focused?"red":"#FFFF"} size={30} />
          ),
        }}
        name="def"
        component={Shop}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size,focused}) => (
            <SimpleLineIcons name="envelope" color={focused?"red":"#FFFF"} size={30} />
          ),
        }}
        name="chat"
        component={Contact}
      />
    </Tab.Navigator>
  );
}
