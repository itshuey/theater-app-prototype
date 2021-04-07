import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ExplorePost from '../components/ExplorePost.tsx';
import { Text, View } from '../components/Themed';
import { EventPost, EventPostData } from '../data/eventpostdata'

export default function ExploreScreen() {
  return (
    <FlatList style={styles.container}
      data={EventPostData}
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
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: 'lightgray'
  },
});
