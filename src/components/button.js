import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {color} from 'react-native-reanimated';
function Button(props) {
  return (
    <TouchableOpacity
       {...props}
      style={{
        backgroundColor: props.bgColor,
        color: 'black',
        paddingHorizontal: 10,
        paddingVertical:10,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: props.color,
          fontSize: 20,
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
 
});
export default Button;
