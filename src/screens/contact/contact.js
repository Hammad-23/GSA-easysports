import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Header from '../../components/Header';
import Button from '../../components/button';
import MapView from 'react-native-maps';
export default function Contact() {
  return (
    <>
      <Header />
      <ScrollView contentContainerStyle={style.main}>
        <View style={style.content}>
          <View style={style.heading}>
            <Text style={{fontSize: 18}}>Kontakt</Text>
          </View>
          <View style={style.inpContainer}>
            <TextInput
              placeholderTextColor="grey"
              placeholder="Dein Name"
              style={style.inp}
            />
          </View>

          <View style={style.inpContainer}>
            <TextInput
              placeholderTextColor="grey"
              placeholder="Dein E-Mail"
              style={style.inp}
            />
          </View>

          <View style={style.inpContainer}>
            <TextInput
              maxLength={200}
              multiline={true}
              numberOfLines={4}
              placeholder="Nachricht"
              style={style.inp2}
            />
          </View>

          <View style={style.inpContainer}>
            <Button
              fontSize={20}
              bgColor="#313d49"
              color="#FFFF"
              title="Senden"
            />
          </View>
          <View style={style.inpContainer}>
            <Text style={{fontSize: 20}}>User Standort</Text>
          </View>
          <View
            style={{
              width: '100%',
              alignSelf: 'center',
              backgroundColor: '#dedede',
              marginTop: 20,
            }}>
            <MapView
              style={{
                width: '100%',
                backgroundColor: 'red',
                height: 200,
                alignItems: 'center',
              }}
              initialRegion={{
                latitude: 48.487719,
                longitude: 9.219526,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              <MapView.Marker
                coordinate={{
                  latitude: 48.487719,
                  longitude: 9.219526,
                }}
                title={'Your Location'}
                draggable
              />
            </MapView>
          </View>
          <View style={style.adress}>
            <View style={{marginTop:20,marginLeft:20,height:80}} >
            <Text style={{color: '#FFFF'}}>
              {' '}
              Adresse: Ziegelweg 1/1, 72764 Reutlingen{' '}
            </Text>
            <Text style={{color: '#FFFF'}}> E-Mail: info@easy-sports.com </Text>
            <Text style={{color: '#FFFF'}}> Telefon: 07121 144 81 400</Text>
            </View>
          </View>
          <View style={style.inpContainer3}>
            <Button
              fontSize={16}
              bgColor="#313d49"
              color="#FFFF"
              title="Ruf uns jetzt an!"
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
const style = StyleSheet.create({
  main: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFFF',
  },
  heading: {
    borderBottomWidth: 1,
    marginTop: 10,
  },
  content: {
    width: '90%',
  },
  inp: {
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  inpContainer: {
    marginTop: 30,
  },
  inp2: {
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  adress: {
    backgroundColor: '#313d49',
  },
  inpContainer3:{
    marginTop: 30,
    marginBottom:20
  }
});
