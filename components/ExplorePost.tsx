import React, { useState } from 'react';
import { Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { EventPost } from '../data/eventpostdata';
import styles from '../styles/index';

import Tags from './Tags';

export default function ExplorePost({ navigation, route, showID, show, user, saved, watched }){
  const [style, setStyle] = React.useState([styles.ghost, styles.none])

  const {
    name,
    dates,
    tags,
    description
  } = show;

  const onTap = () => {
    style[0] === styles.ghost
    ? setStyle([styles.ghost2, styles.bodyView])
    : setStyle([styles.ghost, styles.none])
  };

  return (
    <View style={styles.card}>
        <View style={styles.contentViewLeft}>
        <ImageBackground source={require('../assets/images/cow.jpg')} style={styles.fullImageBack}>
          <TouchableOpacity onPress={onTap}>
          <View style={style[0]}>
            <View style={styles.itemView}>
              <Text style={[styles.cardTitleText]}>{name}</Text>
              <Text style={styles.cardSubtitleText}>{dates[0]} - {dates[1]}</Text>
            </View>
            <Tags tags={tags} />
            <View style={style[1]}>
              <Text style={styles.bodyText}>{description}</Text>
            </View>
          </View>
          </TouchableOpacity>
        </ImageBackground>
        </View>
    </View>
  );
}