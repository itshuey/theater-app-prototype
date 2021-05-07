import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function CastField({name, role, index, onTextUpdate}) {

  return (
    <View style={styles.formSectionContainer}>
      <View style={styles.boxContainer}>
      <Text style={styles.formHeaderText}>Name</Text>
      <View style={styles.formResponseContainer}>
        <TextInput
          placeholder="Name here"
          style={styles.formResponseText}
          textAlign={'left'}
          value={name}
          onChangeText={(text)=>onTextUpdate(index, text, null)} />
      </View>
      </View>
      <View style={styles.formBlockContainer}>
        <Text style={styles.formHeaderText}>Role</Text>
        <View style={styles.formResponseContainer}>
          <TextInput
          style={styles.formResponseText}
          placeholder="Role here"
          value={role}
          textAlign={'left'}
          onChangeText={(text) => onTextUpdate(index, null, text)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});