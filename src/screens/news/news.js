import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import Header from '../../components/Header';

export default function News() {
  return (
    <SafeAreaView style={{flex:1}} >
      <Header />
      <ScrollView>
        <ImageBackground
          style={style.imgBg}
          source={require('../../assets/news/news-bg.jpg')}>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={style.heading}>NEWS</Text>
            <Text style={{color: '#FFFF', fontWeight: 'bold'}}>
              ALLES RUND UM GESUNDHEIT UND ATHLETIK
            </Text>
          </View>
          <TouchableOpacity style={style.newsCards}>
            <Text style={style.txtinsideCard}>GESUNDHEITS-</Text>
            <Text style={style.txtinsideCard}>ANZEIGER</Text>
            <ImageBackground
              style={style.newsBtn}
              source={require('../../assets/news/news-btn.png')}>
              <Text style={style.txtNews}>MEHR EHRFARHEN</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={style.newsCards}>
            <Text style={style.txtinsideCard}>GESUNDHEITS-</Text>
            <Text style={style.txtinsideCard}>ANZEIGER</Text>
            <ImageBackground
              style={style.newsBtn}
              source={require('../../assets/news/news-btn.png')}>
              <Text style={style.txtNews}>MEHR EHRFARHEN</Text>
            </ImageBackground>
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  imgBg: {
    resizeMode: 'contain',
    height: '100%',
    alignItems: 'center',
  },
  heading: {
    fontSize: 60,
    color: '#FFFF',
    fontWeight: 'bold',
  },
  newsCards: {
    height: 270,
    width: 220,
    backgroundColor: '#49545e',
    opacity: 0.7,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  txtinsideCard: {
    fontSize: 25,
    color: '#FFFF',
    fontWeight: 'bold',
  },
  newsBtn: {
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  txtNews: {
    color: '#FFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
