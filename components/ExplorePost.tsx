import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { EventPost } from '../data/eventpostdata'

export default function ExplorePost({
   name, numStars, price, tags, venue, dates, creatives, description, emoji
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

          <View style={styles.nameContainer}>
          <View style={styles.headlineContainer}>
            <View style={styles.logisticsContainer}>
              <Text
                style={styles.infoText}
                lightColor="rgba(0,0,0,0.8)"
                darkColor="rgba(255,255,255,0.8)">
                {venue}, {dates}
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
              style={styles.nameText}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)">
              {name}
            </Text>

        </View>
        <View style={styles.mainInfoContainer}>
          <Image source={require('../assets/images/default.png')} style={styles.imageContainer} />
          <View style={styles.infoContainer}>
            <Text
              style={styles.descriptionText}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)">
              {description}
            </Text>
            <View style={styles.tagContainer}>
              {tagList}
            </View>
          </View>
        </View>
        <View style={styles.detailContainer}>
          <View>
            <Text
              style={styles.priceText}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)">
              Starting from {price}
            </Text>
            <Text
              style={styles.infoText}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)">
              Creatives include:&nbsp;
                <Text style={styles.creativesText}>
                  {creatives.join(', ')}
                </Text>
            </Text>
          </View>
          <View style={styles.emojiContainer}>
            <Text
              style={styles.emoji}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)">
              {emoji}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  explorePost: {
    marginVertical: 3,
    marginHorizontal: 0,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderTopColor: 'white',
    borderWidth: 0.5,
  },
  postContainer: {
    margin: 20,
  },
  mainInfoContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 5,
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
    marginHorizontal: 2,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 3,
    paddingBottom: 3,
  },
  infoContainer: {
    marginLeft: 10,
    width: 200,
    marginTop: -4,
  },
  headlineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logisticsContainer: {
    paddingTop: 6,
  },
  starContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  nameContainer: {
    marginBottom: 10,
  },
  starText: {
    paddingTop: 1,
    fontSize: 12,
    color: '#5e5e5e',
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#454545',
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
  creativesText: {

  },
  priceText: {
    marginTop: 4,
    fontSize: 11,
  },
  emoji: {
    fontSize: 26
  },
  emojiContainer: {
    marginTop: 5,
    paddingLeft: 2,
    height: 30,
    width: 30,
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 0,
    borderColor: 'gray',
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
