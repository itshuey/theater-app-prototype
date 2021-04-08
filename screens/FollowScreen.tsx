import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import FeedPost from '../components/FeedPost.tsx';
import { Text, View } from '../components/Themed';
import { ReviewPost, ReviewPostData } from '../data/reviewpostdata'

export default function FollowScreen() {
  return (
    <FlatList style={styles.container}
      data={ReviewPostData}
      renderItem={({ item, index }) => (
        <FeedPost
          id={item.id}
          username={item.username}
          pictureUrl={item.pictureUrl}
          timeStamp={item.timeStamp}
          review={item.review}
          event={item.event}
          numLikes={item.numLikes}
          numComments={item.numComments}
          comments={item.comments}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 2,
    backgroundColor: '#fff8f7'
  },
});
