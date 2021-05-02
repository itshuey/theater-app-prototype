import * as React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from '../styles/index';
import { ReviewPostData } from '../data/reviewpostdata';
import { Text, View } from '../components/Themed';

import Comment from '../components/Comment';

export default function ReflectionScreen({ navigation }) {

  const r = ReviewPostData[0];
  let review = r.review;
  let title = r.event.name;
  let name = r.username;
  const commentList = r.comments.map((comment) =>
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
    <ScrollView style={styles.fullView}>
      <View style={styles.navView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.icon}>
          <Ionicons name="paper-plane-outline" size={24} color="black" style={{marginHorizontal: 10}}/>
          <Ionicons name="heart-outline" size={24} color="black" />
        </View>
      </View>
      <View style={styles.contentView}>
        <Text style={styles.titleText}>Reflection</Text>
        <Text style={styles.subtitleText}>{title}</Text>
        <Text style={styles.bodyText}>{review}</Text>

        <View style={styles.bio}>
          <Text>About the author:</Text>
          <Text>{name}</Text>
        </View>
        {commentList}
      </View>
    </ScrollView>
  );
}