import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function ChooseImg({onPress, profPic}) {
  return (
  <View style={styles.formSectionContainer}>
    <TouchableOpacity onPress={onPress} >
      <Image source={profPic} style={styles.imageContainer} />
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  formSectionText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  imageContainer: {
    height: 120,
    width: 90,
  },
});