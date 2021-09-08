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

export default function Shop() {
  return (
    <SafeAreaView style={{flex:1}} >
      <Header />
      <View style={style.main}>
        <View style={style.content}>
          <View style={style.heading}>
            <Text style={{fontSize: 18}}>Subscribe</Text>
          </View>

          <TouchableOpacity style={style.shopBtns}>
            <Text style={style.txt}>Apple Podcast</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.shopBtns}>
            <Text style={style.txt}>Pocket Casts</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.shopBtns}>
            <Text style={style.txt}>Google Pay</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.shopBtns}>
            <Text style={style.txt}>iHeart Radio</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FFFF',
    alignItems: 'center',
  },
  content: {
    width: '90%',
  },
  heading: {
    borderBottomWidth: 2,
    marginTop: 10,
    borderColor: '#ededed',
  },
  shopBtns: {
    borderWidth: 2,
    height: 40,
    borderColor: '#313d49',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  txt: {
    color: '#313d49',
    fontWeight: 'bold',
  },
});
