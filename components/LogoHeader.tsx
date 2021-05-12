import React, { useEffect, useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { Text, View } from './Themed';

import * as firebase from 'firebase';
import { useUser } from '../hooks/UserContext';

import DefaultImg from '../assets/images/defaultprofile.png'

export default function LogoHeader( props ) {
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

  const colorScheme = useColorScheme();

  return (
    <View style={styles.titleContainer}>
      <View style={styles.titleTextContainer}>
        <Image source={profile} style={styles.imageContainer} />
      </View>
      <Ionicons style={styles.searchIcon} size={20} name='notifications-outline' color='gray'/>
    </View>
  );
}

const colorScheme='light';

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    backgroundColor: Colors[colorScheme].header,
    width: Layout.window.width,
  },
  titleTextContainer:{
    backgroundColor: Colors[colorScheme].header,
  },
  titleText: {
    fontFamily: 'wired',
    fontSize: 24,
    color: 'black',
    marginBottom: -5,
  },
  screenText: {
    fontSize: 14,
    color: 'gray',
  },
  searchIcon: {
    paddingTop: 8,
  },
  imageContainer: {
    borderRadius:20,
    height: 40,
    width: 40,
  },
});