import * as React from 'react';
import { FlatList, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../styles/index';
import { Text, View } from '../components/Themed';
import { EventPost, EventPostData } from '../data/eventpostdata'

import ExplorePost from '../components/ExplorePost';

export default function ExploreScreen({ navigation }) {
  return (
    <>
    <FlatList style={styles.card}
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
    <TouchableOpacity onPress={() => navigation.navigate('Create Event')}>
      <Image
        source={require('../assets/images/createpost.png')}
        style={styles.image}
      />
    </TouchableOpacity>
    </>
  );
}