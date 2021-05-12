import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, FlatList, TouchableOpacity, SafeAreaView, Dimensions} from 'react-native';
import * as firebase from 'firebase';
import { follow, unfollow, fetchUsers } from '../api/firebaseMethods'
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';
import { useUser, useUserUpdate } from '../hooks/UserContext';

import styles from '../styles/index';
import { normalize } from '../styles/methods';
const { width, height } = Dimensions.get('window');
import Tags from '../components/Tags';
import EventSmall from '../components/EventSmall';

export default function MessagesScreen({ navigation }) {
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
    )
  }

  return (
    <SafeAreaView style={styles.fullViewCenter}>
      <View style={styles.centerView}>
        <TextInput
          placeholder="Ex. artist name, show name, genre"
          style={styles.titleText}
          textAlign={'center'}
          onChangeText={(search)=> search==='' ? updateUsers([]) : updateUsers(search)}
        />
        <FlatList
          style={{width: width-normalize(20)}}
          data={users}
          renderItem={({ item, index }) => getUserProfile(item)}
        />
      </View>
    </SafeAreaView>
  );
}

const inline = StyleSheet.create({
  abs: {
    position: 'absolute',
  },
});