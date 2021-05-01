import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import styles from '../constants/Styles';

export default function LoadingScreen() {
  return (
    <View style={styles.stdContainer}>
      <ActivityIndicator size='large' />
    </View>
  );
}