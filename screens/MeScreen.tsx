import React, { useEffect, useState } from 'react';
import { ScrollView, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import * as firebase from 'firebase';
import { loggingOut } from '../api/firebaseMethods';

import styles from '../constants/Styles';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { MonoText } from '../components/StyledText';
import { useUser } from '../hooks/UserContext';

import ShowList from '../components/ShowList';
import ProfileBox from '../components/ProfileBox';

export default function MeScreen({ navigation }) {

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
    <ScrollView style={styles.stdContainer}>
      <View style={styles.contentContainer}>
        <TouchableOpacity
          style={styles.editContainer}
          onPress={() => navigation.navigate("Edit Profile",
            { id: currentUserUID, currentProfileURI: profileImageURL, currentName: firstName, currentBio: bio })}>
          <Ionicons name="flower-outline" size={24} color="black" />
        </TouchableOpacity>
        <ProfileBox
          profile={profile}
          firstName={firstName}
          lastName={lastName}
          handle={handle}
          numFollowers={numFollowers}
          numFollowing={numFollowing}
          bio={bio}
        />
        <ShowList title={'Favorited Shows'} shows={[require('../assets/images/default.png'), require('../assets/images/default.png')]}/>
        <ShowList title={'Watched Shows'} shows={[require('../assets/images/default.png'), require('../assets/images/default.png'), require('../assets/images/default.png')]}/>
        <TouchableOpacity onPress={() => loggingOut()}>
          <Text> Log Out </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}