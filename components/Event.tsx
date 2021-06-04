import React, { useState, useEffect } from 'react';
import { Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { EventPost } from '../data/eventpostdata';
import styles from '../styles/index';

import Tags from './Tags';
import { pullShow } from '../api/firebaseMethods';

export default function Event({ navigation, route, show }){
  const {
    name,
    dates,
  } = show;

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Show', { show: show })}>
    <View style={styles.dynamicView}>
    <View style={styles.smallCard}>
        <View style={styles.contentViewLeft}>
        <ImageBackground source={require('../assets/images/cow.jpg')} style={styles.fullImage} />
        </View>
    </View>
    <View style={styles.smallCardText}>
    <View style={styles.dynamicView}>
      <Text style={styles.subtitleText}>{name}</Text>
      <Text style={styles.bodyText}>{dates[0]} - {dates[1]}</Text>
    </View>
    </View>
    </View>
    </TouchableOpacity>
  );
}