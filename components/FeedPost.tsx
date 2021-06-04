import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { ReviewPost } from '../data/reviewpostdata'

import EmbeddedPost from './EmbeddedPost'
import CommentList from '../components/CommentList';

import { pullShow } from '../api/firebaseMethods';

export default function FeedPost({ navigation, route, post }) {
  const {
    userID,
    username,
    comments,
    timeStamp,
    review,
    numLikes,
    numComments,
    show,
  } = post;

  const [emShow, setEmShow] = useState<any>(undefined);

  useEffect(() => {
    pullShow(show, setEmShow);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Reflection')}>
          <View style={styles.profileInfoContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile', {userID: userID})}>
              <Image source={require('../assets/images/defaultprofile.png')} style={styles.profileImageContainer} />
            </TouchableOpacity>
            <View style={styles.profileInfoTextContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Profile', {userID: userID})}>
                <Text style={styles.profileNameText}>
                  {username}
                </Text>
              </TouchableOpacity>
              <Text style={styles.postTimestampText}>
                {timeStamp}
              </Text>
            </View>
          </View>
          <Text
            style={styles.descriptionText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            {review}
          </Text>
          <EmbeddedPost
            navigation={navigation}
            route={route}
            show={emShow}
          />
          <View style={styles.interactionsContainer}>
            <View style={styles.reactionContainer}>
              <Ionicons size={20} name='ios-heart-outline' color={'gray'} />
              <Text
                style={styles.reactionText}
                lightColor="rgba(0,0,0,0.8)"
                darkColor="rgba(255,255,255,0.8)">
                {numLikes}
              </Text>
            </View>
            <View style={styles.reactionContainer}>
              <Ionicons size={19} name='ios-chatbox-outline' color={'gray'} />
              <Text
                style={styles.reactionText}
                lightColor="rgba(0,0,0,0.8)"
                darkColor="rgba(255,255,255,0.8)">
                {numComments}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <CommentList title={''} comments={comments} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    marginHorizontal: 0,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderTopColor: 'white',
    borderWidth: 0.5,
  },
  postContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 12,
  },
  profileInfoContainer: {
    flexDirection: 'row'
  },
  profileInfoTextContainer: {
    marginLeft: 10,
    marginTop: 2,
  },
  profileImageContainer: {
    height: 45,
    width: 45,
  },
  profileNameText: {
    fontSize: 16,
  },
  postTimestampText: {
    fontSize: 12,
    color: 'gray',
    marginTop: 3
  },
  descriptionText: {
    marginTop: 15,
    marginBottom: 10,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'left',
    color: '#4a4a4a',
  },
  interactionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 310,
    marginVertical: 10,
  },
  reactionContainer: {
    flexDirection: 'row',
  },
  reactionText: {
    fontSize: 13,
    paddingTop: 3,
    paddingLeft: 8,
    color:'gray',
  },
});
