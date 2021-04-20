import React, { useState } from 'react';
import { View, Text, TextInput, Alert, ScrollView, Keyboard ,StyleSheet, SafeAreaView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createEvent } from '../api/firebaseMethods';

export default function CreateEventScreen({ navigation }) {
  const [showName, setShowName] = useState('');
  const [description, setDescription] = useState('');

  const [venueName, setVenueName] = useState('');
  const [venueAddress, setVenueAddress] = useState('');

  const emptyState = () => {
    setShowName('');
    setDescription('');
    setVenueName('');
    setVenueAddress('');
  };

  const handlePress = () => {
    if (!showName) {
      Alert.alert('Show name is required!');
    } else if (!venueName) {
      Alert.alert('Venue name is required!');
    } else if (!venueAddress) {
      Alert.alert('Venue Address is required.');
    } else {
      createEvent(
        showName,
        description,
        venueName,
        venueAddress,
      );
      navigation.navigate('Explore');
      emptyState();
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.navContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Create Event</Text>
          <Ionicons name="chevron-back" size={24} color="white" />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.formSectionContainer}>
            <Text style={styles.formSectionText}>Basic Information</Text>
            <View style={styles.formBlockContainer}>
              <Text style={styles.formHeaderText}>Show Name</Text>
              <View style={styles.formResponseContainer}>
                <TextInput
                style={styles.formResponseText}
                placeholder="Show name here"
                placeholderTextColor={"black"}
                value={showName}
                textAlign={'left'}
                onChangeText={(name) => setShowName(name)}
                />
              </View>
            </View>
            <View style={styles.formBlockContainer}>
              <Text style={styles.formHeaderText}>Description</Text>
              <View style={styles.formResponseContainer}>
                <TextInput
                style={styles.formResponseText}
                placeholder="A brief description"
                placeholderTextColor={"black"}
                value={description}
                textAlign={'left'}
                onChangeText={(text) => setDescription(text)}
                />
              </View>
            </View>
          </View>
          <View style={styles.formSectionContainer}>
            <Text style={styles.formSectionText}>Cast & Creatives</Text>
            <View style={styles.formBlockContainer}>
              <Text style={styles.formHeaderText}>Director</Text>
              <View style={styles.formResponseContainer}>
                <Text style={styles.formResponseText}>A brief name here</Text>
              </View>
            </View>
            <View style={styles.formBlockContainer}>
              <Text style={styles.formHeaderText}>Playwright</Text>
              <View style={styles.formResponseContainer}>
                <Text style={styles.formResponseText}>A brief name here</Text>
              </View>
            </View>
          </View>
          <View style={styles.formSectionContainer}>
            <Text style={styles.formSectionText}>Venue Information</Text>
            <View style={styles.formBlockContainer}>
              <Text style={styles.formHeaderText}>Venue Name</Text>
              <View style={styles.formResponseContainer}>
                <TextInput
                style={styles.formResponseText}
                placeholder="Venue name here"
                placeholderTextColor={"black"}
                value={venueName}
                textAlign={'left'}
                onChangeText={(text) => setVenueName(text)}
                />
              </View>
            </View>
            <View style={styles.formBlockContainer}>
              <Text style={styles.formHeaderText}>Venue Address</Text>
              <View style={styles.formResponseContainer}>
                <TextInput
                style={styles.formResponseText}
                placeholder="Venue address here"
                placeholderTextColor={"black"}
                value={venueAddress}
                textAlign={'left'}
                onChangeText={(text) => setVenueAddress(text)}
                />
              </View>
            </View>
          </View>
          <View style={styles.formSectionContainer}>
            <Text style={styles.formSectionText}>Logistical Information</Text>
            <View style={styles.formBlockContainer}>
              <Text style={styles.formHeaderText}>Minimum Ticket Price</Text>
              <View style={styles.formResponseContainer}>
                <TextInput
                style={styles.formResponseText}
                placeholder="e.g. $25.00"
                placeholderTextColor={"black"}
                value={venueName}
                textAlign={'left'}
                onChangeText={(text) => setVenueName(text)}
                />
              </View>
            </View>
            <View style={styles.formBlockContainer}>
              <Text style={styles.formHeaderText}>Ticket Link</Text>
              <View style={styles.formResponseContainer}>
                <TextInput
                style={styles.formResponseText}
                placeholder="e.g. https://example.com"
                placeholderTextColor={"black"}
                value={venueAddress}
                textAlign={'left'}
                onChangeText={(text) => setVenueAddress(text)}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => console.log("Submit")} >
            <Text style={styles.buttonText}>Create</Text>
           </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
  },
  navContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  navContainerActions: {
    flexDirection: 'row',
  },
  contentContainer: {
    marginTop: 50,
    backgroundColor: 'transparent',
    marginHorizontal: 30,
  },
  headerText: {
    fontSize: 18,
    paddingTop: 2,
  },
  formSectionContainer: {
    marginBottom: 20,
  },
  formSectionText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  formBlockContainer: {
    marginTop: 10,
  },
  formHeaderText: {
    fontSize: 12,
    fontWeight: '300',
  },
  formResponseText: {
    fontSize: 15,
    fontWeight: '300',
  },
  formResponseContainer: {
    marginTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1.5,
    borderBottomColor: 'purple',
  },
  button: {
    marginTop: 20,
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 15,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: 'white',
    width: "50%",
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'purple',
    fontSize: 16,
  },

});