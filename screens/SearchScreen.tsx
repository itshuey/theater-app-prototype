import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import { follow, unfollow, fetchUsers } from '../api/firebaseMethods'
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';
import { useUser, useUserUpdate } from '../hooks/UserContext';

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
        <View style={styles.userItemContainer}>
          <View style={styles.userDetailContainer}>
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
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder="Search!"
          style={styles.searchBar}
          textAlign={'center'}
          onChangeText={(search)=>updateUsers(search)} />
        <Text style={styles.resultsHeaderText}>Results:</Text>
        <FlatList
          style={styles.userList}
          data={users}
          renderItem={({ item, index }) => getUserProfile(item)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  searchBarContainer: {
    width: '70%',
    marginTop: 40,
  },
  resultsHeaderText: {
    fontWeight: '400',
    fontSize: 18,
    marginTop: 40,
  },
  searchBar: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: 18,
  },
  userList: {
    marginTop: 20,
  },
  userItemContainer: {
    borderRadius: 8,
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 100,
  },
  userName: {
    marginVertical: 1,
    fontSize: 18,
  },
  userHandle: {
    color: 'gray',
  }
});