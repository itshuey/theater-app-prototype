import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Comment from './Comment';

export default function CommentList({title, comments}) {
  return (
    <View style={styles.infoBlockContainer}>
      <Text style={styles.infoBlockHeaderText}>{title}</Text>
      {comments.map((comment) =>
        <Comment
          id={comment.id}
          key={comment.id}
          name={comment.name}
          pictureUrl={comment.pictureUrl}
          timeStamp={comment.timeStamp}
          comment={comment.comment}
          numLikes={comment.numLikes}
          review={true}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  infoBlockContainer: {
    marginBottom: 20,
    marginTop: 5
  },
  infoBlockHeaderText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
});
