import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Colors} from '../utils/constant';
// import Icon from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather';
export default function Header({title, navigation}) {
  return (
    <View style={style.main}>

      <View style={style.iconContainer}>
      <Feather name="menu" size={25} color="#FFFF" />
      </View>
      <View>
        <Image style={style.logo} source={require('../assets/logo.png')} />
      </View>
     
    </View>
  );
}

const style = StyleSheet.create({
  iconContainer:{
    backgroundColor:'#313d49',
    height:"100%",
    width:60,
    alignItems:'center',
    justifyContent:"center"
  },
  logo:{
    height:20,
    width:180,
    marginLeft:20
  },
  main:{
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#FFFF",
    height:'7%',
   
  }
});
