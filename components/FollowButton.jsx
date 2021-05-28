import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { useUser, useUserUpdate } from '../hooks/UserContext';
import { follow, unfollow } from '../api/firebaseMethods';

import * as firebase from 'firebase';

export default function FollowButton({navigation, uid, fid}) {
  const [following, setFollowing] = useState(true);
  const [buttonStyle, setButtonStyle] = useState(styles.followingButton);
  const [textStyle, setTextStyle] = useState(styles.followingText);
  const [text, setText] = useState('Following')

  const updateUserInfo = useUserUpdate();

  const handleText = () => {following ? setText('Following') : setText('Follow')};
  const handleTextStyle = () => {following ? setTextStyle(styles.followingText) : setTextStyle(styles.followText)};
  const handleButtonStyle = () => {following ? setButtonStyle(styles.followingButton) : setButtonStyle(styles.followButton)};

  function handleFollow() {
    updateUserInfo({ following: [...following, fid] });
    follow(currentUserID, fid);
  }

  function handleUnfollow() {
    updateUserInfo({ following: currentUserFollowing.filter((id) => id !== fid) });
    unfollow(currentUserID, fid);
  }

  const doFollow = () => {
    following ? handleUnfollow() : handleFollow();
    setFollowing(!following);
  };

  return (
    <View style={buttonStyle}>
    <TouchableOpacity onPress={doFollow}>
      <Text style={textStyle}> {text} </Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  followButton: {
    padding: 10,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
  followingButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'black'
  },
  followText: {
    fontSize: 12,
    fontWeight: '600',
  },
  followingText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
  },
});
