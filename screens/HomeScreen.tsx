import * as React from 'react';

import styles from '../styles/index';
import { Text, View } from '../components/Themed';

import Home from '../components/Home';

export default function HomeScreen() {
  return (
    <View style={styles.card}>
      <Text style={styles.titleText}>Home Screen</Text>
      <Home path="/screens/HomeScreen.tsx" />
    </View>
  );
}
