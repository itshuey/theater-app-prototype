import * as React from 'react';
import { StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { EventPostData } from '../data/eventpostdata';
import { Text, View } from '../components/Themed';

export default function ShowScreen({ navigation }) {

  const show = EventPostData[1];
  const tags = show.tags;
  const title = show.name;
  const dates = show.dates;
  const venue = show.venue;
  const description = show.description;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.navContainer}>
        <Ionicons name="chevron-back" size={24} color="black" />
        <View style={styles.navContainerActions}>
          <Ionicons name="paper-plane-outline" size={24} color="black" style={{marginHorizontal: 10}}/>
          <Ionicons name="star-outline" size={24} color="black" />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.tagContainer}>
          <View style={styles.tag}>
            <Text
              style={styles.tagText}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)">
              Immersive
            </Text>
          </View>
          <View style={styles.tag}>
            <Text
              style={styles.tagText}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)">
              Indoor
            </Text>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <View style={styles.titleInfoContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.infoText}>{venue}</Text>

            <View style={styles.showInfoContainer}>
              <Ionicons name="calendar-outline" size={16} color="gray" />
              <Text style={styles.showInfoText}>  Apr 2 - Sept 10</Text>
            </View>
            <View style={styles.showInfoContainer}>
              <Ionicons name="time-outline" size={16} color="gray" />
              <Text style={styles.showInfoText}>  147 min</Text>
            </View>
          </View>
          <Image source={require('../assets/images/default.png')} style={styles.imageContainer} />
        </View>
        <View style={styles.infoBlockContainer}>
          <Text style={styles.infoBlockHeaderText}>About 🔮</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
        <View style={styles.ticketContainer}>
          <Text style={styles.ticketText}>Tickets (Starting at $25.00)</Text>
          <Ionicons name="ios-arrow-forward-circle-outline" size={24} color="black" style={{marginTop: 4}}/>
        </View>
        <View style={styles.infoBlockContainer}>
          <Text style={styles.infoBlockHeaderText}>Cast & Creatives 🌟</Text>
          <View style={styles.castBlock}>
            <Text>Eva Wang </Text>
            <Text style={{color:'gray'}}>Director</Text>
          </View>
          <View style={styles.castBlock}>
            <Text>Eva Wang </Text>
            <Text style={{color:'gray'}}>Director</Text>
          </View>
          <View style={styles.castBlock}>
            <Text>Eva Wang </Text>
            <Text style={{color:'gray'}}>Director</Text>
          </View>
          <View style={styles.castBlock}>
            <Text>Eva Wang </Text>
            <Text style={{color:'gray'}}>Director</Text>
          </View>
        </View>

        <View style={styles.infoBlockContainer}>
          <Text style={styles.infoBlockHeaderText}>Accessibility</Text>
          <View style={styles.castBlock}>
            <Text>Wheelchair Accessible</Text>
            <Ionicons name="checkmark-circle-outline" size={16} color="green" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  navContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  navContainerActions: {
    flexDirection: 'row',
  },
  contentContainer: {
    paddingTop: 10,
    backgroundColor: 'transparent',
    marginHorizontal: 30,
    borderColor: 'black',
    borderWidth: 0,
  },
  titleInfoContainer: {
    flex: 3,
  },
  tagContainer: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 40,
  },
  tag: {
    borderColor: '#a9a9a9',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 2,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 3,
    paddingBottom: 3,
  },
  tagText: {
    fontSize: 11,
    color: '#a9a9a9',
  },
  infoText: {
    marginBottom: 10,
  },
  infoBlockContainer: {
    marginBottom: 20,
    marginTop: 5
  },
  imageContainer: {
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    height: 160,
    flex: 2,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 30,
  },
  showInfoContainer: {
    flexDirection: 'row',
    marginVertical: 2,
  },
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
  castBlock: {
    marginVertical: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ticketText: {
    marginVertical: 10,
    fontSize: 14,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  showInfoText: {
    fontSize: 14,
    color: 'gray',
  },
  aboutText: {
    marginTop: 5,
    fontSize: 14,
    color: 'gray',
  },
  descriptionText: {
    color: 'gray',
    fontSize: 16,
  },
  infoContainer: {
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  descriptionContainer: {
    borderRadius: 10,
    borderTopColor: 'gray',
  },
  infoBlockHeaderText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  reflectionsContainer: {
    borderRadius: 4,
    width: "95%",
    paddingTop: 5,
    paddingBottom: 5,
    marginVertical: 5,
  }
});
