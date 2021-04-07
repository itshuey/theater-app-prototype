import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import EmbeddedPost from './EmbeddedPost'

export default function Comment({ props }: { props: string }) {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Image source={require('../assets/images/defaultprofile.png')} style={styles.profileImageContainer} />
        <View style={styles.mainCommentContainer}>
          <Text style={styles.commentTimeText}>
            6 hours ago
          </Text>
          <Text style={styles.commentText}>
            Lorem ipsum dolores est
          </Text>
        </View>
      </View>
      <View style={styles.likeContainer}>
        <Text style={styles.likeText}>
          50
        </Text>
        <Ionicons size={14} color={'gray'} name='ios-thumbs-up-sharp' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 11,
    paddingBottom: 11,
    borderTopColor: '#e3e3e3',
    borderTopWidth: 1,
  },
  mainContainer: {
    flexDirection: 'row',
  },
  mainCommentContainer: {
    marginLeft: 10
  },
  profileImageContainer: {
    height: 32,
    width: 32,
  },
  likeContainer: {
    flexDirection: 'row',
  },
  likeText: {
    marginRight: 2,
    fontSize: 12,
    paddingTop: 1,
    color: 'gray',
  },
  commentText: {
    paddingTop: 4,
    fontSize: 15,
  },
  commentTimeText: {
    fontSize: 9,
    color: 'gray',
  },
});
