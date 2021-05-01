import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BlockText({title, text}) {
  return (
  <View style={styles.infoBlockContainer}>
    <Text style={styles.infoBlockHeaderText}>{title}</Text>
    <Text style={styles.descriptionText}>{text}</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  infoBlockContainer: {
    marginBottom: 20,
    marginTop: 5
  },
  descriptionText: {
    color: 'gray',
    fontSize: 16,
  },
  infoBlockHeaderText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
});