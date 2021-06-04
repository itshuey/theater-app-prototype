import * as React from 'react';
import { FlatList } from 'react-native';

import * as firebase from 'firebase';
import { pullFollowPosts } from '../api/firebaseMethods';

import styles from '../styles/index';
import { Text, View } from '../components/Themed';
import FeedPost from '../components/FeedPost';
import LoadingScreen from './LoadingScreen.js';
import { ReviewPost, ReviewPostData } from '../data/reviewpostdata';

export default function FollowScreen({ navigation, route }) {
  const [loading, setLoading] = React.useState(true)
  const [feed, setFeed] = React.useState(null)
  const currentUserUID = firebase.auth().currentUser.uid;

  const data = { "posts": ReviewPostData };

  React.useEffect(() => {
    if (loading) setLoading(false);
    pullFollowPosts(currentUserUID, setFeed);
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <View style={styles.fullView}>
      <FlatList
        data={feed}
        renderItem={({ item, index }) => (
          <FeedPost
            id={item.id}
            navigation={navigation}
            post={item}
          />
        )}
      />
    </View>
  );
}