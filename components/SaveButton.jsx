import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { colors } from '../styles/colors';

import * as firebase from 'firebase';
import { addToSaved, removeFromSaved } from '../api/firebaseMethods';

export default function SaveButton() {
  const [saved, setSaved] = useState(true);
  const [buttonStyle, setButtonStyle] = useState(styles.buttonContainerNotSaved);

  const handlePress = () => {saved ? removeFromSaved : addToSaved};
  const handleButtonStyle = () => {following ? setButtonStyle(styles.buttonContainerNotSaved) : setButtonStyle(styles.buttonContainerSaved)};

  return (
  <View style={buttonStyle}>
  <TouchableOpacity onPress={handlePress}>
    <Text>S</Text>
  </TouchableOpacity>
  </View>
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