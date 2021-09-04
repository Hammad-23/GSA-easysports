import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header';
import Button from '../../components/button';
export default function TrainingPlans() {
  return (
    <>
      <Header />
      
      <ImageBackground
        style={style.bg}
        source={require('../../assets/fitness-home-bg.jpg')}>
        <ScrollView contentContainerStyle={{alignItems:"center"}}>
            <View style={style.planBtn}>
                <Button color="red" borderWidth={2} borderColor="red" bgColor="#FFFF" title="TRAININGSPLAN ZURUCKSETZEN" />
                <Text style={style.trainTxt} >TRAININGSPLAN</Text>
            </View>

            <View style={style.cardsRow}>
                <TouchableOpacity style={style.card}>
                    <ImageBackground imageStyle={{ borderRadius: 20}} source={require('../../assets/home/fitness.jpeg')} style={style.cardImg}>
                        <Text style={{color:"#FFFF"}}>WOUCHE 1</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={style.card}>
                    <ImageBackground imageStyle={{ borderRadius: 20}} source={require('../../assets/home/fitness.jpeg')} style={style.cardImg}>
                        <Text style={{color:"#FFFF"}}>WOUCHE 1</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={style.cardsRow}>
                <TouchableOpacity style={style.card}>
                    <ImageBackground imageStyle={{ borderRadius: 20}} source={require('../../assets/home/fitness.jpeg')} style={style.cardImg}>
                        <Text style={{color:"#FFFF"}}>WOUCHE 1</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={style.card}>
                    <ImageBackground imageStyle={{ borderRadius: 20}} source={require('../../assets/home/fitness.jpeg')} style={style.cardImg}>
                        <Text style={{color:"#FFFF"}}>WOUCHE 1</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={style.cardsRow}>
                <TouchableOpacity style={style.card}>
                    <ImageBackground imageStyle={{ borderRadius: 20}} source={require('../../assets/home/fitness.jpeg')} style={style.cardImg}>
                        <Text style={{color:"#FFFF"}}>WOUCHE 1</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={style.card}>
                    <ImageBackground imageStyle={{ borderRadius: 20}} source={require('../../assets/home/fitness.jpeg')} style={style.cardImg}>
                        <Text style={{color:"#FFFF"}}>WOUCHE 1</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>




        </ScrollView>
        </ImageBackground>
        
    </>
  );
}

const style = StyleSheet.create({
  bg: {
    resizeMode: 'contain',
    height:"100%",
    alignItems: 'center',
  },
  planBtn:{
      marginTop:10,
      alignItems:"center"
  },
  trainTxt:{
      color:"#FFFF",
      fontSize:30,
      fontWeight:"bold"
  },
  cardImg:{
    height:"100%",
    width:"100%",
    alignItems:"center",
    justifyContent:"center"
    
  },
  card:{
      height:180,
      width:170,
      
  },
  cardsRow:{
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-around",
    marginTop:10

  }
});