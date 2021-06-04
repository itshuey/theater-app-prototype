import React, { useState, useEffect } from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { EventPost } from '../data/eventpostdata'

import { pullShow } from '../api/firebaseMethods';

import Tags from './Tags';

export default function EmbeddedPost({ navigation, route, show }){
  const {
    name,
    tags,
    venue,
    creatives,
  } = show;

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Show', { show: show })}>
    <View style={styles.explorePost}>
      <View style={styles.postContainer}>
        <View style={styles.mainInfoContainer}>
          <Image source={require('../assets/images/default.png')} style={styles.imageContainer} />
          <View style={styles.infoContainer}>
            <View style={styles.titleContainer}>
              <View style={styles.nameContainer}>
                <Text
                  style={styles.nameText}
                  lightColor="rgba(0,0,0,0.8)"
                  darkColor="rgba(255,255,255,0.8)">
                  {name}
                </Text>
              </View>
            </View>
            <Tags tags={tags} />
            <Text
              style={styles.infoText}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)">
              {venue}
            </Text>
            <Text
              style={styles.infoText}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)">
              Creatives include: {creatives.join(', ')}
            </Text>
          </View>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  explorePost: {
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
  },
  postContainer: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
  },
  mainInfoContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    height: 120,
    width: 90,
  },
  tagContainer: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 3,
  },
  tag: {
    borderColor: '#a9a9a9',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 2,
    marginRight: 2,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 3,
    paddingBottom: 3,
  },
  infoContainer: {
    marginLeft: 10,
    width: 195,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameContainer: {
    width: "80%",
  },
  starContainer: {
    flexDirection: 'row',
  },
  starText: {
    paddingTop: 1,
    fontSize: 12,
    color: '#5e5e5e',
  },
  nameText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  infoText: {
    marginTop: 3,
    fontSize: 11,
  },
  descriptionText: {
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'left',
    color: '#4a4a4a',
  },
  tagText: {
    fontSize: 11,
    color: '#a9a9a9',
  },
  priceText: {
    marginTop: 4,
    fontSize: 11,
  },
});
