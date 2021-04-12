import React, { useEffect, useState } from 'react';
import { StyleSheet, Alert, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import { loggingOut } from '../api/firebaseMethods';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { MonoText } from '../components/StyledText';

export default function MeScreen({ navigation }) {
  let currentUserUID = firebase.auth().currentUser.uid;
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
    getUserInfo();
    getProfileImage();
  })


  const handlePress = () => {
    loggingOut();
  };

  const profile = profileImageURL ? {uri: profileImageURL} : require('../assets/images/default.png')

  return (
    <ScrollView style={styles.container}>
    <Ionicons name="flower-outline" style={styles.edit} size={24} color="black" />
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
        <TouchableOpacity onPress={() => handlePress()}>
          <Text> Log Out </Text>
        </TouchableOpacity>
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
  edit: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 2,
  }
});