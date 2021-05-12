import * as React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import * as firebase from 'firebase';

import styles from '../styles/index';
import { Text, View } from '../components/Themed';
import FeedPost from '../components/FeedPost';
import LoadingScreen from './LoadingScreen.js';
import { ReviewPost, ReviewPostData } from '../data/reviewpostdata';
import Event from '../components/Event';

import { EventPostData } from '../data/eventpostdata';

export default function WatchedScreen({ navigation }) {
  const [loading, setLoading] = React.useState(true)
  const [feed, setFeed] = React.useState(null)
  const currentUserUID = firebase.auth().currentUser.uid;

  const data = { "posts": ReviewPostData };

  return (
    <View style={styles.fullViewCenter}>
      <FlatList style={styles.fullView}
      data={EventPostData}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={styles.columnView}
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
  );
}