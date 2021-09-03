import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../utils/constant';
import Icon from 'react-native-vector-icons/Ionicons';
export default function Navigator({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={()=>{navigation.navigate('adress')}}  style={styles.tabs}>
          <Icon name="home" color="#FFF" size={20} />
          <Text style={styles.text}>Startseite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabs}>
          <Icon name="home" color="#FFF" size={20} />
          <Text style={styles.text}>Meine kurse</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.tabs}>
          <Icon name="home" color="#FFF" size={20} />
          <Text style={styles.text}>Konkat</Text>
        </TouchableOpacity>
      </View>
      <View style={{height: 0.5, backgroundColor: '#FFF'}} />
      <View style={styles.subContainer1}>
        <TouchableOpacity style={styles.tabs}>
          <Text style={styles.text1}>Impressum</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabs}>
          <Text style={styles.text2}>Datenschutz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabs}>
          <Text style={styles.text3}>Teilnahmebedingungen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 20,
  },
  tabs: {
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 15,
  },
  text1: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 15,
  },
  text2: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 13,
    marginLeft:20
  },
  text3: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 11,
  },
  subContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
    justifyContent: 'space-between',
    width: '100%',
  },
  subContainer1: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    width: '105%',
  },
});
