import React from 'react';
import { View, Text, Image, Fragment, StyleSheet } from 'react-native';

export default function ProfileBox({profile, firstName, lastName, handle, numFollowers, numFollowing, bio}) {
  return (
  <React.Fragment>
  <View style={styles.titleContainer}>
    <Image source={profile} style={styles.imageContainer} />
    <View style={styles.titleInfoContainer}>
      <Text style={styles.titleText}>{firstName}{lastName}</Text>
      <Text style={styles.handleText}>@{handle}</Text>
      <View style={styles.followInfoContainer}>
        <View style={styles.followContainer}>
          <Text style={styles.followNumberText}>{numFollowers}</Text>
          <Text style={styles.followText}>followers</Text>
        </View>
        <View style={styles.followContainer}>
          <Text style={styles.followNumberText}>{numFollowing}</Text>
          <Text style={styles.followText}>following</Text>
        </View>
      </View>
    </View>
  </View>
  <View style={styles.aboutContainer}>
    <Text style={styles.aboutText}>
      {bio}
    </Text>
  </View>
  </React.Fragment>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 30,
    marginBottom: 5,
    marginLeft: 10,
    flexDirection: 'row',
  },
  titleInfoContainer: {
    marginLeft: 15,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
  },
  handleText: {
    marginTop: 1,
    color: 'gray',
  },
  followInfoContainer: {
    marginTop: 8,
    flexDirection: 'row',
  },
  followContainer: {
    flexDirection: 'row',
    marginRight: 5,
  },
  followNumberText: {
    fontSize: 12,
    fontWeight: "600",
  },
  followText: {
    fontSize: 12,
  },
  imageContainer: {
    borderRadius:40,
    height: 70,
    width: 70,
  },
});