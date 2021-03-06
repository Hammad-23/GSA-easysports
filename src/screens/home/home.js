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

export default function Home() {
  return (
    <>
      <Header />
      <ImageBackground
        style={style.bg}
        source={require('../../assets/fitness-home-bg.jpg')}></ImageBackground>
    </>
  );
}

const style = StyleSheet.create({
  bg: {
    resizeMode: 'contain',
    height: '100%',
    alignItems: 'center',
  },
});
