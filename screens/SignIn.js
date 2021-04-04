import React, { useState } from 'react';
import { ImageBackground, View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { signIn } from '../api/firebaseMethods';

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
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>sign me in!</Text>
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
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}> submit </Text>
            <Ionicons style={styles.arrow} name="arrow-forward-sharp" size={12} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    resizeMode: 'cover',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 185,
  },
  titleText: {
    fontSize: 50,
    color: 'white',
    fontWeight: '100',
    fontStyle: 'italic',
    marginBottom: 40,
  },
  formInput: {
    color: 'white',
    fontSize: 18,
    width: 230,
    marginBottom: 25,
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingLeft: 8,
    paddingBottom: 1.5,
    paddingTop: 1,
    fontWeight: '100',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
  enterContainer: {
    marginTop: 3,
    width: 230,
    alignItems: 'flex-end',
  },
  button: {
    flexDirection: 'row',
  },
  arrow: {
    paddingTop: 2.5,
    paddingRight: 3,
  }
});