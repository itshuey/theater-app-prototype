import React, { useState } from 'react';
import { View, Text, TextInput, Alert, ScrollView, Keyboard, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { registration } from '../api/firebaseMethods';

import styles from '../styles/index';

const { width, height } = Dimensions.get('window');

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
    <View style={styles.bg}>
    <SafeAreaView style={styles.fullView}>
     <View style={[styles.titleView, {alignItems: 'center'}]}>
       <Text style={styles.titleText}>Sign up</Text>
        <TextInput
        style={styles.textField}
        placeholder="Email"
        value={email}
        textAlign={'left'}
        onChangeText={(email) => setEmail(email)}
        keyboardType="email-address"
        autoCapitalize="none"
        />
        <TextInput
        style={styles.textField}
        placeholder="Handle"
        value={handle}
        textAlign={'left'}
        onChangeText={(handle) => setHandle(handle)}
        />
        <TextInput
        style={styles.textField}
        placeholder="First name"
        value={firstName}
        textAlign={'left'}
        onChangeText={(name) => setFirstName(name)}
        />
        <TextInput
        style={styles.textField}
        placeholder="Last name (opt.)"
        value={lastName}
        textAlign={'left'}
        onChangeText={(name) => setLastName(name)}
        />
        <TextInput
        style={styles.textField}
        placeholder="Password"
        value={password}
        textAlign={'left'}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={true}
        />
        <TextInput
        style={styles.textField}
        placeholder="Confirm password"
        value={confirmPassword}
        textAlign={'left'}
        onChangeText={(password2) => setConfirmPassword(password2)}
        secureTextEntry={true}
        />
       <TouchableOpacity style={[styles.button, {marginTop: 40}]} onPress={handlePress}>
        <Text style={styles.subtitleText}>Sign up</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign In')}>
         <Text style={styles.captionText}>Already have an account? Sign In</Text>
       </TouchableOpacity>
     </View>
    </SafeAreaView>
    </View>
  );
}