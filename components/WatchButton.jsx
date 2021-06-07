import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { colors } from '../styles/colors';

import { addToWatched, removeFromWatched } from '../api/firebaseMethods';

export default function WatchButton({ user, show, isWatched }) {
  const [watched, setWatched] = useState(isWatched);
  const ibs = watched ? styles.buttonContainerWatched : styles.buttonContainerNotWatched;
  const [buttonStyle, setButtonStyle] = useState(ibs);

  const handlePress = () => {
    if (watched) {
      removeFromWatched(user, show);
    } else {
      addToWatched(user, show);
    }
    setWatched(!watched);
    handleButtonStyle();
  };

  const handleButtonStyle = () => {watched ? setButtonStyle(styles.buttonContainerNotWatched) : setButtonStyle(styles.buttonContainerWatched)};

  return (
  <TouchableOpacity onPress={handlePress}>
  <View style={buttonStyle}>
    <Text>W</Text>
  </View>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainerWatched: {
    borderRadius:40,
    height: 70,
    width: 70,
    backgroundColor: colors.bg2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  buttonContainerNotWatched: {
    borderRadius:40,
    height: 70,
    width: 70,
    backgroundColor: colors.bg,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
});