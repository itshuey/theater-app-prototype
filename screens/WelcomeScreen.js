import {ImageBackground, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function WelcomeScreen ({navigation}) {
  return (
     <ImageBackground
      style={styles.background}
      source={require('../assets/images/home.png')}>
      <View style={styles.buttonHolder}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign Up')} >
          <Text style={styles.buttonText}>Sign Up</Text>
         </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign In')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
     </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonHolder: {
    marginTop: 35,
  },
  button: {
    marginBottom: 2,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 2,
    paddingBottom: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
});