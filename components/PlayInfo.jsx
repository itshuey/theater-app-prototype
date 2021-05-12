import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import BlockText from '../components/BlockText';

import styles from '../styles/index';

export default function PlayInfo({title, venue, dates, runtime, image, price, description}) {
  return (
  <View style={styles.titleContainer}>
    <View style={styles.card}>
      <ImageBackground source={image} style={styles.fullImageBack} />
    </View>
    <View style={styles.titleView}>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.splitView}>
        <View style={styles.dynamicViewBorderless}>
          <Text style={styles.subtitleText}>{venue}</Text>
          <Text style={styles.subtitleText}>{dates[0]} - {dates[1]}</Text>
        </View>
        <View style={styles.dynamicViewBorderlessRight}>
          <Text style={styles.subtitleText}>Tickets</Text>
          <Text style={styles.subtitleText}>${price}</Text>
        </View>
      </View>
    </View>
    <View style={styles.titleView}>
      <BlockText text={description} />
    </View>
  </View>
  );
};

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   titleText: {
//     fontSize: 30,
//   },
//   titleInfoContainer: {
//     flex: 3,
//   },
//   infoText: {
//     marginBottom: 10,
//   },
//   showInfoContainer: {
//     flexDirection: 'row',
//     marginVertical: 2,
//   },
//   showInfoText: {
//     fontSize: 14,
//     color: 'gray',
//   },
//   imageContainer: {
//     borderRadius: 10,
//     borderColor: 'gray',
//     borderWidth: 1,
//     height: 160,
//     flex: 1,
//   },
// });
