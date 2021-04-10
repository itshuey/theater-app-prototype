import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import EmbeddedPost from './EmbeddedPost'
import Comment from './Comment'
import { ReviewPost } from '../data/reviewpostdata'

export default function FeedPost(
  { navigation, username, pictureUrl, timeStamp, review, event, numLikes, numComments, comments }: ReviewPost
) {

  const commentList = comments.map((comment) =>
    <Comment
      id={comment.id}
      key={comment.id}
      name={comment.name}
      pictureUrl={comment.pictureUrl}
      timeStamp={comment.timeStamp}
      comment={comment.comment}
      numLikes={comment.numLikes}
    />
  )

  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <View style={styles.profileInfoContainer}>
          <Image source={require('../assets/images/defaultprofile.png')} style={styles.profileImageContainer} />
          <View style={styles.profileInfoTextContainer}>
            <Text style={styles.profileNameText}>
              {username}
            </Text>
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
        <TouchableOpacity onPress={() => navigation.navigate('Show')}>
          <EmbeddedPost
            name={event.name}
            numStars={event.numStars}
            price={event.price}
            tags={event.tags}
            venue={event.venue}
            dates={event.dates}
            creatives={event.creatives}
            description={event.description}
          />
        </TouchableOpacity>
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
        {commentList}
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
