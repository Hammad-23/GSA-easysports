import React from 'react';
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

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: '',
      }}
      tabBarOptions={{
        style: {
          backgroundColor: '#313d49',
        },
      }}
      initialRouteName="home">
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color="#FFFF" size={30} />
          ),
        }}
        name="home"
        component={UserHome}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="rocket-outline" color="#FFFF" size={30} />
          ),
        }}
        name="search"
        component={TrainingPlans}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="video" color="#FFFF" size={30} />
          ),
        }}
        name="save"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="musical-notes-outline" color="#FFFF" size={30} />
          ),
        }}
        name="music"
        component={Dashboard}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="newspaper-variant-outline"
              color="#FFFF"
              size={30}
            />
          ),
        }}
        name="abc"
        component={News}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Fontisto name="shopping-store" color="#FFFF" size={30} />
          ),
        }}
        name="def"
        component={Shop}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <SimpleLineIcons name="envelope" color="#FFFF" size={30} />
          ),
        }}
        name="chat"
        component={Contact}
      />
    </Tab.Navigator>
  );
}
