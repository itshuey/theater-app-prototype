import React from 'react';
import { Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { EventPost } from '../data/eventpostdata';
import styles from '../styles/index';

import Tags from './Tags';

export default function Event({ name, dates, image }: EventPost){

  return (
    <View style={styles.dynamicView}>
    <View style={styles.smallCard}>
        <View style={styles.contentViewLeft}>
        <ImageBackground source={image} style={styles.fullImage} />
        </View>
    </View>
    <View style={styles.smallCardText}>
    <View style={styles.dynamicView}>
      <Text style={styles.subtitleText}>{name}</Text>
      <Text style={styles.bodyText}>{dates[0]} - {dates[1]}</Text>
    </View>
    </View>
    </View>
  );
}