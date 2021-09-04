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
import Input from '../../components/input';
import Button from '../../components/button';
export default function Register() {
  return (
    <>
      <Header />
      <View>
        <ImageBackground
          source={require('../../assets/home/Home-bg.jpg')}
          style={style.bg}>
          <View style={style.loginForm}>
            <Text style={style.formHeading}>Registrieren</Text>
            <View style={style.inp}>
              <Input placeholder="Nutzername" />
            </View>
            <View style={style.inp}>
              <Input placeholder="Email" />
            </View>
            <View style={style.inp}>
              <Input placeholder="Passwort" />
            </View>
            <View style={style.inp}>
              <Input placeholder="Passwort bestatigen" />
            </View>
            {/* <TouchableOpacity style={style.vergessen}>
              <Text style={{color: 'green'}}>Passwort Vergessen?</Text>
            </TouchableOpacity> */}
            <View style={style.btn}>
              <Button
                fontSize={20}
                bgColor="#313d49"
                color="#FFFF"
                title="Einloggen"
              />
            </View>
            <TouchableOpacity style={style.smallBtn}>
              <Text style={{color: '#FFFF'}}>Anmeldung</Text>
            </TouchableOpacity>
          </View>
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
  loginForm: {
    backgroundColor: '#FFFF',
    height: 450,
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
    marginTop: 25,
  },
  smallBtn: {
    marginTop: 20,
    backgroundColor: 'green',
    height: 30,
    width: 90,
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
