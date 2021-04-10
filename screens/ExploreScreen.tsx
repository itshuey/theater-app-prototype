import * as React from 'react';
import { StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

import ExplorePost from '../components/ExplorePost.tsx';
import { Text, View } from '../components/Themed';
import { EventPost, EventPostData } from '../data/eventpostdata'

export default function ExploreScreen({ navigation }) {
  return (
    <>
    <FlatList style={styles.container}
      data={EventPostData}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Show')}>
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
          />
        </TouchableOpacity>
      )}
    />

    <Image
      source={require('../assets/images/createpost.png')}
      style={styles.createImage}
    />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 2,
    backgroundColor: '#f2f6fc'
  },
  createImage: {
    height: 40,
    width: 40,
    position: "absolute",
    bottom: 20,
    right: 20,
  }
});
