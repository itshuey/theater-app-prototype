import React from 'react';
import { View, StyleSheet } from 'react-native';
import Tag from './Tag';

import styles from '../styles/index';

export default function Tags({tags}) {
  return (
  <View style={styles.itemView} >
  {tags.map((tag) =>
    <Tag
      text={tag}
    />)}
  </View>
  );
};