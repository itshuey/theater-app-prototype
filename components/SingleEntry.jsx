import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function SingleEntry({title, placeholder, val, onValUpdate}) {
  return (
  <View style={styles.formBlockContainer}>
    <Text style={styles.formHeaderText}>{title}</Text>
    <View style={styles.formResponseContainer}>
      <TextInput
      style={styles.formResponseText}
      placeholder={placeholder}
      value={val}
      textAlign={'left'}
      onChangeText={(text) => onValUpdate(text)}
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
  formResponseContainer: {
    marginTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1.5,
    borderBottomColor: 'purple',
  },
  formResponseText: {
    fontSize: 15,
    fontWeight: '300',
  },
});