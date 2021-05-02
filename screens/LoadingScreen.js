import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import styles from '../styles/index';

export default function LoadingScreen() {
  return (
    <View style={styles.safeView}>
      <ActivityIndicator size='large' />
    </View>
  );
}