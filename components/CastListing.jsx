import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function CastListing({name, role, image, num}) {

  return (
    <View style={styles.castBlock}>
      <Image source={image} style={[styles.imageContainer, {left: 30*num}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  castBlock: {
    marginTop: 10,
    marginBottom: 50,
  },
  imageContainer:{
    borderRadius:20,
    height: 40,
    width: 40,
    position: 'absolute',
  },
});
