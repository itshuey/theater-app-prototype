import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import * as firebase from 'firebase';
import { follow, unfollow } from '../api/firebaseMethods'

import styles from '../constants/Styles';
import { Text, View } from '../components/Themed';
import { useUser, useUserUpdate } from '../hooks/UserContext';

import SearchBar from '../components/SearchBar';

export default function MessagesScreen({ navigation }) {
  const [users, setUsers] = useState([]);
  const currentUserInfo = useUser();
  const updateUserInfo = useUserUpdate();
  const currentUserFollowing = currentUserInfo.following;
  const currentUserID = currentUserInfo.id;

  const fetchUsers = (search) => {
    firebase.firestore().collection('users')
    .where('firstName','>=',search)
    .get()
    .then((querySnapshot) => {
      let users = querySnapshot.docs.map(doc => {
        const id = doc.id;
        const data = doc.data();
        return { id, ...data }
      })
      setUsers(users);
    })
  }

  function handleFollow(user, userToFollow) {
    updateUserInfo({ following: userToFollow });
    follow(user, userToFollow);
  }

  const getUserProfile = (user) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Profile', { userID: user.id })}>
        <View style={styles.userItemContainer}>
          <View>
            <Text style={styles.userName}>{user.firstName} {user.lastName}</Text>
            <Text style={styles.userHandle}>@{user.handle}</Text>
          </View>
        { (!currentUserFollowing.includes(user.id) && user.id !== currentUserID) &&
          <TouchableOpacity onPress={() => handleFollow(currentUserID, user.id)}>
            <Ionicons name="ios-add-circle-outline" size={24} color="black" />
          </TouchableOpacity>
        }
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SearchBar
      users={users}
      onTextUpdate={fetchUsers}
      getUserProfile={getUserProfile}
    />
  );
}
