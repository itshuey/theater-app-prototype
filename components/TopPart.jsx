import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import * as firebase from 'firebase';
import { useUser } from '../hooks/UserContext';

import styles from '../styles/index';

import DefaultImg from '../assets/images/defaultprofile.png'
import Tags from '../components/Tags';

const height = StatusBar.currentHeight

export default function TopPart() {
  const currentUser = useUser();
  const currentUserUID = currentUser.id;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [handle, setHandle] = useState('');
  const [bio, setBio] = useState('');
  const [numFollowers, setNumFollowers] = useState(0);
  const [numFollowing, setNumFollowing] = useState(0);
  const [profileImageURL, setProfileImageURL] = useState('');

  useEffect(() => {
    async function getUserInfo(){
      let doc = await firebase
      .firestore()
      .collection('users')
      .doc(currentUserUID)
      .get();

      if (!doc.exists){
        Alert.alert('No user data found!')
      } else {
        let dataObj = doc.data();
        setFirstName(dataObj.firstName)
        setLastName(dataObj.lastName)
        setHandle(dataObj.handle)
        setBio(dataObj.bio)
        setNumFollowers(dataObj.numFollowers)
        setNumFollowing(dataObj.numFollowing)
      }
    }
    getUserInfo();
  });

  useEffect(() => {
    async function getProfileImage(){
      await firebase
      .storage()
      .ref('/' + currentUserUID + '.jpg')
      .getDownloadURL()
      .then((url) => {
        setProfileImageURL(url);
      })
      .catch((e) => console.log('getting downloadURL of image error => ', e));
    }
    getProfileImage();
  }, [currentUser]);

  const profile = profileImageURL ? {uri: profileImageURL} : require('../assets/images/default.png');

  return (
    <View style={styles.titleView}>
      <View style={inline.titleContainer}>
        <Image source={profile} style={inline.imageContainer} />
        <View style={inline.contain}>
        <Text multiline={true} style={styles.titleText}>Your favorite genres are:</Text>
        </View>
      </View>
      <Tags tags={['experimental', 'musical', 'documentary']} />
    </View>
  );
}

const inline = StyleSheet.create({
  titleContainer: {
    marginTop: 100,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  imageContainer: {
    borderRadius: 40,
    marginRight: 20,
    height: 70,
    width: 70,
  },
  contain: {
    flex: 1,
  }
})