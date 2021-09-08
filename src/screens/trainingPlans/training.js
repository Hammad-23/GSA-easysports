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
import Button from '../../components/button';
export default function TrainingPlans() {
  return (
    <SafeAreaView style={{flex:1}} >
      <Header />
      <ScrollView>
        <ImageBackground
          style={style.bg}
          source={require('../../assets/fitness-home-bg.jpg')}>
          <View style={{alignItems: 'center', width: '100%'}}>
            <View style={style.planBtn}>
              <Button
                color="red"
                borderWidth={2}
                borderColor="red"
                bgColor="#FFFF"
                title="TRAININGSPLAN ZURUCKSETZEN"
              />
              <Text style={style.trainTxt}>TRAININGSPLAN</Text>
            </View>

            <View style={style.cardsRow}>
              <TouchableOpacity style={style.card}>
                <ImageBackground
                  imageStyle={{borderRadius: 20}}
                  source={require('../../assets/home/fitness.jpeg')}
                  style={style.cardImg}>
                  <Text style={style.week}>WOUCHE 1</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={style.card}>
                <ImageBackground
                  imageStyle={{borderRadius: 20}}
                  source={require('../../assets/home/fitness.jpeg')}
                  style={style.cardImg}>
                  <Text style={style.week}>WOUCHE 1</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>

            <View style={style.cardsRow}>
              <TouchableOpacity style={style.card}>
                <ImageBackground
                  imageStyle={{borderRadius: 20}}
                  source={require('../../assets/home/fitness.jpeg')}
                  style={style.cardImg}>
                  <Text style={style.week}>WOUCHE 1</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={style.card}>
                <ImageBackground
                  imageStyle={{borderRadius: 20}}
                  source={require('../../assets/home/fitness.jpeg')}
                  style={style.cardImg}>
                  <Text style={style.week}>WOUCHE 1</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>

            <View style={style.cardsRow2}>
              <TouchableOpacity style={style.card}>
                <ImageBackground
                  imageStyle={{borderRadius: 20}}
                  source={require('../../assets/home/fitness.jpeg')}
                  style={style.cardImg}>
                  <Text style={style.week}>WOUCHE 1</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={style.card}>
                <ImageBackground
                  imageStyle={{borderRadius: 20}}
                  source={require('../../assets/home/fitness.jpeg')}
                  style={style.cardImg}>
                  <Text style={style.week}>WOUCHE 1</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  bg: {
    resizeMode: 'contain',
    height: '100%',
    alignItems: 'center',
  },
  planBtn: {
    marginTop: 20,
    alignItems: 'center',
  },
  trainTxt: {
    color: '#FFFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: 155,
    width: 140,
  },
  cardsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  cardsRow2: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 20,
  },
  week: {
    color: '#FFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
