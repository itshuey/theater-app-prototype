import React, { useEffect, useState } from 'react';
import { ScrollView, Alert, FlatList, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import * as firebase from 'firebase';
import { loggingOut } from '../api/firebaseMethods';

import styles from '../styles/index';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { MonoText } from '../components/StyledText';
import { useUser } from '../hooks/UserContext';

import ShowList from '../components/ShowList';
import ProfileBox from '../components/ProfileBox';
import { EventPostData } from '../data/eventpostdata';
import EventSmall from '../components/EventSmall';

export default function MeScreen({ route, navigation }) {

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
    <ScrollView showsVerticalScrollIndicator={false} style={styles.fullView}>
      <SafeAreaView style={styles.fullView}>
        <View style={styles.itemView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Create Event")}>
            <Ionicons name="flower-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Edit Profile",
              { uid: currentUserUID, currentProfileURI: profileImageURL, currentName: firstName, currentBio: bio })}>
            <Ionicons name="flower-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.itemView}>
        <ProfileBox
          navigation={navigation}
          route={route}
          profile={profile}
          firstName={firstName}
          lastName={lastName}
          handle={handle}
          numFollowers={numFollowers}
          numFollowing={numFollowing}
          bio={bio}
          currentUserUID={currentUserUID}
        />
        </View>
      <View style={styles.titleView}>
      <Text style={styles.headlineText}>Saved Shows</Text>
      </View>
      <FlatList style={styles.dynamicView}
        data={EventPostData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Show', { show: item })}>
            <EventSmall
              name={item.name}
              dates={item.dates}
              image={item.image}
            />
          </TouchableOpacity>
        )}
      />
      <View style={styles.titleView}>
      <Text style={styles.headlineText}>Watched Shows</Text>
      </View>
      <FlatList style={styles.dynamicView}
        data={EventPostData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Show', { show: item })}>
            <EventSmall
              name={item.name}
              dates={item.dates}
              image={item.image}
            />
          </TouchableOpacity>
        )}
      />
        <TouchableOpacity style={styles.button} onPress={() => loggingOut()}>
          <Text> Log Out </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}