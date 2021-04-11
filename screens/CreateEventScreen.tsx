import React, { useState } from 'react';
import { View, Text, TextInput, Alert, ScrollView, Keyboard ,StyleSheet, SafeAreaView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { registration } from '../api/firebaseMethods';

export default function CreateEventScreen({ navigation }) {
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
      <ScrollView style={styles.container}>
        <View style={styles.navContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Create Event</Text>
          <Ionicons name="chevron-back" size={24} color="white" />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.formSectionContainer}>
            <Text style={styles.formSectionText}>Basic Information</Text>
            <View style={styles.formBlockContainer}>
              <Text style={styles.formHeaderText}>Show Name</Text>
              <View style={styles.formResponseContainer}>
                <TextInput
                style={styles.formResponseText}
                placeholder="A Brief Name Here"
                placeholderTextColor={"black"}
                value={firstName}
                textAlign={'left'}
                onChangeText={(name) => setFirstName(name)}
                />
              </View>
            </View>
            <View style={styles.formBlockContainer}>
              <Text style={styles.formHeaderText}>Description</Text>
              <View style={styles.formResponseContainer}>
                <Text style={styles.formResponseText}>A brief name here</Text>
              </View>
            </View>
          </View>
          <View style={styles.formSectionContainer}>
            <Text style={styles.formSectionText}>Cast & Creatives</Text>
            <View style={styles.formBlockContainer}>
              <Text style={styles.formHeaderText}>Director</Text>
              <View style={styles.formResponseContainer}>
                <Text style={styles.formResponseText}>A brief name here</Text>
              </View>
            </View>
            <View style={styles.formBlockContainer}>
              <Text style={styles.formHeaderText}>Playwright</Text>
              <View style={styles.formResponseContainer}>
                <Text style={styles.formResponseText}>A brief name here</Text>
              </View>
            </View>
          </View>
          <View style={styles.formSectionContainer}>
            <Text style={styles.formSectionText}>Venue Information</Text>
            <View style={styles.formBlockContainer}>
              <Text style={styles.formHeaderText}>Venue Name</Text>
              <View style={styles.formResponseContainer}>
                <Text style={styles.formResponseText}>A brief name here</Text>
              </View>
            </View>
            <View style={styles.formBlockContainer}>
              <Text style={styles.formHeaderText}>Venue Address</Text>
              <View style={styles.formResponseContainer}>
                <Text style={styles.formResponseText}>A brief name here</Text>
              </View>
            </View>
          </View>
            <TouchableOpacity style={styles.button} onPress={() => console.log("Submit")} >
              <Text style={styles.buttonText}>Create</Text>
             </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
  },
  navContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  navContainerActions: {
    flexDirection: 'row',
  },
  contentContainer: {
    marginTop: 40,
    backgroundColor: 'transparent',
    marginHorizontal: 30,
  },
  headerText: {
    fontSize: 18,
    paddingTop: 2,
  },
  formSectionContainer: {
    marginBottom: 20,
  },
  formSectionText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  formBlockContainer: {
    marginTop: 10,
  },
  formHeaderText: {
    fontSize: 12,
    fontWeight: '300',
  },
  formResponseText: {
    fontSize: 15,
    fontWeight: '300',
  },
  formResponseContainer: {
    marginTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1.5,
    borderBottomColor: 'purple',
  },
  button: {
    marginTop: 50,
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 15,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: 'white',
    width: "50%",
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'purple',
    fontSize: 16,
  },

});