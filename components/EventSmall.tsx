import React, { useState, useEffect } from 'react';
import { Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { EventPost } from '../data/eventpostdata';
import styles from '../styles/index';

import { pullShow } from '../api/firebaseMethods';

import Tags from './Tags';

export default function EventSmall({ navigation, route, showID }){
  const [show, setShow] = useState<any>(undefined);

  useEffect(() => {
    pullShow(showID, setShow);
  }, []);

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Show', { show: show })}>
    <View style={styles.dynamicView}>
      <View style={styles.doubleSmallCard}>
        <View style={styles.contentViewLeft}>
        <ImageBackground source={require('../assets/images/cow.jpg')} style={styles.fullImage} />
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
}