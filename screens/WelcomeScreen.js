import React from 'react';
import {ImageBackground, StyleSheet, View, Text, SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../styles/index';

export default function WelcomeScreen ({navigation}) {

  const glitch = require('../assets/images/glitch.gif')

  return (
    <View style={styles.bg}>
    <SafeAreaView style={styles.fullView}>
      <View style={[styles.titleView, {alignItems: 'center'}]}>
      <Text style={styles.headlineText}>Theatr</Text>
      <View style={styles.itemView}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign Up')} >
          <Text style={styles.subtitleText}>Sign up</Text>
         </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign In')}>
          <Text style={styles.subtitleText}>Sign in</Text>
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
    </View>
  )
}