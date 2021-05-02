import React from 'react';
import {ImageBackground, StyleSheet, View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../styles/index';

export default function WelcomeScreen ({navigation}) {

  const glitch = require('../assets/images/glitch.gif')

  return (
     <ImageBackground
      style={styles.bg}
      source={glitch}>
      <Text style={styles.titleText}>Brava</Text>
      <View style={styles.itemView}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign Up')} >
          <Text style={styles.subtitleText}>sign up</Text>
         </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign In')}>
          <Text style={styles.subtitleText}>sign in</Text>
        </TouchableOpacity>
      </View>
     </ImageBackground>
  )
}