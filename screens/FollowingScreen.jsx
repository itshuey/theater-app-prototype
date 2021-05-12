import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import * as firebase from 'firebase';

import styles from '../styles/index';
import { Text, View } from '../components/Themed';
import FollowItem from '../components/FollowItem';
import LoadingScreen from './LoadingScreen.js';
import { ReviewPost, ReviewPostData } from '../data/reviewpostdata';

export default function FollowScreen({ navigation, uid }) {
  var followList;
  const tempData = [0,1,2];

  useEffect(() => {
    async function getData(){
      let doc = await firebase
      .firestore()
      .collection('following')
      .doc(uid)
      .get();

      if (!doc.exists){
        Alert.alert('No user data found!')
      } else {
        followList = doc.data();
      }
    }
    getData();
  });

  return (
    <View style={styles.fullView}>
      { tempData === undefined
        ? <Text> Following nobody! </Text>
        : <FlatList
        data={tempData}
        renderItem={({ item, index }) => (
          <FollowItem
            uid={uid}
            fid={index}
            navigation={navigation}
          />
        )}
      />
      }
    </View>
  );
}