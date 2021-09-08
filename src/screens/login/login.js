import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header';
import Input from '../../components/input';
import Button from '../../components/button';
export default function LogIn({navigation}) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const login = () => {
    if (userName === 'asif.saggi@gmail.com' && password === 'Test@123') {
      AsyncStorage.setItem('nutzername', userName);
    } else {
      alert('Wrong username or password');
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <View>
        <ImageBackground
          source={require('../../assets/home/Home-bg.jpg')}
          style={style.bg}>
          <View style={style.loginForm}>
            <Text style={style.formHeading}>Anmeldung</Text>
            <View style={style.inp}>
              <Input
                onChangeText={value => {
                  setUserName(value);
                }}
                placeholder="Nutzername"
              />
            </View>
            <View style={style.inp}>
              <Input
                onChangeText={value => {
                  setPassword(value);
                }}
                placeholder="password"
              />
            </View>
            <TouchableOpacity style={style.vergessen}>
              <Text style={{color: 'green'}}>Passwort Vergessen?</Text>
            </TouchableOpacity>
            <View style={style.btn}>
              <Button
                fontSize={20}
                bgColor="#313d49"
                color="#FFFF"
                title="Einloggen"
                onPress={login}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('register');
              }}
              style={style.smallBtn}>
              <Text style={{color: '#FFFF'}}>Anmelden</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  bg: {
    resizeMode: 'contain',
    height: '100%',
    alignItems: 'center',
  },
  loginForm: {
    backgroundColor: '#FFFF',
    height: 350,
    width: '85%',
    marginTop: 80,
    alignItems: 'center',
  },
  formHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  inp: {
    width: 270,
    marginTop: 10,
  },
  btn: {
    width: 270,
    marginTop: 10,
  },
  smallBtn: {
    marginTop: 20,
    backgroundColor: 'green',
    height: 30,
    width: 80,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vergessen: {
    marginTop: 20,
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
