import React, { useState } from 'react';
import { View, Picker, FlatList, Switch, Text, TextInput, Alert, ScrollView, Keyboard, StyleSheet, SafeAreaView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { createEvent } from '../api/firebaseMethods';
import { editProfile, uploadPicture } from '../api/firebaseMethods';
import { follow, unfollow, fetchUsers } from '../api/firebaseMethods'
import { useUser, useUserUpdate } from '../hooks/UserContext';

import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import DefaultImg from '../assets/images/defaultprofile.png'

import styles from '../constants/Styles';
import CastField from '../components/CastField';

export default function CastFieldList({title, cast, onTextUpdate}) {
  const [users, setUsers] = useState([]);
  const currentUserInfo = useUser();
  const updateUserInfo = useUserUpdate();
  const currentUserFollowing = currentUserInfo.following;
  const currentUserID = currentUserInfo.id;

  const updateUsers = async (search) => {
    const queryResult = await fetchUsers(search);
    setUsers(queryResult);
  }

  function handleFollow(user, userToFollow) {
    updateUserInfo({ following: userToFollow });
    follow(user, userToFollow);
  }

  const getUserProfile = (user) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Profile', { userID: user.id })}>
        <View style={styles.splitView}>
          <View style={styles.dynamicViewBorderless}>
            <Text style={styles.subtitleText}>{user.firstName} {user.lastName}</Text>
            <Text style={styles.subtitleText}>@{user.handle}</Text>
          </View>
        { (!currentUserFollowing.includes(user.id) && user.id !== currentUserID) &&
          <TouchableOpacity onPress={() => handleFollow(currentUserID, user.id)}>
            <Ionicons name="ios-add-circle-outline" size={24} color="black" />
          </TouchableOpacity>
        }
        </View>
      </TouchableOpacity>
    );
  };

  const castRet = cast.map((c, index) =>
    <CastField
      index={index}
      cast={c}
      onTextUpdate={onTextUpdate}
    />
  );

  return (
  <View style={styles.infoBlockContainer}>
    <Text style={styles.infoBlockHeaderText}>{title}</Text>
    <FlatList
      style={styles.userList}
      data={castRet}
      renderItem={({ item, index }) => getUserProfile(item)}
    />
  </View>
  );
}