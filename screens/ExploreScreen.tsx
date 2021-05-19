import * as React from 'react';
import { FlatList, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../styles/index';
import { Text, View } from '../components/Themed';
import { EventPost, EventPostData } from '../data/eventpostdata'

import ExplorePost from '../components/ExplorePost';
import ShowList from '../components/ShowList';
import Event from '../components/Event';

import { normalize } from '../styles/methods';

export default function ExploreScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.fullView}
      showsVerticalScrollIndicator={false}
    >
    <View style={styles.titleView}>
    <Text style={styles.headlineText}>Picks for you</Text>
    </View>
    <FlatList styles={styles.fullView}
      data={EventPostData}
      horizontal={true}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (

          <ExplorePost
            id={item.id}
            name={item.name}
            numStars={item.numStars}
            price={item.price}
            tags={item.tags}
            venue={item.venue}
            dates={item.dates}
            creatives={item.creatives}
            description={item.description}
            emoji={item.emoji}
            image={item.image}
          />

      )}
    />
    <View style={styles.titleView}>
    <Text style={styles.headlineText}>What's New</Text>
    </View>
    <View style={{marginHorizontal: normalize(10)}}>
    <FlatList styles={styles.fullView}
      data={EventPostData}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Show', { show: item })}>
          <Event
            name={item.name}
            dates={item.dates}
            image={item.image}
          />
        </TouchableOpacity>
      )}
    />
    </View>
    <View style={styles.titleView}>
    <Text style={styles.headlineText}>What's New</Text>
    </View>
    <View style={{marginHorizontal: normalize(10)}}>
    <FlatList styles={styles.fullView}
      data={EventPostData}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Show')}>
          <Event
            name={item.name}
            dates={item.dates}
            image={item.image}
          />
        </TouchableOpacity>
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