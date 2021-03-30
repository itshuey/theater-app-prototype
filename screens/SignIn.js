import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {signIn} from '../api/firebaseMethods';

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

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Sign-In</Text>

      <TextInput
        style={styles.formInput}
        placeholder="<EMAIL>"
        placeholderTextColor="lightgray"
        value={email}
        onChangeText={(email) => setEmail(email)}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.formInput}
        placeholder="<PASSWORD>"
        placeholderTextColor="lightgray"
        value={password}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  titleText: {
    fontSize: 70,
    color: 'white',
    fontFamily: 'wired',
    marginBottom: 30,
    marginTop: 180,
  },
  formInput: {
    color: 'white',
    marginTop: 2,
    marginBottom: 2,
    fontSize: 18,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  button: {
    marginTop: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 2,
    paddingBottom: 2,
  },
});