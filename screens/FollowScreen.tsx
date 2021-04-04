import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ExplorePost from '../components/ExplorePost.tsx';
import AltExplorePost from '../components/AltExplorePost.tsx';
import EventPost from '../components/EventPost.tsx';
import CommentPost from '../components/CommentPost.tsx';
import StandardCommentPost from '../components/StandardCommentPost.tsx';
import { Text, View } from '../components/Themed';

const DATA = [
  {
    type: 'EventPost',
    backgroundColor: '#1c1c1c',
    contentColor: 'white',
  },
  {
    type: 'CommentPost',
    backgroundColor: '#e3e3e3',
    contentColor: 'black',
  },
  {
    type: 'StandardCommentPost',
    backgroundColor: '#e3e3e3',
    contentColor: 'black',
  },
  {
    type: 'EventPost',
    backgroundColor: '#30364a',
    contentColor: 'white',
  }
]

export default function FollowScreen() {

  const renderItem = ({ item }) => {
    if (item.type === 'EventPost') {
      return <EventPost backgroundColor={item.backgroundColor} contentColor={item.contentColor} />
    } else {
      return <StandardCommentPost backgroundColor={item.backgroundColor} contentColor={item.contentColor} />
    }
  };

  return (
    <FlatList style={styles.container}
      data={DATA}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
