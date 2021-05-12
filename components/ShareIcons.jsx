import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ShareIcons() {
  return (
  <View style={styles.navContainerActions}>
    <Ionicons name="paper-plane-outline" size={24} color="black" />
  </View>
  );
};

const styles = StyleSheet.create({
  navContainerActions: {
    flexDirection: 'row',
  },
});