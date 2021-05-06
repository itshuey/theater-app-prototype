import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import * as firebase from 'firebase';
import { follow, unfollow } from '../api/firebaseMethods';

import styles from '../styles/index';
import { Text, View } from '../components/Themed';
import { useUser, useUserUpdate } from '../hooks/UserContext';

import ShowList from '../components/ShowList';
import ProfileBox from '../components/ProfileBox';
import { EventPostData } from '../data/eventpostdata';

export default function ProfileScreen({ route, navigation }) {

  const { userID } = route.params;
  const updateUserInfo = useUserUpdate();
  const currentUser = useUser();
  const currentUserID = currentUser.id;
  const currentUserFollowing = currentUser.following;
  const isCurrentUserFollowing = currentUserFollowing.includes(userID);

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
      .doc(userID)
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
  })

  useEffect(() => {
    async function getProfileImage(){
      await firebase
      .storage()
      .ref('/' + userID + '.jpg')
      .getDownloadURL()
      .then((url) => {
        setProfileImageURL(url);
      })
      .catch((e) => console.log('getting downloadURL of image error => ', e));
    }
    getProfileImage();
  })

  function handleFollow() {
    updateUserInfo({ following: userID });
    follow(currentUserID, userID);
  }

  function handleUnfollow() {
    updateUserInfo({ following: currentUserFollowing.filter((id) => id !== userID) });
    unfollow(currentUserID, userID);
  }

  const profile = profileImageURL ? {uri: profileImageURL} : require('../assets/images/default.png')

  return (
    <ScrollView style={styles.fullView}>
      <View style={styles.navView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => isCurrentUserFollowing ? handleUnfollow() : handleFollow()}>
          {currentUserID !== userID &&
          <View style={styles.icon}>
            <Ionicons
              name={isCurrentUserFollowing ? "md-person-remove-outline" : "md-person-add-outline"}
              size={24}
              color="black" />
          </View>}
        </TouchableOpacity>
      </View>
      <View style={styles.contentView}>
        <ProfileBox
          profile={profile}
          firstName={firstName}
          lastName={lastName}
          handle={handle}
          numFollowers={numFollowers}
          numFollowing={numFollowing}
          bio={bio}
        />
        <ShowList
          title={'Favorited Shows'}
          shows={EventPostData}
        />
        <ShowList
          title={'Watched Shows'}
          shows={EventPostData}
        />
        </View>
    </ScrollView>
  );
}