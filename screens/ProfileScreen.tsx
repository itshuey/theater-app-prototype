import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';
import * as firebase from 'firebase';
import { useUser, useUserUpdate } from '../hooks/UserContext';
import { follow, unfollow } from '../api/firebaseMethods';

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
    <ScrollView style={styles.container}>
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => isCurrentUserFollowing ? handleUnfollow() : handleFollow()}>
          <View style={styles.navContainerActions}>
            <Ionicons
              name={isCurrentUserFollowing ? "md-person-remove-outline" : "md-person-add-outline"}
              size={24}
              color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Image source={profile} style={styles.imageContainer} />
          <View style={styles.titleInfoContainer}>
            <Text style={styles.titleText}>{firstName} {lastName}</Text>
            <Text style={styles.handleText}>@{handle}</Text>
            <View style={styles.followInfoContainer}>
              <View style={styles.followContainer}>
                <Text style={styles.followNumberText}>{numFollowers} </Text>
                <Text style={styles.followText}>followers</Text>
              </View>
              <View style={styles.followContainer}>
                <Text style={styles.followNumberText}>{numFollowing} </Text>
                <Text style={styles.followText}>following</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutText}>
            {bio}
          </Text>
        </View>

        <View style={styles.sectionInfoContainer}>
          <Text style={styles.containerTitleText}>
            Reflections
          </Text>
          <View style={styles.savedContainer}>
            <Image source={require('../assets/images/default.png')} style={styles.savedImageContainer} />
            <Image source={require('../assets/images/default.png')} style={styles.savedImageContainer} />
            <Image source={require('../assets/images/default.png')} style={styles.savedImageContainer} />
          </View>
        </View>
        <View style={styles.sectionInfoContainer}>
          <Text style={styles.containerTitleText}>
            Saved Shows
          </Text>
          <View style={styles.savedContainer}>
            <Image source={require('../assets/images/default.png')} style={styles.savedImageContainer} />
          </View>
        </View>
        <View style={styles.sectionInfoContainer}>
          <Text style={styles.containerTitleText}>
            Watched Shows
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  navContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  navContainerActions: {
    flexDirection: 'row',
  },
  contentContainer: {
    paddingTop: 10,
    backgroundColor: 'transparent',
    marginHorizontal: 30,
  },
  titleContainer: {
    marginTop: 30,
    marginBottom: 5,
    marginLeft: 10,
    flexDirection: 'row',
  },
  titleInfoContainer: {
    marginLeft: 15,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
  },
  handleText: {
    marginTop: 1,
    color: 'gray',
  },
  followInfoContainer: {
    marginTop: 8,
    flexDirection: 'row',
  },
  followContainer: {
    flexDirection: 'row',
    marginRight: 5,
  },
  followNumberText: {
    fontSize: 12,
    fontWeight: "600",
  },
  followText: {
    fontSize: 12,
  },
  imageContainer: {
    borderRadius:40,
    height: 70,
    width: 70,
  },
  aboutContainer: {
    borderRadius: 5,
    marginVertical: 20,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 30,
  },
  aboutText: {
    lineHeight: 19,
  },
  containerTitleText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  sectionInfoContainer: {
    marginBottom: 20
  },
  savedContainer: {
    flexDirection: 'row',
  },
  savedImageContainer: {
    marginTop: 10,
    borderRadius: 10,
    height: 100,
    width: 80,
    marginRight: 12,
  },

});
