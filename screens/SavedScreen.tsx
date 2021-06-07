import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import * as firebase from 'firebase';
import { pullSaved, pullWatched } from '../api/firebaseMethods';

import styles from '../styles/index';
import { Text, View } from '../components/Themed';
import FeedPost from '../components/FeedPost';
import LoadingScreen from './LoadingScreen.js';
import { ReviewPost, ReviewPostData } from '../data/reviewpostdata';
import Event from '../components/Event';

import { EventPostData } from '../data/eventpostdata';

export default function SavedScreen({ navigation, route }) {
  const [loading, setLoading] = React.useState(true)
  const [saved, setSaved] = useState<any[]>([]);
  const [watched, setWatched] = useState<any[]>([]);
  const currentUserUID = firebase.auth().currentUser.uid;

  const data = { "posts": ReviewPostData };

  useEffect(() => {
    pullSaved(currentUserUID, setSaved)
    pullWatched(currentUserUID,setWatched);
    if (loading) setLoading(false);
  });

  return (
    <View style={styles.fullViewCenter}>
      <FlatList style={[styles.fullView, {marginTop: 40}]}
      data={saved}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={styles.columnView}
      renderItem={({ item, index }) => (
        <Event
          navigation={navigation}
          route={route}
          showID={item.id}
          show={item}
          user={currentUserUID}
          saved={saved}
          watched={watched}
        />
      )}
    />
    </View>
  );
}