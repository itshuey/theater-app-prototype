import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View, Container } from './Themed';

export default function CommentPost(
  { backgroundColor, contentColor }: { backgroundColor: string, contentColor: string }
) {
  return (
    <Container style={styles.commentPost} backgroundColor={backgroundColor} contentColor={contentColor}>
      <Container style={styles.postContainer} backgroundColor={backgroundColor} contentColor={contentColor}>
        <Container style={styles.mainTitleContainer} backgroundColor={backgroundColor} contentColor={contentColor}>
          <Container backgroundColor={backgroundColor} contentColor={contentColor}>
            <Text
              style={styles.idText}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)">
              Huey Sun saved
            </Text>
            <Text
              style={styles.contentText}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)">
              The Lion King
            </Text>
          </Container>
          <Ionicons style={styles.bookmark} name="bookmark-outline" size={24} color="black" />
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
    justifyContent: 'space-between',
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
  bookmark: {
    marginTop: 10,
  }
});
