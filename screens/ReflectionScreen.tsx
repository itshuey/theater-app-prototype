import * as React from 'react';
import { StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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
    <ScrollView style={styles.container}>
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.navContainerActions}>
          <Ionicons name="paper-plane-outline" size={24} color="black" style={{marginHorizontal: 10}}/>
          <Ionicons name="heart-outline" size={24} color="black" />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.reviewHeaderText}>Reflection</Text>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.descriptionText}>{review}</Text>

        <View style={styles.authorInfoContainer}>
          <Text>About the author:</Text>
          <Text>{name}</Text>
        </View>
        {commentList}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  navContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  navContainerActions: {
    flexDirection: 'row',
  },
  contentContainer: {
    paddingTop: 10,
    backgroundColor: 'transparent',
    marginHorizontal: 30,
  },
  reviewHeaderText: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  imageContainer: {
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    height: 160,
    flex: 2,
  },
  titleText: {
    fontSize: 24,
  },
  descriptionText: {
    color: 'gray',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 40,
  },
  authorInfoContainer: {
    borderTopColor: 'lightgray',
    borderTopWidth: 0.5,
    marginVertical: 20,
  }
});
