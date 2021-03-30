import React, { useState } from 'react';
import { View, Text, TextInput, Alert, ScrollView, Keyboard ,StyleSheet, SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { registration } from '../api/firebaseMethods';

export default function SignUp({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emptyState = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
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
        lastName,
        firstName,
      );
      navigation.navigate('Loading');
      emptyState();
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
     <View style={styles.container}>
       <Text style={styles.titleText}>Create</Text>

       <ScrollView onBlur={Keyboard.dismiss}>
          <TextInput
          style={styles.textInput}
          placeholder="<FIRST NAME>"
          placeholderTextColor="lightgray"
          value={firstName}
          onChangeText={(name) => setFirstName(name)}
          />
         <TextInput
          style={styles.textInput}
          placeholder="<LAST NAME>"
          placeholderTextColor="lightgray"
          value={lastName}
          onChangeText={(name) => setLastName(name)}
         />

         <TextInput
          style={styles.textInput}
          placeholder="<EMAIL>"
          placeholderTextColor="lightgray"
          value={email}
          onChangeText={(email) => setEmail(email)}
          keyboardType="email-address"
          autoCapitalize="none"
         />

          <TextInput
          style={styles.textInput}
          placeholder="<PASSWORD>"
          placeholderTextColor="lightgray"
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
         />
         <TextInput
          style={styles.textInput}
          placeholder="<CONFIRM PASSWORD>     "
          placeholderTextColor="lightgray"
          value={confirmPassword}
          onChangeText={(password2) => setConfirmPassword(password2)}
          secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} onPress={handlePress}>
           <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>

       </ScrollView>
       <TouchableOpacity style={styles.altButton} onPress={() => navigation.navigate('Sign In')}>
         <Text style={styles.signInText}>Already have an account? Sign In</Text>
       </TouchableOpacity>
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  safeContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  titleText: {
    fontSize: 70,
    color: 'white',
    fontFamily: 'wired',
    marginBottom: 60,
    marginTop: 120,
  },
  textInput: {
    color: 'white',
    marginTop: 2,
    marginBottom: 2,
    fontSize: 18,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  inlineText: {
    color: 'white',
  },
  button: {
    marginTop: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 70,
    paddingRight: 30,
    paddingTop: 2,
    paddingBottom: 2,
  },
  signInText: {
    marginTop: 180,
    fontSize: 14,
    color: 'white',
  }

});