import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
function Input(props) {
  return (
    <View style={styles.input}>
      <TextInput
        {...props}
        style={{
          borderWidth: 1.5,
          borderColor: '#e3e3e3',
          borderTopWidth: 0,
          
          borderLeftWidth: 0,
          borderRightWidth: 0,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    width: '100%',
  },
});
export default Input;
