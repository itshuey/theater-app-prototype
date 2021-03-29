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
      <View style={styles.mainInfoContainer}>
        <View style={styles.imageContainer}>
        </View>
        <View style={styles.infoContainer}>
          <Text
            style={styles.nameText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            Name
          </Text>
          <View style={styles.ratingsContainer}>
            <View style={styles.starContainer}>
              <Ionicons size={18} name='star' color='gold'/>
              <Ionicons size={18} name='star' color='gold'/>
              <Ionicons size={18} name='star' color='gold'/>
              <Ionicons size={18} name='star' color='gold'/>
              <Ionicons size={18} name='star' color='gold'/>
            </View>
            <Text
              style={styles.ratingsText}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)">
              9.7
            </Text>
          </View>
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
            Theater:
          </Text>

          <Text
            style={styles.infoText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            Date:
          </Text>

          <Text
            style={styles.infoText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            Cast & Creative:
          </Text>
        </View>
      </View>
      <Text
        style={styles.descriptionText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)">
        Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in eleifend est.
      </Text>
      <View style={styles.interactionsContainer}>
        <View style={styles.reactionContainer}>
          <Ionicons size={22} name='ios-heart-outline' color={'gray'} />
          <Text
            style={styles.reactionText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            211
          </Text>
        </View>
        <View style={styles.reactionContainer}>
          <Ionicons size={22} name='ios-chatbox-outline' />
          <Text
            style={styles.reactionText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            21
          </Text>
        </View>
        <View style={styles.reactionContainer}>
          <Ionicons size={22} name='ios-star-outline' />
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

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  explorePost: {
    marginTop: 5,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 5,
    borderRadius: 10,
  },
  postContainer: {
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
    width: 315,
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
  tagContainer: {
    flexDirection: 'row',
    marginTop: 2,
    marginBottom: 3,
  },
  imageContainer: {
    height: 140,
    width: 110,
    backgroundColor: 'black',
  },
  infoContainer: {
    marginLeft: 10,
    width: 200,
  },
  ratingsContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  starContainer: {
    flexDirection: 'row',
  },
  interactionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 310,
    marginTop: 5,
    marginBottom: 10,
  },
  reactionContainer: {
    flexDirection: 'row',
  },
  reactionText: {
    fontSize: 16,
    paddingTop: 2,
    paddingLeft: 8,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoText: {
    marginTop: 3,
  },
  developmentModeText: {
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  descriptionText: {
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'left',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  tagText: {
    fontSize: 11,
  },
  ratingsText: {
    marginLeft: 5,
    paddingTop: 2,
  },
  tag: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 2,
    marginRight: 2,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 3,
    paddingBottom: 3,
  }
});
