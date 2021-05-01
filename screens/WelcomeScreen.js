import React from 'react';
import {ImageBackground, StyleSheet, View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function WelcomeScreen ({navigation}) {

  const glitch = require('../assets/images/glitch.gif')

  return (
     <ImageBackground
      style={styles.background}
      source={glitch}>
      <Text style={styles.titleText}>Brava</Text>
      <View style={styles.buttonHolder}>
        <TouchableOpacity style={[styles.mainButton, styles.button]} onPress={() => navigation.navigate('Sign Up')} >
          <Text style={styles.mainButtonText}>sign up</Text>
         </TouchableOpacity>
        <TouchableOpacity style={[styles.altButton, styles.button]} onPress={() => navigation.navigate('Sign In')}>
          <Text style={styles.buttonText}>sign in</Text>
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
    resizeMode: 'cover',
  },
  titleText: {
    fontSize: 80,
    color: 'white',
    fontFamily: 'wired',
    marginBottom: 40,
    marginTop: -50,
  },
  buttonHolder: {
    marginTop: 45,
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
  mainButton: {
    backgroundColor: 'white',
  },
  mainButtonText: {
    color: 'black',
    fontSize: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
});