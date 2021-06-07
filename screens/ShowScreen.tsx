import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from '../styles/index';
import { Text, View } from '../components/Themed';
import { EventPostData } from '../data/eventpostdata';

import Comment from '../components/Comment';
import ShareIcons from '../components/ShareIcons';
import Tags from '../components/Tags';
import PlayInfo from '../components/PlayInfo';
import BlockText from '../components/BlockText';
import TicketButton from '../components/TicketButton';
import CastList from '../components/CastList';
import CommentList from '../components/CommentList';
import AccessibilityList from '../components/AccessibilityList';
import SaveButton from '../components/SaveButton';
import WatchButton from '../components/WatchButton';

import * as firebase from 'firebase';

export default function ShowScreen({ navigation, route }) {
  const { showID, show, user, isSaved, isWatched } = route.params;

  const tags = show.tags;
  const title = show.name;
  const dates = show.dates;
  const venue = show.venueName;
  const description = show.description;
  const cast = show.cast;
  const price = show.ticketPrice;

  const names = cast.map(c => c.name);
  const roles = cast.map(c => c.role);

  return (
    <View style={styles.fullView}>
    <ScrollView style={styles.fullView}>
      <SafeAreaView style={styles.fullView}>
      <View style={styles.itemView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <ShareIcons />
      </View>
      <View style={styles.contentView}>
        <PlayInfo
          title={title}
          venue={venue}
          dates={dates}
          runtime={147}
          image={require('../assets/images/cow.jpg')}
          price={price}
          description={description}
        />
        <View style={styles.titleView}>
        <CastList
          title={'Cast'}
          names={names}
          roles={roles}
          images={[require('../assets/images/cow.jpg'), require('../assets/images/cow.jpg'), require('../assets/images/cow.jpg'), require('../assets/images/cow.jpg')]}
        />
        </View>
        <View style={styles.titleView}>
        <AccessibilityList title={'Accessibility'} items={['Wheelchair Accessible', 'Penguins']} />
        </View>
        <View style={styles.titleView}>
        </View>
      </View>
      </SafeAreaView>
    </ScrollView>
    <View style={styles.bottomButton}>
        <WatchButton user={user} show={showID} isWatched={isWatched} />
      </View>
      <View style={styles.bottomButton2}>
        <SaveButton user={user} show={showID} isSaved={isSaved} />
    </View>
    </View>
  );
}