import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import * as firebase from 'firebase';

import styles from '../styles/index';
import { Text, View } from '../components/Themed';
import FollowItem from '../components/FollowItem';
import LoadingScreen from './LoadingScreen.js';
import { ReviewPost, ReviewPostData } from '../data/reviewpostdata';

export default function FollowersScreen({ navigation, uid }) {
  var followList;

  useEffect(() => {
    async function getData(){
      let doc = await firebase
      .firestore()
      .collection('followers')
      .doc(uid)
      .get();

      if (!doc.exists){
        Alert.alert('No user data found!')
      } else {
        followList = doc.data();
        console.log('SOMETHINGSOMETHINGEJIALEJWAILWJF' + followList);
      }
    }
    getData();
  });

  return (
    <View style={styles.fullView}>
      { followList === undefined
        ? <Text> No followers :() </Text>
        : <FlatList
        data={followList}
        renderItem={({ item, index }) => (
          <FollowItem
            uid={uid}
            fid={item}
            navigation={navigation}
          />
        )}
      />
      }
    </View>
  );
}