import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CastListing from './CastListing';
import styles from '../styles/index';

export default function CastList({title, names, roles, images}) {
  return (
  <View style={styles.dynamicViewBorderless}>
    <Text style={styles.titleText}>{title}</Text>
    <View style={styles.splitView}>
    {images.map((image, index) => <CastListing key={index} name={names[index]} role={roles[index]} image={image} num={index} />)}
    </View>
  </View>
  );
};