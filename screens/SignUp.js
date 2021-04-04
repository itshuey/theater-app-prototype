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

  const placeholderTextColor = "#c9d0ff";

  return (
    <SafeAreaView style={styles.safeContainer}>
     <View style={styles.container}>
       <Text style={styles.titleText}>sign up:</Text>

       <ScrollView onBlur={Keyboard.dismiss}>
          <TextInput
          style={[styles.textInput, styles.color1]}
          placeholder="first name"
          placeholderTextColor={"#edfbff"}
          value={firstName}
          textAlign={'left'}
          onChangeText={(name) => setFirstName(name)}
          />
         <TextInput
          style={[styles.textInput, styles.color2]}
          placeholder="last name (opt.)"
          placeholderTextColor={"#d9edff"}
          value={lastName}
          textAlign={'left'}
          onChangeText={(name) => setLastName(name)}
         />

         <TextInput
          style={[styles.textInput, styles.color3]}
          placeholder="email"
          placeholderTextColor={"#b8e0ff"}
          value={email}
          textAlign={'left'}
          onChangeText={(email) => setEmail(email)}
          keyboardType="email-address"
          autoCapitalize="none"
         />

          <TextInput
          style={[styles.textInput, styles.color4]}
          placeholder="password"
          placeholderTextColor={"#c9d0ff"}
          value={password}
          textAlign={'left'}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
         />
         <TextInput
          style={[styles.textInput, styles.color5]}
          placeholder="confirm password"
          placeholderTextColor="#d7c9ff"
          value={confirmPassword}
          textAlign={'left'}
          onChangeText={(password2) => setConfirmPassword(password2)}
          secureTextEntry={true}
          />
       </ScrollView>
       <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>SIGN UP</Text>
       </TouchableOpacity>
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
    justifyContent: 'center'
  },
  safeContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 70,
    color: 'white',
    fontWeight: '100',
    fontStyle: 'italic',
    marginBottom: 140,
  },
  textInput: {
    color: 'white',
    fontSize: 18,
    width: 250,
    marginBottom: 18,
    borderBottomWidth: 1,
    fontWeight: '100',
  },
  buttonText: {
    color: '#b1a6ff',
    fontSize: 20,
  },
  button: {
    marginTop: 40,
    borderColor: '#b1a6ff',
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 85,
    paddingRight: 85,
    paddingTop: 2,
    paddingBottom: 2,
  },
  altButton: {
    textAlign: 'center',
  },
  signInText: {
    marginTop: 20,
    fontSize: 14,
    color: 'gray',
    fontWeight: '300',
  },
  color1: {
    borderBottomColor: '#edfbff',
  },
  color2: {
    borderBottomColor: '#d9edff',
  },
  color3: {
    borderBottomColor: '#b8e0ff',
  },
  color4: {
    borderBottomColor: '#c9d0ff',
  },
  color5: {
    borderBottomColor: '#d7c9ff',
  },

});