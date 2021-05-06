import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CastListing({name, role}) {
  return (
    <View style={styles.castBlock}>
      <Text>{name}</Text>
      <Text style={{color:'gray'}}>{role}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  castBlock: {
    marginVertical: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
