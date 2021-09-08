import React from 'react';
import {View, Text, StyleSheet, Image,SafeAreaView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function Cards(props) {
  return (
    <SafeAreaView style={{flex:1}} >
      <View style={style.cards}>
        <View
          style={{
            backgroundColor: props.color,
            height: '100%',
            width: 5,
          }}></View>
        <View style={style.earnings}>
          <View>
            <Text style={{color: props.color}}>{props.title}</Text>

            <Text style={style.amount}>{props.price}</Text>
          </View>
          <View>{/* {<props.bar/>} */}</View>
          <View>
            <props.icon name={props.name} size={35} color="#dddfeb" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  cards: {
    width: '100%',
    height: 120,
    backgroundColor: '#FFFF',
    flexDirection: 'row',
  },
  color: {
    backgroundColor: '#313d49',
    height: '100%',
    width: 5,
  },
  earnings: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    justifyContent: 'space-around',
  },
  amount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
  },
});
