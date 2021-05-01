import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AccessibilityListing({item}) {
  return (
    <View style={styles.castBlock}>
      <Text>{item}</Text>
      <Ionicons name="checkmark-circle-outline" size={16} color="green" />
    </View>
  );
};

const styles = StyleSheet.create({
  castBlock: {
    marginVertical: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
