import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Event from '../components/Event';

export default function ShowList({shows}) {
  return (
  <View style={styles.sectionInfoContainer}>
    <View style={styles.savedContainer}>
      {shows.map(show =>
        <Event
          name={show.name}
          dates={show.dates}
          image={show.image}
          style={styles.savedImageContainer}
        />
      )}
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