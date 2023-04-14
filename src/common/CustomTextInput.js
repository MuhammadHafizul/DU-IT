import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomTextInput = ({value, onChangeText, placeholder, icon, type}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="white"
        style={styles.textInput}
        secureTextEntry={type == 'password' ? true : false}
        // keyboardType={type ? type : 'default'}
      />
    </View>
  );
};
export default CustomTextInput;

const styles = StyleSheet.create({

  container: {
    width: '70%',
    height: 50,
    borderWidth: 1,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },

  textInput: {
    color: 'white',
    marginLeft: 10,
  },
});
