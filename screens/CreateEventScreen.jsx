import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, Keyboard, SafeAreaView, FlatList, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import * as firebase from 'firebase';
import { createEvent, fetchUsers, addUserProfile, getUserProfile } from '../api/firebaseMethods';
import { useUser, useUserUpdate, updateUserInfo } from '../hooks/UserContext'

import styles from '../styles/index';

import MultiEntry from '../components/MultiEntry';
import BlockEntry from '../components/BlockEntry';
import CommaSeparated from '../components/CommaSeparated';
import Flipper from '../components/Flipper';
import CastFieldList from '../components/CastFieldList';

export default function CreateEventScreen({ navigation }) {
  const [charCount, setCharCount] = useState(0)

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
    } else if (charCount > 1000) {
      Alert.alert('Description must be less than 1000 characters.')
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

  const onChange = (index, name, role) => {
    name = name === null ? cast[index].name : name;
    role = role === null ? cast[index].role : role;
    (cast.length === index ? setCast([...cast, {name:name, role:role}]) : setCast([...(cast.slice(0,-1)), {...(cast[cast.length-1]), name:name, role:role}]));
  };

  const addNewCastBlock = () => {
    setCast([...cast, {name:"", role:""}]);
  };

  const removeCastBlock = () => {
    setCast(cast.slice(0,-1));
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

  return (
    <SafeAreaView style={styles.fullView}>
      <View style={styles.navView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create Event</Text>
        <Ionicons name="chevron-back" size={24} color="white" />
      </View>
      <ScrollView>
        <View style={styles.contentStretchView}>
          <View style={styles.contentStretchView}>
            <MultiEntry
                title={'Basic Information'}
                subtitles={['Show Name']}
                placeholders={['Enter show name']}
                vals={[showName]}
                onValUpdates={[setShowName]}
              />
            <BlockEntry
              title={'Description'}
              placeholder={'A brief description'}
              numChars={1000}
              chars={charCount}
              block={description}
              onCharsUpdate={setCharCount}
              onBlockUpdate={setDescription}
            />
            <CommaSeparated
              title={'Tags'}
              placeholder={'Tags here (comma separated)'}
              val={tags}
              onValUpdate={setTags}
            />
          </View>

          <View style={styles.contentStretchView}>
            <MultiEntry
              title={'Venue Information'}
              subtitles={['Venue Name', 'Venue Address']}
              placeholders={['Enter venue name', 'Enter venue address']}
              vals={[venueName, venueAddress]}
              onValUpdates={[setVenueName, setVenueAddress]}
            />
            <View style={styles.itemView}>
              <Flipper
                title={'Hearing Assistance?'}
                val={hearingAssistance}
                onValUpdate={toggleHearingAssistance}
              />
              <Flipper
                title={'Wheelchair?'}
                val={wheelchair}
                onValUpdate={toggleWheelchair}
              />
            </View>
          </View>

          <View style={styles.contentStretchView}>
            <MultiEntry
              title={'Logistical Information'}
              subtitles={['Minimum Ticket Price', 'Ticket Link']}
              placeholders={['e.g. $25.00', 'e.g. https://example.com']}
              vals={[ticketPrice, ticketLink]}
              onValUpdates={[setTicketPrice, setTicketLink]}
            />
            <View style={styles.itemView}>
              <Flipper
                title={'Intermission'}
                val={intermission}
                onValUpdate={toggleIntermission}
              />
              <Flipper
                title={'Ticket Required?'}
                val={ticketRequired}
                onValUpdate={toggleTicketRequired}
              />
            </View>
          </View>

          <View style={styles.contentStretchView}>
            <CastFieldList
              title={'Cast & Creatives'}
              cast={cast}
              onTextUpdate={onChange}
              getUserProfile={getUserProfile}
            />
            <View style={styles.itemView}>
              <TouchableOpacity onPress={() => addNewCastBlock()} >
                <Ionicons name="ios-add-circle-outline" size={24} color="purple" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeCastBlock()} >
                  <Ionicons name="ios-remove-circle-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.itemView}>
            <TouchableOpacity onPress={() => console.log(tags)} >
              <Text style={styles.buttonText}>Create</Text>
             </TouchableOpacity>
           </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}