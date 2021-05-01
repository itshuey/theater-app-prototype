import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TicketButton({price}) {
  return (
  <View style={styles.ticketContainer}>
    <Text style={styles.ticketText}>Tickets (Starting at ${price})</Text>
    <Ionicons name="ios-arrow-forward-circle-outline" size={24} color="black" style={{marginTop: 4}}/>
  </View>
  );
};

const styles = StyleSheet.create({
  ticketContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    marginBottom: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
  ticketText: {
    marginVertical: 10,
    fontSize: 14,
    marginLeft: 5,
    fontWeight: 'bold',
  },
});