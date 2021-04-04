import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View, Container } from './Themed';

export default function EventPost(
  { backgroundColor, contentColor }: { backgroundColor: string, contentColor: string }
) {
  return (
    <Container style={styles.explorePost} backgroundColor={backgroundColor} contentColor={contentColor}>
      <Container style={styles.postContainer} backgroundColor={backgroundColor} contentColor={contentColor}>
        <Container style={styles.mainTitleContainer} backgroundColor={backgroundColor} contentColor={contentColor}>
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
            04/21
          </Text>
        </Container>
        <Text
          style={styles.nameText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Wicked
        </Text>
        <Container style={styles.titleContainer} backgroundColor={backgroundColor} contentColor={contentColor}>
          <Container style={styles.mainTitleContainer} backgroundColor={backgroundColor} contentColor={contentColor}>

            <Text
              style={styles.theaterText}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)">
              Live Art
            </Text>
            <Container style={styles.starContainer} backgroundColor={backgroundColor} contentColor={contentColor}>
              <Ionicons size={18} name='star' color='gold'/>
              <Ionicons size={18} name='star' color='gold'/>
              <Ionicons size={18} name='star' color='gold'/>
              <Ionicons size={18} name='star' color='gold'/>
              <Ionicons size={18} name='star' color='gold'/>
            </Container>
          </Container>
          <Container style={styles.mainTitleContainer} backgroundColor={backgroundColor} contentColor={contentColor}>
          <Text
            style={styles.directorText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            Directed by Eva Wang
          </Text>
          <Text
            style={styles.theaterText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            (237)
          </Text>
          </Container>
        </Container>
        <Container style={styles.contentContainer} backgroundColor={backgroundColor} contentColor={contentColor}>
          <View style={styles.imageContainer}>
          </View>
          <Container style={styles.descriptionContainer} backgroundColor={backgroundColor} contentColor={contentColor}>
            <Container style={styles.imageTextContainer} backgroundColor={backgroundColor} contentColor={contentColor}>
              <Text
                style={styles.imageDescriptionText}
                lightColor="rgba(0,0,0,0.8)"
                darkColor="rgba(255,255,255,0.8)">
                Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in eleifend est. In hac habitasse platea dictumst. Etiam bibendum porttitor delussio et al...
              </Text>
            </Container>
          </Container>
        </Container>

      <Container style={styles.interactionsContainer} backgroundColor={backgroundColor} contentColor={contentColor}>
        <Container style={styles.reactionContainer} backgroundColor={backgroundColor} contentColor={contentColor}>
          <Ionicons size={20} name='ios-heart-outline' color={contentColor} />
          <Text
            style={styles.reactionText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            211
          </Text>
        </Container>
        <Container style={styles.reactionContainer} backgroundColor={backgroundColor} contentColor={contentColor}>
          <Ionicons size={20} name='ios-chatbox-outline' color={contentColor} />
          <Text
            style={styles.reactionText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            21
          </Text>
        </Container>
        <Container style={styles.reactionContainer} backgroundColor={backgroundColor} contentColor={contentColor}>
          <Ionicons size={20} name='ios-star-outline' color={contentColor} />
          <Text
            style={styles.reactionText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            50
          </Text>
        </Container>
      </Container>
      </Container>

    </Container>
  );
}

const backgroundColor = '#283b59';
const contentColor = 'white';

const styles = StyleSheet.create({
  explorePost: {
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  postContainer: {
    marginLeft: 20,
    marginTop: 30,
    marginRight: 20,
  },
  titleContainer: {
    marginBottom: 10,
    borderTopColor: contentColor,
    borderTopWidth: 1,
    borderBottomColor: contentColor,
    borderBottomWidth: 1,
  },
  mainTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    backgroundColor: '#3b3b3b',
    borderRadius: 8,
  },
  descriptionContainer: {
    flex: 1,
    marginLeft: 10,
    height: 140,
  },
  imageTextContainer: {

  },
  imageDescriptionText: {
    lineHeight: 20,
    fontFamily: 'montserrat',
    color: contentColor,
  },
  ratingsContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  starContainer: {
    flexDirection: 'row',
  },
  contentContainer: {
    flexDirection: 'row',
    marginTop: 2,
    marginBottom: 5,
  },
  interactionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 310,
    marginTop: 10,
    marginBottom: 15,
  },
  reactionContainer: {
    flexDirection: 'row',
  },
  reactionText: {
    fontSize: 14,
    paddingTop: 2,
    paddingLeft: 5,
    color: contentColor,
  },
  nameText: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'montserrat-thin',
    color: contentColor,
  },
  theaterText: {
    fontSize: 15,
    color: 'black',
    fontStyle: 'italic',
    fontFamily: 'opensans',
    color: 'gray',
  },
  directorText: {
    fontSize: 15,
    color: 'black',
    color: 'gray',
  },
  ratingsText: {
    marginLeft: 5,
    paddingTop: 2,
    color: contentColor,
  },
});
