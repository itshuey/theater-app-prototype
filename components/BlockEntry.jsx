import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function BlockEntry({title, placeholder, numChars, chars, block, onCharsUpdate, onBlockUpdate}) {
  return (
  <View style={styles.formBlockContainer}>
    <Text style={styles.formHeaderText}>{title}</Text>
    <View style={styles.formResponseContainer}>
      <TextInput
      style={styles.formResponseText}
      placeholder={placeholder}
      multiline={true}
      value={chars}
      textAlign={'left'}
      onChangeText={(text) => (text.length <= numChars) ?
        (onCharsUpdate(text.length), onBlockUpdate(text)) :
        onCharsUpdate(text.length)}
        />
    </View>
    <Text style={styles.formHeaderText}>{numChars - chars} Characters Remaining</Text>
  </View>
  );
};

const styles = StyleSheet.create({
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
});