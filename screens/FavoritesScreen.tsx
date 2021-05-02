import * as React from 'react';

import { Text, View } from '../components/Themed';

import styles from '../constants/Styles';

import EditScreenInfo from '../components/EditScreenInfo';

export default function FavoritesScreen() {
  return (
    <View style={styles.card}>
      <Text style={styles.titleText}>Favorites Screen</Text>
      <EditScreenInfo path="/screens/FavoritesScreen.tsx" />
    </View>
  );
}