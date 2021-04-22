import React, { useState } from 'react';
import { View, Picker, Switch, Text, TextInput, Alert, ScrollView, Keyboard ,StyleSheet, SafeAreaView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createEvent } from '../api/firebaseMethods';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import { editProfile, uploadPicture } from '../api/firebaseMethods';
import DefaultImg from '../assets/images/defaultprofile.png'

export default Cast = ({cast, castName, castRole}) => {

  return (
    <View style={styles.formSectionContainer}>
      <Text style={styles.formSectionText}>Cast & Creatives</Text>
      <View style={styles.formBlockContainer}>
        <Text style={styles.formHeaderText}>Name</Text>
          <View style={styles.formResponseContainer}>
            <TextInput
            style={styles.formResponseText}
            placeholder="Name here"
            placeholderTextColor={"black"}
            value={castName}
            textAlign={'left'}
            onChangeText={(text) => setCastName(text)}
            />
          </View>
      </View>
      <View style={styles.formBlockContainer}>
        <Text style={styles.formHeaderText}>Role</Text>
        <View style={styles.formResponseContainer}>
          <TextInput
          style={styles.formResponseText}
          placeholder="Role here"
          placeholderTextColor={"black"}
          value={castRole}
          textAlign={'left'}
          onChangeText={(text) => setCastRole(text)}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={() => handleAdd()} >
        <Text style={styles.buttonText}>+</Text>
     </TouchableOpacity>
    </View>
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
    marginTop: 50,
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
  formButtonContainer: {
    marginTop: 10,
    alignItems: 'center'
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
    marginTop: 20,
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 15,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: 'white',
    width: "200%",
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'purple',
    fontSize: 16,
  },
  addButton: {
    marginTop: 20,
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 15,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: 'white',
    width: 25,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  picker: {
    marginTop: 5,
    paddingBottom: 5,
  },
});