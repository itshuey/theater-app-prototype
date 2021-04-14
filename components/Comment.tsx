import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { CommentSchema } from '../data/reviewpostdata'

export default function Comment({
  name, pictureUrl, timeStamp, comment, numLikes, review=false
}: CommentSchema) {
  return (
    <View style={review ? styles.reviewContainer : styles.container}>
      <Image source={require('../assets/images/defaultprofile.png')} style={styles.profileImageContainer} />
      <View style={styles.mainCommentContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.commentTimestampText}>
            {timeStamp}
          </Text>
          <View style={styles.likeContainer}>
            <Text style={styles.likeText}>
              {numLikes}
            </Text>
            <Ionicons size={14} color={'gray'} name='ios-thumbs-up-sharp' />
          </View>
        </View>
        <Text style={styles.commentText}>
          {comment}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingBottom: 11,
    borderTopColor: '#e3e3e3',
    borderTopWidth: 1,
  },
  reviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingBottom: 11,
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1,
  },
  mainCommentContainer: {
    marginLeft: 10,
    width: "85%",
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileImageContainer: {
    marginTop: 5,
    height: 32,
    width: 32,
  },
  likeContainer: {
    flexDirection: 'row',
    paddingTop: -5,
  },
  likeText: {
    marginRight: 2,
    fontSize: 12,
    paddingTop: 1,
    color: 'gray',
  },
  commentTimestampText: {
    fontSize: 9,
    paddingTop: 4,
    color: 'gray',
  },
  commentText: {
    paddingTop: 4,
    fontSize: 14,
  },
});
