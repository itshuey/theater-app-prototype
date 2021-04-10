import * as React from 'react';
import { Image, StyleSheet, FlatList } from 'react-native';

import { Text, View } from '../components/Themed';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image />
        <Text style={styles.titleText}>Eva Wang</Text>
        <Text style={styles.handleText}>@evawang0426</Text>
        <View style={styles.followInfoContainer}
          <View style={styles.followContainer}>
            <Text style={styles.followNumberText}>200</Text>
            <Text style={styles.followText}>followers</Text>
          </View>
          <View style={styles.followContainer}>
            <Text style={styles.followNumberText}>200</Text>
            <Text style={styles.followText}>following</Text>
          </View>
        </View>
      </View>
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutText}>
          Lorem ipsum dolor sit amet,
        </Text>
      </View>
      <View style={styles.savedShowsContainer}>
        <Text style={styles.aboutText}>
          Lorem ipsum dolor sit amet,
        </Text>
      </View>
      <View style={styles.watchedShowsContainer}>
        <Text style={styles.aboutText}>
          Lorem ipsum dolor sit amet,
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightgray'
  },
  titleContainer: {
    paddingTop: 10,
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  followInfoContainer: {
    flexDirection: 'row',
  },
  followContainer: {
    flexDirection: 'row',
  }
});
