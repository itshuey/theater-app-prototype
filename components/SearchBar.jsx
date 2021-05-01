import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

export default function SearchBar({users, onTextUpdate, getUserProfile}) {
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder="Search!"
          style={styles.searchBar}
          textAlign={'center'}
          onChangeText={(search)=>onTextUpdate(search)} />
        <Text style={styles.resultsHeaderText}>Results:</Text>
        <FlatList
          style={styles.userList}
          data={users}
          renderItem={({ item, index }) => getUserProfile(item)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  searchBarContainer: {
    width: '70%',
    marginTop: 40,
  },
  searchBar: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: 18,
  },
  resultsHeaderText: {
    fontWeight: '400',
    fontSize: 18,
    marginTop: 40,
  },
  userList: {
    marginTop: 20,
  },
});
