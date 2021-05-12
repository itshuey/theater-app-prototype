import React from 'react';
import { View, Text, Image, Fragment, StyleSheet, TouchableOpacity } from 'react-native';

import normalize from '../styles/methods';

export default function ProfileBox({navigation, currentUserUID, profile, firstName, lastName, handle, numFollowers, numFollowing, bio}) {
  const handleName = () => {
    firstName != '' || lastName != '' ? styles.titleText : {display: 'none'}
  };

  return (
  <View style={styles.bigOne}>
  <View style={styles.titleContainer}>
    <Image source={profile} style={styles.imageContainer} />
    <View style={styles.titleInfoContainer}>
      <Text style={handleName}>{firstName} {lastName}</Text>
      <Text style={styles.handleText}>@{handle}</Text>
      <View style={styles.followInfoContainer}>
        <View style={styles.followContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Followers", { uid: currentUserUID })}
          >
            <Text style={styles.followNumberText}>{numFollowers} followers </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.followContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Following", { id: currentUserUID })}
          >
            <Text style={styles.followNumberText}>{numFollowing} following </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
  <View style={styles.aboutContainer}>
    <Text style={styles.aboutText}>
      {bio}
    </Text>
  </View>
  </View>
  );
};

const styles = StyleSheet.create({
  bigOne: {
    flex: 1,
  },
  titleContainer: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  titleInfoContainer: {
    marginLeft: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
  },
  aboutContainer: {
    marginBottom: 20,
  },
  handleText: {
    marginTop: 5,
    color: 'gray',
  },
  followInfoContainer: {
    marginTop: 5,
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