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
import { pullShows } from '../api/firebaseMethods';

export default function ExploreScreen({ navigation, route }) {
  const [shows, setShows] = useState<any[]>([])

  useEffect(() => {
    pullShows(setShows);
  }, [])

  return (
    <ScrollView
      style={styles.fullView}
      showsVerticalScrollIndicator={false}
    >
    <View style={styles.titleView}>
    <Text style={styles.headlineText}>Picks for you</Text>
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
    <Text style={styles.headlineText}>What's New</Text>
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
        />
      )}
    />
    </View>
    <View style={styles.titleView}>
    <Text style={styles.headlineText}>What's New</Text>
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
        />
      )}
    />
    </View>
{/*
    <TouchableOpacity onPress={() => navigation.navigate('Create Event')}>
      <Image
        source={require('../assets/images/createpost.png')}
        style={styles.button}
      />
    </TouchableOpacity>
*/}
    </ScrollView>
  );
}