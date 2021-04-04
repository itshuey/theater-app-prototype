import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View, Container } from './Themed';

export default function StandardCommentPost(
  { backgroundColor, contentColor }: { backgroundColor: string, contentColor: string }
) {
  return (
    <Container style={styles.commentPost} backgroundColor={backgroundColor} contentColor={contentColor}>
      <Container style={styles.postContainer} backgroundColor={backgroundColor} contentColor={contentColor}>
        <Container style={styles.mainTitleContainer} backgroundColor={backgroundColor} contentColor={contentColor}>
        <Image style={styles.pfp} source={require('../assets/images/profile.png')} />
          <Container backgroundColor={backgroundColor} contentColor={contentColor}>
            <Text
              style={styles.contentText}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)">
              Huey Sun
            </Text>
            <Text
              style={styles.idText}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)">
              just now
            </Text>
          </Container>
        </Container>
      </Container>

    </Container>
  );
}

const contentColor = 'black';

const styles = StyleSheet.create({
  commentPost: {
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  postContainer: {
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
  },
  mainTitleContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0,
    marginBottom: 10,
  },
  contentText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '200',
    color: contentColor,
    fontFamily: 'opensans',
  },
  idText: {
    fontSize: 14,
    color: 'gray',
    fontFamily: 'opensans',
  },
  pfp: {
    width: 40,
    height: 40,
  }
});
