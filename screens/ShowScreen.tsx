import * as React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from '../constants/Styles';
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

export default function ShowScreen({ navigation }) {

  const show = EventPostData[1];
  const tags = show.tags;
  const title = show.name;
  const dates = show.dates;
  const venue = show.venue;
  const description = show.description;
  const comments = show.comments;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <ShareIcons />
      </View>
      <View style={styles.contentContainer}>
        <Tags tags={['Scary', 'Indoor']} />
        <PlayInfo
          title={title}
          venue={venue}
          dates={['Apr 2', 'Sept 10']}
          runtime={147}
          image={require('../assets/images/default.png')}
        />
        <BlockText title={'About 🔮'} text={description} />
        <TicketButton price={25} />
        <CastList
          title={'Cast & Creatives 🌟'}
          names={['Eva Wang', 'Huey Sun', 'Jaden Kim', 'Rachel Yang']}
          roles={['Director', 'Playwright', 'Actor', 'Actor']}
        />
        <AccessibilityList title={'Accessibility'} items={['Wheelchair Accessible', 'Penguins']} />
        <CommentList title={'Reflections'} comments={comments} />
      </View>
    </ScrollView>
  );
}