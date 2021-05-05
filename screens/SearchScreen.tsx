import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import * as firebase from 'firebase';
import { follow, unfollow } from '../api/firebaseMethods'

import styles from '../styles/index';
import { Text, View } from '../components/Themed';
import { useUser, useUserUpdate, fetchUsers, getUserProfile } from '../hooks/UserContext';

import SearchBar from '../components/SearchBar';

export default function MessagesScreen({ navigation }) {
  const [users, setUsers] = useState([]);
  const currentUserInfo = useUser();
  const updateUserInfo = useUserUpdate();
  const currentUserFollowing = currentUserInfo.following;
  const currentUserID = currentUserInfo.id;

  function handleFollow(user, userToFollow) {
    updateUserInfo({ following: userToFollow });
    follow(user, userToFollow);
  }

  return (
    <SearchBar
      users={users}
      onTextUpdate={fetchUsers}
      getUserProfile={getUserProfile}
    />
  );
}