import React, { useState } from 'react';
import { View, Picker, Switch, Text, TextInput, Alert, ScrollView, Keyboard ,StyleSheet, SafeAreaView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createEvent } from '../api/firebaseMethods';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import { editProfile, uploadPicture } from '../api/firebaseMethods';
import DefaultImg from '../assets/images/defaultprofile.png'

export default function CreateEventScreen({ navigation }) {
  const [wordCount, setWordCount] = useState(0)

  const [showName, setShowName] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([])

  const [ticketPrice, setTicketPrice] = useState('');
  const [ticketLink, setTicketLink] = useState('');
  const [intermission, setIntermission] = useState(false);
  const toggleIntermission = () => setIntermission(previousState => !previousState);
  const [ticketRequired, setTicketRequired] = useState(false);
  const toggleTicketRequired = () => setTicketRequired(previousState => !previousState);

  const [venueName, setVenueName] = useState('');
  const [venueAddress, setVenueAddress] = useState('');
  const [wheelchair, setWheelchair] = useState(false)
  const toggleWheelchair = () => setWheelchair(previousState => !previousState);
  const [hearingAssistance, setHearingAssistance] = useState(false);
  const toggleHearingAssistance = () => setHearingAssistance(previousState => !previousState);

  const [castRole, setCastRole] = useState('');
  const [castName, setCastName] = useState('');
  const [cast, setCast] = useState([]);
  window.castId = 0

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
    } else if (wordCount > 250) {
      Alert.alert('Description must be less than 250 words.')
    } else {
      handleAdd();
      createEvent(
        showName,
        description,
        venueName,
        venueAddress,
      );
      navigation.navigate('Explore');
      emptyState();
      window.$castId = 0;
    }
  };

  const handleAdd = () => {
    let temp = cast;
    setCast(temp += {
      id: window.$castId,
      name: castName,
      role: castRole,
    });
    setCastRole('');
    setCastName('');
    window.$castId++;
    console.log(cast[-1])
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
      {/*    <View style={styles.formSectionContainer}>
            <Text style={styles.formSectionText}>Add An Image</Text>
            <TouchableOpacity onPress={pickImage} >
              <Image source={profile} style={styles.imageContainer} />
            </TouchableOpacity>
          </View>*/}

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
                multiline={true}
                value={description}
                textAlign={'left'}
                onChangeText={(text) => (text.split(" ").length <= 250) ?
                (setWordCount(text.split(" ").length), setDescription(text)) :
                setWordCount(text.split(" ").length)}
                />
                {/*
                  Num words not displaying properly
                  (fix so spaces don't count as word)
                */}
              </View>
              <Text style={styles.formHeaderText}>{250 - wordCount} Words Remaining</Text>
            </View>
            <View style={styles.formBlockContainer}>
              <Text style={styles.formHeaderText}>Tags</Text>
              <View style={styles.formResponseContainer}>
                <TextInput
                style={styles.formResponseText}
                placeholder="Tags here (comma separated)"
                placeholderTextColor={"black"}
                multiline={true}
                value={tags}
                textAlign={'left'}
                onChangeText={(text) => setTags(text.split(",").map((value) => value.trim()))}
                />
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
            <View style={styles.buttonRow}>
              <View style={styles.formButtonContainer}>
                <Text style={styles.formHeaderText}>Wheelchair Accessible?</Text>
                <Switch
                  style={styles.formResponseContainer}
                  value={wheelchair}
                  onValueChange={toggleWheelchair}
                />
              </View>
              <View style={styles.formButtonContainer}>
                <Text style={styles.formHeaderText}>Hearing Assistance?</Text>
                <Switch
                  style={styles.formResponseContainer}
                  value={hearingAssistance}
                  onValueChange={toggleHearingAssistance}
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
                value={ticketPrice}
                textAlign={'left'}
                onChangeText={(text) => setTicketPrice(text)}
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
                value={ticketLink}
                textAlign={'left'}
                onChangeText={(text) => setTicketLink(text)}
                />
              </View>
              <View style={styles.buttonRow}>
                <View style={styles.formButtonContainer}>
                  <Text style={styles.formHeaderText}>Intermission?</Text>
                  <Switch
                    style={styles.formResponseContainer}
                    value={intermission}
                    onValueChange={toggleIntermission}
                  />
                </View>
                <View style={styles.formButtonContainer}>
                  <Text style={styles.formHeaderText}>Ticket Required?</Text>
                  <Switch
                    style={styles.formResponseContainer}
                    value={ticketRequired}
                    onValueChange={toggleTicketRequired}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.formSectionContainer}>
            <Text style={styles.formSectionText}>Cast & Creatives</Text>
            <View style={styles.formBlockContainer}>
              <Text style={styles.formHeaderText}>Name</Text>
                <View style={styles.formResponseContainer}>
                  <TextInput
                  style={styles.formResponseText}
                  placeholder="Name here"
                  placeholderTextColor={"black"}
                  value={castName}
                  textAlign={'left'}
                  onChangeText={(text) => setCastName(text)}
                  />
                </View>
            </View>
            <View style={styles.formBlockContainer}>
              <Text style={styles.formHeaderText}>Role</Text>
              <View style={styles.formResponseContainer}>
                <TextInput
                style={styles.formResponseText}
                placeholder="Role here"
                placeholderTextColor={"black"}
                value={castRole}
                textAlign={'left'}
                onChangeText={(text) => setCastRole(text)}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.addButton} onPress={() => handleAdd()} >
              <Text style={styles.buttonText}>+</Text>
           </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={() => console.log("draft")} >
              <Text style={styles.buttonText}>Save as Draft</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => console.log(tags)} >
              <Text style={styles.buttonText}>Create</Text>
             </TouchableOpacity>
           </View>
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
  formButtonContainer: {
    marginTop: 10,
    alignItems: 'center'
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
    width: "200%",
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'purple',
    fontSize: 16,
  },
  addButton: {
    marginTop: 20,
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 15,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: 'white',
    width: 25,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  picker: {
    marginTop: 5,
    paddingBottom: 5,
  },
});