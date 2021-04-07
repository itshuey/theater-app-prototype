import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { EventPost } from '../data/eventpostdata'

export default function ExplorePost({
   name, numStars, price, tags, venue, dates, creatives, description
  }: EventPost){

  const tagList = tags.map((tag) =>
    <View key={tag} style={styles.tag}>
      <Text
        style={styles.tagText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)">
        {tag}
      </Text>
    </View>
  )

  return (
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
              <View style={styles.starContainer}>
                <Ionicons size={14} color={'#5e5e5e'} name='ios-star-outline' />
                <Text
                  style={styles.starText}
                  lightColor="rgba(0,0,0,0.8)"
                  darkColor="rgba(255,255,255,0.8)">
                  {numStars}
                </Text>
              </View>
            </View>
            <Text
              style={styles.priceText}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)">
              Starting from {price}
            </Text>
            <View style={styles.tagContainer}>
              {tagList}
            </View>
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
              Dates: {dates}
            </Text>
            <Text
              style={styles.infoText}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)">
              Creatives include: {creatives.join(', ')}
            </Text>
          </View>
        </View>
        <Text
          style={styles.descriptionText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Description: {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  explorePost: {
    marginTop: 4,
    marginRight: 8,
    marginLeft: 8,
    marginBottom: 4,
    borderRadius: 8,
  },
  postContainer: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    width: 315,
  },
  mainInfoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    width: 100,
  },
  imageContainer: {
    height: 140,
    width: 110,
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
    width: 200,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: 200,
  },
  starContainer: {
    flexDirection: 'row'
  },
  nameContainer: {
    width: "80%",
  },
  starText: {
    fontSize: 14,
    color: '#5e5e5e',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoText: {
    marginTop: 3,
    fontSize: 12,
  },
  descriptionText: {
    fontSize: 13,
    lineHeight: 20,
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
