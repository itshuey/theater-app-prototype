import React from 'react';
import { View, Text, TextInput, Fragment, StyleSheet } from 'react-native';

export default function CommaSeparated({title, placeholder, val, onValUpdate}) {
  return (
  <View style={styles.formBlockContainer}>
    <Text style={styles.formHeaderText}>{title}</Text>
    <View style={styles.formResponseContainer}>
      <TextInput
        style={styles.formResponseText}
        placeholder={placeholder}
        multiline={true}
        value={val}
        textAlign={'left'}
        onChangeText={(text) => onValUpdate(text.split(",").map((value) => value.trim()))}
      />
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
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
});