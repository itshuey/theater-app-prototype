import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function Flipper({title, val, onValUpdate}) {
  return (
  <View style={styles.formButtonContainer}>
    <Text style={styles.formHeaderText}>{title}</Text>
    <Switch
      style={styles.formResponseContainer}
      value={val}
      onValueChange={onValUpdate}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  formButtonContainer: {
    marginTop: 10,
    alignItems: 'center'
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
});