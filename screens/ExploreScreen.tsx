import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../styles/index';
import { Text, View } from '../components/Themed';
import { EventPost, EventPostData } from '../data/eventpostdata'

import ExplorePost from '../components/ExplorePost';
import ShowList from '../components/ShowList';
import Event from '../components/Event';

import { normalize } from '../styles/methods';
import { pullShows, pullWatched, pullSaved } from '../api/firebaseMethods';
import { useUser } from '../hooks/UserContext';

export default function ExploreScreen({ navigation, route }) {
  const currentUser = useUser();
  const currentUserUID = currentUser.id;

  const [shows, setShows] = useState<any[]>([])
  const [watched, setWatched] = useState<any[]>([]);
  const [saved, setSaved] = useState<any[]>([]);

  useEffect(() => {
    pullShows(setShows);
  }, [])

  useEffect(() => {
    pullSaved(currentUserUID, setSaved);
    pullWatched(currentUserUID, setWatched);
  })

  return (
    <ScrollView
      style={styles.fullView}
      showsVerticalScrollIndicator={false}
    >
    <View style={styles.titleView}>
    <Text style={styles.headlineText}>Picks For You</Text>
    </View>
    <FlatList styles={styles.fullView}
      data={shows}
      horizontal={true}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <ExplorePost
          navigation={navigation}
          route={route}
          id={item.id}
          show={item}
        />
      )}
    />
    <View style={styles.titleView}>
    <Text style={styles.headlineText}>Playing Now</Text>
    </View>
    <View style={{marginHorizontal: normalize(10)}}>
    <FlatList styles={styles.fullView}
      data={shows}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <Event
          navigation={navigation}
          route={route}
          show={item}
          showID={item.id}
          user={currentUserUID}
          saved={saved}
          watched={watched}
        />
      )}
    />
    </View>
    <View style={styles.titleView}>
    <Text style={styles.headlineText}>Coming Soon</Text>
    </View>
    <View style={{marginHorizontal: normalize(10)}}>
    <FlatList styles={styles.fullView}
      data={shows}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <Event
          navigation={navigation}
          route={route}
          show={item}
          showID={item.id}
          user={currentUserUID}
          saved={saved}
          watched={watched}
        />
      )}
    />
    </View>
    </ScrollView>
  );
}