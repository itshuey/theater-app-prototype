import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import FollowButton from '../components/FollowButton';

import * as firebase from 'firebase';
import { useUser } from '../hooks/UserContext';

import { FollowData } from '../data/followdata';

export default function FollowItem({navigation, uid, fid}) {
  const currentUser = useUser();
  const currentUserUID = currentUser.id;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [handle, setHandle] = useState('');
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

  const handleName = () => {
    firstName != '' || lastName != '' ? styles.titleText : {display: 'none'}
  };

  return (
    <View style={styles.bigOne}>
      <Image source={FollowData[fid].image} style={styles.imageContainer} />
      <View style={styles.followBlock}>
        <View style={styles.leftHalf}>
          <Text style={handleName}>{FollowData[fid].firstName} {FollowData[fid].lastName}</Text>
          <Text style={{color:'gray'}}>@{FollowData[fid].handle}</Text>
        </View>
        <FollowButton navigation={navigation} uid={uid} fid={fid}/>
      </View>
    </View>
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
