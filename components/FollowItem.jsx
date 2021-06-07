import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import FollowButton from '../components/FollowButton';

import * as firebase from 'firebase';
import { useUser } from '../hooks/UserContext';
import { getUserInfo } from '../api/firebaseMethods';

import { FollowData } from '../data/followdata';

export default function FollowItem({ navigation, route, uid, fid }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [handle, setHandle] = useState('');
  const [profileImageURL, setProfileImageURL] = useState('');

  useEffect(() => {
    getUserInfo(fid, setFirstName, setLastName, setHandle);
  }, []);

  useEffect(() => {
    async function getProfileImage(){
      await firebase
      .storage()
      .ref('/' + fid + '.jpg')
      .getDownloadURL()
      .then((url) => {
        setProfileImageURL(url);
      })
      .catch((e) => console.log('getting downloadURL of image error => ', e));
    }
    getProfileImage();
  }, [fid]);

  const profile = profileImageURL ? {uri: profileImageURL} : require('../assets/images/default.png');

  const handleName = () => {
    firstName != '' || lastName != '' ? styles.titleText : {display: 'none'}
  };

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Profile', {
      userID: uid,
    })}>
    <View style={styles.bigOne}>
      <Image source={profileImageURL} style={styles.imageContainer} />
      <View style={styles.followBlock}>
        <View style={styles.leftHalf}>
          <Text style={handleName}>{firstName} {lastName}</Text>
          <Text style={{color:'gray'}}>@{handle}</Text>
        </View>
        <FollowButton navigation={navigation} uid={uid} fid={fid}/>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bigOne: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
  },
  followBlock: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftHalf: {
    marginLeft: 10,
    alignContent: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
  },
  imageContainer: {
    borderRadius:40,
    height: 70,
    width: 70,
  },
});
