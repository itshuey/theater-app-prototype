import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { colors } from '../styles/colors';

import * as firebase from 'firebase';
import { addToSaved, removeFromSaved } from '../api/firebaseMethods';

export default function SaveButton({ user, show, isSaved }) {
  const [saved, setSaved] = useState(isSaved);
  const ibs = saved ? styles.buttonContainerSaved : styles.buttonContainerNotSaved;
  const [buttonStyle, setButtonStyle] = useState(ibs);

  const handlePress = () => {
    if (saved) {
      removeFromSaved(user, show);
    } else {
      addToSaved(user, show);
    }
    setSaved(!saved);
    handleButtonStyle();
  };

  const handleButtonStyle = () => {saved ? setButtonStyle(styles.buttonContainerNotSaved) : setButtonStyle(styles.buttonContainerSaved)};

  return (
  <TouchableOpacity onPress={handlePress}>
  <View style={buttonStyle}>
    <Text>S</Text>
  </View>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainerSaved: {
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
  buttonContainerNotSaved: {
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