import * as React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps'

import ExplorePost from '../components/ExplorePost.tsx';
import { Text, View } from '../components/Themed';

export default function FollowScreen() {
  return (
    <MapView
      style={{flex: 1}}
      region={
        {
          longitude: -73.935242,
          latitude: 40.730610,
          latitudeDelta: 0.15,
          longitudeDelta: 0.8
        }
      }
      showsUserLocation={true}
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
