import React, { useState } from 'react';
import { ImageBackground, View, Text, TextInput, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import { signIn } from '../api/firebaseMethods';

import styles from '../constants/Styles';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => {
    if (!email) {
      Alert.alert('Email field is required.');
    }

    if (!password) {
      Alert.alert('Password field is required.');
    }

    signIn(email, password);
    setEmail('');
    setPassword('');
  };

  const sketch = require('../assets/images/sketch.png')

  return (
    <ImageBackground
     style={styles.background}
     source={sketch}>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>sign me in!</Text>
        <TextInput
          style={styles.formInput}
          placeholder="email:"
          placeholderTextColor="lightgray"
          value={email}
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.formInput}
          placeholder="password:"
          placeholderTextColor="lightgray"
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
        />
        <View style={styles.enterContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handlePress}>
            <Text style={styles.buttonText}> submit </Text>
            <Ionicons style={styles.arrow} name="arrow-forward-sharp" size={12} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}