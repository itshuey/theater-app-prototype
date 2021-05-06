import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AccessibilityListing from './AccessibilityListing';

export default function AccessibilityList({title, items}) {
  return (
    <View style={styles.infoBlockContainer}>
      <Text style={styles.infoBlockHeaderText}>{title}</Text>
      {items.map(item => <AccessibilityListing item={item} />)}
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
