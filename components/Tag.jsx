import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Tag({text}) {
  return (
  <View style={styles.tag}>
    <Text
      style={styles.tagText}
      lightColor="rgba(0,0,0,0.8)"
      darkColor="rgba(255,255,255,0.8)">
      {text}
    </Text>
  </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    borderColor: '#a9a9a9',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 2,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 3,
    paddingBottom: 3,
  },
  tagText: {
    fontSize: 11,
    color: '#a9a9a9',
  },
});