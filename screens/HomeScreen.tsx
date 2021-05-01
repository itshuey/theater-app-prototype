import * as React from 'react';

import styles from '../constants/Styles';
import { Text, View } from '../components/Themed';

import Home from '../components/Home.tsx';

export default function HomeScreen() {
  return (
    <View style={styles.card}>
      <Text style={styles.titleText}>Home Screen</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Home path="/screens/HomeScreen.tsx" />
    </View>
  );
}
