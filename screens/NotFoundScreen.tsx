import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import styles from '../constants/Styles';
import { RootStackParamList } from '../types';

export default function NotFoundScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <View style={styles.stdContainer}>
      <Text style={styles.titleText}>This screen doesn't exist.</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}
