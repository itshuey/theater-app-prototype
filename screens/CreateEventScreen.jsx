import React, { useState } from 'react';
import { View, Picker, FlatList, Switch, Text, TextInput, Alert, ScrollView, Keyboard ,StyleSheet, SafeAreaView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createEvent } from '../api/firebaseMethods';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import DefaultImg from '../assets/images/defaultprofile.png'
import * as firebase from 'firebase';
import { editProfile, uploadPicture } from '../api/firebaseMethods';
import { follow, unfollow } from '../api/firebaseMethods'
import { useUser, useUserUpdate } from '../hooks/UserContext';

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

  const [cast, setCast] = useState([{name:'', role:''}]);
  var castId = 0;

  const [users, setUsers] = useState([]);
  const currentUserInfo = useUser();
  const updateUserInfo = useUserUpdate();
  const currentUserFollowing = currentUserInfo.following;
  const currentUserID = currentUserInfo.id;

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
      castId = 0;
    }
  };

  const onChange = (t, e) => {
    (e === 'role') ? (cast.length === castId ? setCast([...cast, {...(cast[castId]), role:t}]) : setCast([...(cast.slice(0,-1)), {...(cast[cast.length-1]), role:t}])) :
    (cast.length === castId ? setCast([...cast, {...(cast[castId]), name:t}]) : setCast([...(cast.slice(0,-1)), {...(cast[cast.length-1]), name:t}]));
  };
  // FIX TO HANDLE EDITING PREVIOUS CAST STATES AFTER HANDLEADD() INCREMENTS CASTID PROB BY INCLUDING CASTID IN COMPONENT AND ACCESSING ON CLICK

  // TODO:
  //        1) ^ that by exporting cast as component
  //        2) fix fetchUsers()
  //        3) implement push to firebase

  const handleAdd = () => {
    castId++;
    console.log(cast[-1])
    // add new cast component
  };

  const fetchUsers = (search) => {
    firebase.firestore().collection('users')
    .where('firstName','>=',search)
    .get()
    .then((querySnapshot) => {
      let users = querySnapshot.docs.map(doc => {
        const id = doc.id;
        const data = doc.data();
      })
      setUsers(users);
    })
  }

  const addUserProfile = (user) => {
    return (
      <TouchableOpacity onPress={() => onChange(user.name, 'name')}>
        <View style={styles.userItemContainer}>
          <View>
            <Text style={styles.userName}>{user.firstName} {user.lastName}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

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
            <View style={styles.container}>
            <View style={styles.formResponseContainer}>
              <TextInput
                placeholder="Name here"
                style={styles.formResponseText}
                textAlign={'left'}
                value={cast[castId].name}
                onChangeText={(text)=>fetchUsers(text) ? fetchUsers(text) : onChange(text, 'name')} />
              <FlatList
                style={styles.userList}
                data={users}
                renderItem={({ item, index }) => addUserProfile(item)}
              />
            </View>
            </View>
            <View style={styles.formBlockContainer}>
              <Text style={styles.formHeaderText}>Role</Text>
              <View style={styles.formResponseContainer}>
                <TextInput
                style={styles.formResponseText}
                placeholder="Role here"
                value={cast[castId].role}
                textAlign={'left'}
                onChangeText={(text) => onChange(text, 'role')}
                />
              </View>
            </View>
            <TouchableOpacity onPress={() => handleAdd()} >
              <Ionicons name="ios-add-circle-outline" size={24} color="purple" />
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