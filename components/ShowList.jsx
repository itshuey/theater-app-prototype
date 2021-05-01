import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ShowList({title, shows}) {
  return (
  <View style={styles.sectionInfoContainer}>
    <Text style={styles.containerTitleText}>{title}</Text>
    <View style={styles.savedContainer}>
      {shows.map(show => <Image source={show} style={styles.savedImageContainer} />)}
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  sectionInfoContainer: {
    marginBottom: 20
  },
  containerTitleText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  savedContainer: {
    flexDirection: 'row',
  },
  savedImageContainer: {
    marginTop: 10,
    borderRadius: 10,
    height: 100,
    width: 80,
    marginRight: 12,
  },
});