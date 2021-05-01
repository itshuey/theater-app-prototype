import React from 'react';
import { View, StyleSheet } from 'react-native';
import Tag from './Tag';

export default function MultiEntry({tags}) {
  return (
  <View style={styles.tagContainer} >
  {tags.map((tag) =>
    <Tag
      text={tag}
    />)}
  </View>
  );
};

const styles = StyleSheet.create({
  tagContainer: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 40,
  },
});