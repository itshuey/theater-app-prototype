import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CastListing from './CastListing';

export default function CastList({title, names, roles}) {
  return (
  <View style={styles.infoBlockContainer}>
    <Text style={styles.infoBlockHeaderText}>{title}</Text>
    {names.map((name, index) => <CastListing key={index} name={name} role={roles[index]} />)}
  </View>
  );
};

const styles = StyleSheet.create({
  infoBlockContainer: {
    marginBottom: 20,
    marginTop: 5
  },
  infoBlockHeaderText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
});
