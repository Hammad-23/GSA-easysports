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

export default function UserHome({navigation}) {
  return (
    <>
      <Header />
      <View>
        <ImageBackground
          source={require('../../assets/home/Home-bg.jpg')}
          style={style.bg}>
          <TouchableOpacity onPress={()=>{navigation.navigate('profile')}} style={style.cards}>
            <ImageBackground
              style={style.imgBg}
              source={require('../../assets/home/fitness.jpeg')}>
              <Text style={style.txtCards}>Fitness</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={style.cards2}>
            <ImageBackground
              style={style.imgBg}
              source={require('../../assets/home/gsa.jpeg')}>
              <Text style={style.txtCards}>GSA</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={style.cards2}>
            <ImageBackground
              style={style.imgBg}
              source={require('../../assets/home/diat.jpeg')}>
              <Text style={style.txtCards}>Diat</Text>
            </ImageBackground>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  bg: {
    resizeMode: 'contain',
    height: '100%',
    alignItems: 'center',
  },
  cards: {
    height: 150,
    width: '80%',
    marginTop: 50,
  },
  cards2: {
    height: 150,
    width: '80%',
    marginTop: 20,
  },
  imgBg: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtCards: {
    fontSize: 40,
    color: '#FFFF',
    fontWeight: 'bold',
  },
});
