import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import * as firebase from 'firebase';
import { pullFollowing } from '../api/firebaseMethods';

import styles from '../styles/index';
import { Text, View } from '../components/Themed';
import FollowItem from '../components/FollowItem';
import LoadingScreen from './LoadingScreen.js';
import { ReviewPost, ReviewPostData } from '../data/reviewpostdata';

export default function FollowingScreen({ route, navigation }) {
  const [loading, setLoading] = React.useState(true)
  const { uid } = route.params;
  const [followList, setFollowList] = useState([])

  useEffect(() => {
    pullFollowing(uid, setFollowList);
    if (loading) setLoading(false);
  }, []);

  if (loading) return <LoadingScreen />

  return (
    <View style={styles.fullView}>
      { followList == []
        ? <Text> Following nobody! </Text>
        : <FlatList
        data={followList}
        renderItem={({ item, index }) => (
          <FollowItem
            uid={uid}
            fid={item}
            navigation={navigation}
          />
        )}
        keyExtractor={(item, index) => item}
      />
      }
    </View>
  );
}