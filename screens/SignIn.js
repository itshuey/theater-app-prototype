import React, { useState } from 'react';
import { ImageBackground, View, Text, TextInput, Alert, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import { signIn } from '../api/firebaseMethods';

import styles from '../styles/index';

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
    <View style={styles.bg}>
      <SafeAreaView style={styles.fullView}>
      <View style={[styles.titleView, {alignItems: 'center'}]}>
        <Text style={styles.titleText}>Sign in</Text>
        <TextInput
          style={styles.textField}
          placeholder="email:"
          placeholderTextColor="lightgray"
          value={email}
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.textField}
          placeholder="password:"
          placeholderTextColor="lightgray"
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
        />
        <View style={styles.enterContainer}>
          <TouchableOpacity style={[styles.filledButton, {marginTop: 10}]} onPress={handlePress}>
            <Text style={styles.subtitleText}> submit </Text>
          </TouchableOpacity>
        </View>
      </View>
      </SafeAreaView>
    </View>
  );
}