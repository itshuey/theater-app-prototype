import React, { useState } from 'react';
import { View, Text, TextInput, Alert, ScrollView, Keyboard, SafeAreaView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { registration } from '../api/firebaseMethods';

import styles from '../styles/index';

export default function SignUp({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [handle, setHandle] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emptyState = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setHandle('');
    setPassword('');
    setConfirmPassword('');
  };

  const handlePress = () => {
    if (!firstName) {
      Alert.alert('First name is required');
    } else if (!email) {
      Alert.alert('Email field is required.');
    } else if (!password) {
      Alert.alert('Password field is required.');
    } else if (!confirmPassword) {
      setPassword('');
      Alert.alert('Confirm password field is required.');
    } else if (password !== confirmPassword) {
      Alert.alert('Password does not match!');
    } else {
      registration(
        email,
        password,
        handle,
        lastName,
        firstName,
      );
      navigation.navigate('Loading');
      emptyState();
    }
  };

  const placeholderTextColor = "#c9d0ff";

  return (
    <SafeAreaView style={styles.fullView}>
     <View style={styles.contentView}>
       <Text style={styles.titleText}></Text>

       <ScrollView onBlur={Keyboard.dismiss}>
         <TextInput
          style={styles.textField}
          placeholder="email"
          placeholderTextColor={"#b8e0ff"}
          value={email}
          textAlign={'left'}
          onChangeText={(email) => setEmail(email)}
          keyboardType="email-address"
          autoCapitalize="none"
         />
         <TextInput
         style={styles.textField}
         placeholder="handle"
         placeholderTextColor={"#edfbff"}
         value={handle}
         textAlign={'left'}
         onChangeText={(handle) => setHandle(handle)}
         />
          <TextInput
          style={styles.textField}
          placeholder="first name"
          placeholderTextColor={"#edfbff"}
          value={firstName}
          textAlign={'left'}
          onChangeText={(name) => setFirstName(name)}
          />
         <TextInput
          style={styles.textField}
          placeholder="last name (opt.)"
          placeholderTextColor={"#d9edff"}
          value={lastName}
          textAlign={'left'}
          onChangeText={(name) => setLastName(name)}
         />

          <TextInput
          style={styles.textField}
          placeholder="password"
          placeholderTextColor={"#c9d0ff"}
          value={password}
          textAlign={'left'}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
         />
         <TextInput
          style={styles.textField}
          placeholder="confirm password"
          placeholderTextColor="#d7c9ff"
          value={confirmPassword}
          textAlign={'left'}
          onChangeText={(password2) => setConfirmPassword(password2)}
          secureTextEntry={true}
          />
       </ScrollView>
       <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.subtitleText}>SIGN UP</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign In')}>
         <Text style={styles.subtitleText}>Already have an account? Sign In</Text>
       </TouchableOpacity>
     </View>
    </SafeAreaView>
  );
}