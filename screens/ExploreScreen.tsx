import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ExplorePost from '../components/ExplorePost.tsx';
import { Text, View } from '../components/Themed';

export default function ExploreScreen() {
  return (
    <FlatList style={styles.container}
      data={[ {d: "a"}, {d: "a"}, {d: "a"}]}
      renderItem={({ item, index }) => (
        <ExplorePost props="z" />
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
