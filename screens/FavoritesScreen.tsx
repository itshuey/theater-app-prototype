import * as React from 'react';

import { Text, View } from '../components/Themed';

import styles from '../constants/Styles';

import EditScreenInfo from '../components/EditScreenInfo';

export default function FavoritesScreen() {
  return (
    <View style={styles.card}>
      <Text style={styles.titleText}>Favorites Screen</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/FavoritesScreen.tsx" />
    </View>
  );
}