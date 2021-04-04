import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function ExplorePath({ path }: { path: string }) {
  return (
    <View style={styles.explorePost}>
      <View style={styles.postContainer}>
        <View style={styles.titleContainer}>
          <View style={styles.mainTitleContainer}>
            <Text
              style={styles.nameText}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)">
              Wicked
            </Text>
            <View style={styles.starContainer}>
              <Ionicons size={18} name='star' color='gold'/>
              <Ionicons size={18} name='star' color='gold'/>
              <Ionicons size={18} name='star' color='gold'/>
              <Ionicons size={18} name='star' color='gold'/>
              <Ionicons size={18} name='star' color='gold'/>
            </View>
          </View>
          <View style={styles.mainTitleContainer}>
            <Text
              style={styles.theaterText}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)">
              Vesuvio Theater
            </Text>
            <Text
              style={styles.theaterText}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)">
              (237)
            </Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
          </View>
          <View style={styles.descriptionContainer}>
            <View style={styles.imageTextContainer}>
              <Text
                style={styles.imageDescriptionText}
                lightColor="rgba(0,0,0,0.8)"
                darkColor="rgba(255,255,255,0.8)">
                Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in eleifend est. In hac habitasse platea dictumst. Etiam bibendum porttitor.
              </Text>
            </View>
          </View>
        </View>

      <View style={styles.interactionsContainer}>
        <View style={styles.reactionContainer}>
          <Ionicons size={20} name='ios-heart-outline' color={'black'} />
          <Text
            style={styles.reactionText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            211
          </Text>
        </View>
        <View style={styles.reactionContainer}>
          <Ionicons size={20} name='ios-chatbox-outline' />
          <Text
            style={styles.reactionText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            21
          </Text>
        </View>
        <View style={styles.reactionContainer}>
          <Ionicons size={20} name='ios-star-outline' />
          <Text
            style={styles.reactionText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            50
          </Text>
        </View>
      </View>
      </View>

    </View>
  );
}

const backgroundColor = '#f2ece6';

const styles = StyleSheet.create({
  explorePost: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    backgroundColor: backgroundColor,
    borderRadius: 4,
  },
  postContainer: {
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
    backgroundColor: backgroundColor,
  },
  titleContainer: {
    marginBottom: 10,
    borderTopColor: 'black',
    borderTopWidth: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  mainTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: backgroundColor,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainInfoContainer: {
    flexDirection: 'row',
    height: 140,
    marginBottom: 10,
    width: 100,
  },
  imageContainer: {
    height: 140,
    width: 110,
    backgroundColor: 'black',
    borderRadius: 8,
  },
  descriptionContainer: {
    flex: 1,
    marginLeft: 10,
    height: 140,
    backgroundColor: backgroundColor,
  },
  imageTextContainer: {
    paddingBottom: 10,
    backgroundColor: backgroundColor,
  },
  imageDescriptionText: {
    lineHeight: 20,
    fontFamily: 'montserrat',
  },
  ratingsContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    backgroundColor: backgroundColor,
  },
  starContainer: {
    flexDirection: 'row',
    backgroundColor: backgroundColor,
  },
  contentContainer: {
    flexDirection: 'row',
    backgroundColor: backgroundColor,
    marginTop: 2,
    marginBottom: 5,
  },
  interactionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 310,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: backgroundColor,
  },
  reactionContainer: {
    flexDirection: 'row',
    backgroundColor: backgroundColor,
  },
  reactionText: {
    fontSize: 14,
    paddingTop: 2,
    paddingLeft: 5,
  },
  nameText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'montserrat-bold',
  },
  theaterText: {
    fontSize: 15,
    color: 'black',
    fontStyle: 'italic',
  },
  ratingsText: {
    marginLeft: 5,
    paddingTop: 2,
  },
});
