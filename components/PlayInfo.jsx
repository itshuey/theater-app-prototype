import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PlayInfo({title, venue, dates, runtime, image}) {
  return (
  <View style={styles.titleContainer}>
    <View style={styles.titleInfoContainer}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.infoText}>{venue}</Text>

      <View style={styles.showInfoContainer}>
        <Ionicons name="calendar-outline" size={16} color="gray" />
        <Text style={styles.showInfoText}> {dates[0]} - {dates[1]}</Text>
      </View>
      <View style={styles.showInfoContainer}>
        <Ionicons name="time-outline" size={16} color="gray" />
        <Text style={styles.showInfoText}> {runtime} min</Text>
      </View>
    </View>
    <Image source={image} style={styles.imageContainer} />
  </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 30,
  },
  titleInfoContainer: {
    flex: 3,
  },
  infoText: {
    marginBottom: 10,
  },
  showInfoContainer: {
    flexDirection: 'row',
    marginVertical: 2,
  },
  showInfoText: {
    fontSize: 14,
    color: 'gray',
  },
  imageContainer: {
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    height: 160,
    flex: 2,
  },
});
