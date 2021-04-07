import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function EmbeddedPost({ props }: { props: string }) {
  return (
    <View style={styles.explorePost}>
      <View style={styles.postContainer}>
      <View style={styles.mainInfoContainer}>
        <Image source={require('../assets/images/default.png')} style={styles.imageContainer} />
        <View style={styles.infoContainer}>
          <View style={styles.titleContainer}>
            <Text
              style={styles.nameText}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)">
              Name
            </Text>
            <View style={styles.starContainer}>
            <Ionicons size={14} color={'#5e5e5e'} name='ios-star-outline' />
            <Text
              style={styles.starText}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)">
              50
            </Text>
            </View>
          </View>

          <Text
            style={styles.priceText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            Starting from $0.00
          </Text>
          <View style={styles.tagContainer}>
            <View style={styles.tag}>
              <Text
                style={styles.tagText}
                lightColor="rgba(0,0,0,0.8)"
                darkColor="rgba(255,255,255,0.8)">
                Tag 1
              </Text>
            </View>
            <View style={styles.tag}>
              <Text
                style={styles.tagText}
                lightColor="rgba(0,0,0,0.8)"
                darkColor="rgba(255,255,255,0.8)">
                Tag 2
            </Text>
          </View>
          </View>

          <Text
            style={styles.infoText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            Venue Name here
          </Text>

          <Text
            style={styles.infoText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            Dates
          </Text>

          <Text
            style={styles.infoText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            Creatives include:
          </Text>
        </View>
      </View>
      <Text
        style={styles.descriptionText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)">
        Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in eleifend est.
      </Text>
      </View>
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
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
    marginBottom: 10,
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
    width: 175,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  starContainer: {
    flexDirection: 'row'
  },
  starText: {
    fontSize: 14,
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
