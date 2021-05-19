import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { colors } from '../styles/colors';

import { addToWatched, removeFromWatched } from '../api/firebaseMethods';

export default function WatchButton() {
  const [watched, setWatched] = useState(true);
  const [buttonStyle, setButtonStyle] = useState(styles.buttonContainerNotWatched);

  const handlePress = () => {saved ? removeFromWatched : addToWatched};
  const handleButtonStyle = () => {following ? setButtonStyle(styles.buttonContainerNotWatched) : setButtonStyle(styles.buttonContainerWatched)};

  return (
  <View style={buttonStyle}>
  <TouchableOpacity onPress={handlePress}>
    <Text>S</Text>
  </TouchableOpacity>
  </View>
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