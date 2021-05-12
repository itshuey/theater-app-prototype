import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { colors } from '../styles/colors';

export default function SaveButton() {
  return (
  <View style={styles.buttonContainer}>
  <TouchableOpacity>
    <Text>S</Text>
  </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius:40,
    height: 70,
    width: 70,
    backgroundColor: colors.bg2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
});