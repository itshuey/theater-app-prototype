import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet } from 'react-native';

import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { Text, View } from './Themed';

export default function LogoHeader() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>
        Brava
      </Text>
      <Ionicons style={styles.searchIcon} size={20} name='search' color='gray'/>
    </View>
  );
}

const colorScheme='light';

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 35,
    paddingRight: 35,
    backgroundColor: Colors[colorScheme].backgroundColor,
    width: Layout.window.width,
  },
  titleText: {
    fontFamily: 'wired',
    fontSize: 24,
    color: 'black',
  },
  searchIcon: {
    paddingTop: 2,
  }
});